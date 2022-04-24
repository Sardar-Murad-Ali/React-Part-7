// this is the part of meme generator it is the first one which has the components named components 
// this is the app3.js actually
import React from "react"
import "./App.css"
import Part2 from "./components/Part2"
import Windowtracker from "./components/Windowtracker"

export default function App(){
     
    let [show,setshow]=React.useState(true)
    function clickfun(){
        // show?setshow(false):setshow(true)
        // setshow(pre=>pre?false:true)
        setshow(pre=>!pre)
    }


    return(
        <div>
            {/* <Part2/> */}
            {show && <Windowtracker/>}
            <button onClick={clickfun}>Click me</button> 
        </div>
    )
}