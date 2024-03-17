import React from 'react'

export default function App3() {
    function greet(name){
        alert(name)
    }
  return (
    <div>
        <button onClick={()=>greet('John')}>Click</button>
        <button onClick={()=>greet('Cathy')}>Click</button>

    </div>
  )
}
