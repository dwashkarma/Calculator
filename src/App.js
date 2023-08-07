import './index.css'
import './App.css';
import { useState } from 'react';

function App() {

  const[result,setResult]=useState("")
  const[cal,setCal]=useState("")

  const ops=['+','-','*','/','.']

  const updateCal=(value)=>{

    if (ops.includes(value) && cal==='' ||
    ops.includes(value) && ops.includes(cal.slice(-1))
    ){
      return;
    }
    setCal(cal+value)

    if (!ops.includes(value)){
      setResult(eval(cal+value).toString())
    }
  }

  const calculate=()=>{
    try{

      setCal(eval(cal).toString())
      
    }catch(err){
        setCal("{error}")
    }
  }

  const alldel=()=>{
    setCal('')
  }
  const del =()=>{
    if(cal===''){
      
    }
    const value= cal.slice(0,-1);
    setCal(value);
    
  }

  const createDigits=()=>{
    const digits=[];

    for ( let i=1;i<10;i++){
      digits.push(<button onClick={()=>updateCal(i.toString())} key={i}>  {i}
      </button>);
    }
    return digits;
  }
 
  return (
    <div className='App'>
      <div className='calculator'>
      <div className='name'>Calculator</div>
        <div className='display'>
          {result ? <span>({result})</span> :''} {cal || '0'}
          {/* <span>(0)</span> {cal || '0'} */}
        </div>
        <div className='operators'>
          <button onClick={()=>updateCal('+')}>+</button>
          <button onClick={()=>updateCal('-')}>-</button>
          <button onClick={()=>updateCal('*')}>*</button>
          <button onClick={()=>updateCal('/')}>/</button>

          <button onClick={del}>C</button>
          <button onClick={alldel}>AC</button>
        </div>

        <div className='digits'>
          {createDigits()}
          <button onClick={()=>updateCal('0')}>0</button>
          <button onClick={()=>updateCal('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );

}

export default App;
