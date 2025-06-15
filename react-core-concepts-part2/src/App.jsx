import './App.css'
import Conunter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  function handleClick(){
    alert('button clicked');
  }

  const handleClicked2 = () =>{
    alert('Second button clicked');
  }

  const addToFive = (num) =>{
    alert(num+5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Conunter></Conunter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClicked2}>Click Them</button>
      <button onClick={()=>{alert('Third clicked')}}>Third</button>
      <button onClick={()=>addToFive(3)}>Four</button>
    </>
  )
}

export default App
