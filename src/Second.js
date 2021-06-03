import React from 'react'


const Second= ({data,changeData})=>{
    return(
        <div style={{backgroundColor: 'yellow',padding:"30px"}}>
            {data}<br/>
            <button onClick={changeData}>Click</button>
        </div>
    )
}

export default Second;