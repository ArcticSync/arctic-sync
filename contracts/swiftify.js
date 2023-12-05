function addFileToPermaWeb(state, data, username) {

    // ContractAssert(username || username.trim().length, `ERROR_PROVIDE_USERNAME_FOR_INDEX_${index}`);


    for (const [index, d] of data.entries()) {

        const { filePath, txnHash } = d;
        ContractAssert(filePath, `ERROR_PROVIDE_FILEPATH_FOR_INDEX_${index}`);
        ContractAssert(txnHash, `ERROR_PROVIDE_TXN_HASH_FOR_INDEX_${index}`);

        // if (!state.data.files) state.data.files = {}
        if (txnHash.trim().length === 0) {
            ContractAssert(state.data.files.username.hasOwnProperty(filePath), `ERROR_FILEPATH_${filePath}_DOES_NOT_EXIST`);
            delete state.data.files[username][filePath];
        } else {
            state.data.files = state.data.files || {}
            state.data.files[username] = state.data.files[username] || {}
            state.data.files[username][filePath] = txnHash;
        }
    }

    return { state };
};



export async function handle(state, action) {
    const input = action.input;
    const sender = action.caller;

    function isOwner(username) {
        if (state.data.owners && state.data.owners[username] && state.data.owners[username].includes(action.caller)) {
            return true
        }
        return false
    }

    switch (input.function) {
        case "createOwners":
            const owners = input.owners
            const newUser = input.username
            if (!state.data.owners) state.data.owners = {}
            state.data.owners[newUser] = [...owners]
            return { state, result: action }

        case "modifyOwners":
            const modifiedOwners = input.owners
            const user = input.username

            if (!isOwner(user)) throw new ContractError("YOU_ARE_NOT_ALLOWED_TO_MAKE_THIS_CALL");
            state.data.owners[user] = [...modifiedOwners]
            return { state }

        case "getOwners":
            state.data.owners = state.data.owners || {}
            if (!state.data.owners.hasOwnProperty(input.username)) throw new ContractError("ERROR_USERNAME_DOES_NOT_EXIST")

            return { result: state.data.owners[input.username] }

        case "addOrUpdateFiles":
            if (!isOwner(input.username)) throw new ContractError("YOU_ARE_NOT_ALLOWED_TO_MAKE_THIS_CALL");
            return addFileToPermaWeb(state, input.data, input.username)

        case "getFilesHashThroughUsername":
            ContractAssert(input.username.trim().length, "ERROR_NO_USERNAME_PASSEDs")

            ContractAssert(!state.data.files?.hasOwnProperty(input.username), `ERROR_USERNAME_${input.username}_DOES_NOT_EXIST`)

            return { result: state.data.files ? state.data.files[input.username] : {} };

        case "getFileByFilePath":
            const { username, filePath } = input;
            ContractAssert(username.trim().length, `ERROR_NO_USERNAME_PASSED`);
            ContractAssert(filePath.trim().length, `ERROR_NO_FILEPATH_PASSED`);

            state.data.files = state.data.files || {}
            const userExists = state.data.files.hasOwnProperty(username);
            const fileExists = userExists && state.data.files[username].hasOwnProperty(filePath);

            ContractAssert(userExists, `ERROR_USERNAME_${username}_DOES_NOT_EXIST`);
            ContractAssert(fileExists, `ERROR_FILEPATH_${filePath}_DOES_NOT_EXIST`);

            return { result: state.data.files.files[username][filePath] }

        case "isUsername":
            ContractAssert(input.username.trim().length, `ERROR_NO_USERNAME_PASSED`);
            state.data.files = state.data.files || {}
            return { result: !!state.data.files[input.username] };

        case "isOwner":
            ContractAssert(input.username.trim().length, `ERROR_NO_USERNAME_PASSED`);
            return { result: isOwner(input.username) }

        default:
            throw new ContractError("ERROR_INVALID_FUNCTION_REQUESTED");
    }

}

