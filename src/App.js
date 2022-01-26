import React,{useState} from "react"
import "./App.css"
import Weeks from "./Weeks"
import {Route} from "react-router-dom"
import Detail from "./Detail"

function App(){

  const [Day,Daylist] = useState(["월","화","수","목","금","토","일"])
    

  return(
    <div className="App">
      <div className="container">
      <Route path="/" exact> 
      <Weeks day={Day}/>
      </Route>

      <Route path="/Detail/:id">
       <Detail day={Day}/>
      </Route>
    
    </div>
    </div>
  )

}

export default App;