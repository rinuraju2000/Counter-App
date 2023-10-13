import React, { useState } from 'react'
import {MDBBtn} from 'mdb-react-ui-kit';


function Counter() {
    
  // state creation
  const [counter,setCounter]=useState(0)//Apply 0 as initial state value
  //Function counter
  function incrementCounter(){
    //Increment by 1
    setCounter(counter+1)
  }

  function decrementCounter(){
    if(counter!=0){
    //Decrement by 1
    setCounter(counter-1)
    }
  }

  function resetCounter(){
    setCounter(0)
  }

  return (
    <div className='m-5 p-5 d-flex justify-content-center align-items-center'>

      <div className='container m-5 p-5 border border-2 border-info shadow rounded w-50 '>
        <h1 className='text-primary text-center'>Counter App</h1>
        <h2 className='text-center'>{counter}</h2>

        <div className='d-flex justify-content-between'>
          <MDBBtn onClick={incrementCounter} color='success'>Increment</MDBBtn>
          <MDBBtn onClick={decrementCounter} color='danger'>decrement</MDBBtn>
          <MDBBtn onClick={resetCounter} color='warning'>reset</MDBBtn>

        </div>

      </div>
  </div>
  )
}

export default Counter