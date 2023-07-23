import React, { useState } from 'react'

export const InputForm = ({taskList,setTaskList}) => {

  const [inputText,setInputText] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();

    // 文字をコンソールに出力したい
    setTaskList([
        ...taskList,
        {
            id: taskList.length,
            text: inputText,
            completed: false
        }
    ]);
    //console.log(taskList);
    // 入力した文字を消す
    setInputText("");
}

  const handleChange = (e) =>{
    setInputText(e.target.value);
}

  return (
    <div className='inputForm'>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={inputText}/>
            <button>
                <i className="fa-solid fa-square-plus"></i>
            </button>
        </form>
    </div>
  )
}
