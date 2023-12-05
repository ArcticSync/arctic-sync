import { S3Client, ListObjectsV2Command, GetObjectCommand, S3 } from '@aws-sdk/client-s3';


// Configure AWS SDK v3 with your credentials and region
const s3Client = new S3Client({
    credentials: {
        accessKeyId: 'AKIAVKHENQMXYBOLPJ5N',
        secretAccessKey: 'cZu7Y6tDuQiTT3jp6lqHG9VWPO7Ek6rOW2jp6w8H',
    },
    region: 'ap-south-1',
});


// Function to get information about all files in the S3 bucket
async function getBucketInfo(bucketName) {
    try {
        // List all objects in the bucket
        const command = new ListObjectsV2Command({ Bucket: bucketName });
        const response = await s3Client.send(command);

        // Display bucket information
        const bucketInfo = {
            bucketName: bucketName,
            files: [],
            folders: [],
            totalSize: 0,
        };
        console.log(response.Contents)
        // Display information for each file, including file names and keys
        response.Contents.forEach((file) => {
            const fileInfo = {
                filePath: file.Key,
                fileName: file.Key.split('/').pop(),
                fileSize: file.Size,
            };

            // if (fileInfo.filePath === fileInfo.fileName) {
            //     // If the object is a folder (ends with '/')
            //     bucketInfo.files.push(fileInfo);
            // } else {
            //     if (fileInfo.fileName !== '') {
            //         bucketInfo.folders[file.Key.split('/')[0]] = bucketInfo.folders[file.Key.split('/')[0]] || []
            //         bucketInfo.folders[file.Key.split('/')[0]].push(fileInfo)
            //     }
            // }
            if (fileInfo.fileName !== '') {
                bucketInfo.files.push(fileInfo)
            }
            bucketInfo.totalSize += file.Size;
        });

        return bucketInfo;
    } catch (error) {
        console.error('Error:', error);
        throw error; // Re-throw the error for handling in the calling code, if needed
    }
}


export async function getFileObjectFromS3(key) {
    try {
        // Create a GetObjectCommand with the bucket name and key

        const s3 = new S3({
            credentials: {
                accessKeyId: 'AKIAVKHENQMXYBOLPJ5N',
                secretAccessKey: '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',
            }, region: 'ap-south-1'
        });
        const response = await s3.getObject({ Bucket: bucketName, Key: key });

        const reader = response.Body.getReader();
        const chunks = [];

        const readChunk = async () => {
            const { done, value } = await reader.read();

            if (done) {
                // All chunks have been read
                const blobData = Buffer.concat(chunks);

                return blobData;
            } else {
                chunks.push(value);
                // Continue reading the next chunk
                return readChunk(); // Return the result of the recursive call
            }
        };

        const res = await readChunk();

        const blob = new Blob([res])
        const file = new File([blob], key, {
            lastModified: response.lastModified,
            type: response.ContentType
        })
        file.tags = [{ name: "Content-Type", value: response.ContentType }, { name: "App-Name", value: "swiftify" }, { name: "File-Path", value: key }]
        return file; // return SomeData

    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}


// Replace 'YOUR_BUCKET_NAME' with your actual S3 bucket name
const bucketName = 'swiftify';

// Call the function to get bucket information
// await getBucketInfo(bucketName);
// export const data = await getFileObjectFromS3(bucketName, 'eth_logo.png')
// getFileFromS3(bucketName, 'eth_logo.png')

export async function getData() {
    // await getFileFromS3(bucketName, name)
    const bucketInfo = await getBucketInfo(bucketName)
    console.log(bucketInfo)

    const uploadArray = await Promise.all(
        bucketInfo.files.map(({ filePath }) => {
            return getFileObjectFromS3(filePath);
        })
    )
    return { uploadArray, bucketInfo }
}