import React, { useState } from 'react'
import OwnerList from './OwnerList'
import OwnerInput from './OwnerInput'

const Owners = ({listTodo, setListTodo}) => {

  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }

  return (

      <div className="center-container">
        <div className='p-2 pl-0'>
          Add new owner
        </div>
        <OwnerInput addList={addList}/>
        <div className='pt-1'>
          {listTodo && listTodo?.map((listItem,i)=>{
            return (
              <OwnerList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
            )
          })}
        </div>
      </div>

  )
}

export default Owners