import './App.css';
import Home from './Home';
import {useState} from 'react';
function App() {
  const[email, setEmail] = useState('');
  let firstname = "aravindh";
  const[mobile, setMobile] = useState('')
  //let email = "vaparavindh@gmail.com"
  const validate=()=>{
    if(email === ""){
      alert("email is empty");
    }else if(mobile === ""){
      alert("mobile is empty")
    }else{
      alert("everything is fine")
    }
  }
  return (
    <div>
    <h1>this is Aravindh</h1>
    <Home/>
    {firstname}<br></br>
    {email}
    
    <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
    <button onClick={()=>validate()}>click</button>
    <br></br>
    {mobile}
    <input type="text" onChange={(e)=>setMobile(e.target.value)}/>
    <button onClick={()=>validate()}>click</button>
    </div>
  );
}

export default App;
