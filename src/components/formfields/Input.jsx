import React from 'react'

function Input(props) {
  return (
    <div className="">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        {props.label ? props.label : props.name}
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        name={props.name}
        id={props.id ? props.id : props.name}
        
        placeholder={props.placeholder ? props.placeholder : props.name}
        required={props.required ? props.required : false}
        onChange={props.onChangeHandler}
        type={props.type ? props.type : "text"}
      />
      <p className="text-red-500 text-xs italiFc">{props.text}</p>
    </div>
  )
}

export default Input