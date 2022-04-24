// THIS IS APP2.JS AND IT HAS NO COMPONENTS 
import React from "react"
import "./App.css"

export  default function App(){
    // let [data,setdata]=React.useState("")
    // we can also use the above initial state is empty
    let [data,setdata]=React.useState({})
    let [count,setcount]=React.useState(1)

    function clickfun(){
        setcount((precount)=>{
            return precount+1
        })
    }
    
    console.log("this is rendered infinite many times this is the side effect which is which is resolved by using the use effect")


    // by the below we are changing character in counter there is the number for the character

    React.useEffect(function(){
        console.log("this is effect function call")

        fetch(`http://swapi.dev/api/people/${count}`)
        .then((response)=>{
            return response.json()
        }).then((result)=>{
            return setdata(result)
        })
        
    } ,[count] )

    // [data] then it will infine 

    
    return(
        <div>
         

            {/* sooory the below is also working  witout the null and 2 as in app1.js sooory*/}
            {JSON.stringify(data)}


            <h1>The is the character no {count}</h1>
            <button onClick={clickfun}>Go to the next character</button>
        </div>
    )
}
