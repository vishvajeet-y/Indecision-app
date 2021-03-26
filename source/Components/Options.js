import React from 'react'
import Option from './Option'
const Options=(props)=>(
     // <p>{props.options.length}</p>
   <div>
   <div className="widget-header">
   <h3 className="widget-header__title">Your Options</h3>
   <button
   className="button button--link"
    onClick={props.handleDeleteOptions}
  
    >Remove all </button>
   </div>

       {props.options.length==0&&<p className="widget__message">Please add Option to get Started</p>}
      
       {props.options.map((opt,index)=>{
      return    <Option key={opt}
           optionText={opt}
           count={index+1}
           handleDeleteOption={props.handleDeleteOption}
          />
  })
      }
        
     </div>
)
  export default Options