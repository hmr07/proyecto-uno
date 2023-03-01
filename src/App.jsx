
import UserTarj from "./components/UserTarj"
import "./App.css"
import phrases from "./data/phrases.json"
import { useState } from "react"

function App() {

  //console.log(phrases)

  const colors = [
    "#FDB137",
    "#785964",
    "#6D6875",
    "#B5838D",
    "#E5989B",
    "#7E9680",
    "#C73866",
    "#FFB4A2",
    "#79616F",
    "#EAB595"
  ]

  const [index, setIndex] = useState(0)
  
  const changeUser = () => {
    console.log("Cambio de usuario");
    if (index === phrases?.length - 1) {

      setIndex(0);
    } else {

      setIndex(index + 1);
    }
  }
  
    return (
     <div className="App" style={{ backgroundColor: colors[index] }}>

     
<UserTarj UserData={phrases [index]}/>

      <button onClick={changeUser}>
        <i className="bx bx-shuffle"></i>
         </button>
      
    
    </div>
    )
}

export default App
