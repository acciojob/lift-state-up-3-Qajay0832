
import React ,{useState,useEffect} from "react";
import './../styles/App.css';
import Child from "./Child";


const App = () => {
  const [selectedoption, setSelectedOption] = useState('');
  const [selectedChild, setSelectedChild] = useState([{
    id:1,
    text:'Child Component 1',
    option:'option 1',
    checked:false,
    background:'red'
  },{
    id:2,
    text:'Child Component 2',
    option:'option 2',
    background:'yellow'
  }]);

  const handleClick=(id)=>{
    
    setSelectedChild(selectedChild.map(child=>{
      if (child.id===id){
        setSelectedOption('Option '+child.id);
        return {...child,checked:true}
      }
      else{
        return {...child,checked:false}

      }
    }));
  }
  useEffect(()=>{console.log(selectedChild);},[selectedChild])
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {selectedChild.map(child=><Child handleClick={handleClick} text={child.text} option={child.option} id={child.id} background={child.background}/>)}
        <p>Selected Option: {selectedoption}</p>
    </div>
  )
}

export default App
