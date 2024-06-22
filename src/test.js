import React from 'react'

const Test = (props) => {
  
  const{count, increment, decrement} = props
    return (
    <>
        <p>
            Vlaue is {count}
        </p>
        <button type='button' onClick={increment}>
         +   
        </button>
        <button type='button' onClick={decrement}>
         -   
        </button>
    </>
  )
}

export default Test