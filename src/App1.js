// THIS IS APP1.JS AND IT HAS NO COMPONENTS 
import React from "react"
import "./App.css"

export  default function App(){
    let [data,setdata]=React.useState({})
    let [count,setcount]=React.useState(0)

    function clickfun(){
        setcount((precount)=>{
            return precount+1
        })
    }
    
    console.log("this is rendered infinite many times this is the side effect which is which is resolved by using the use effect")
    // without use effect the above console run always because setdata is running all the time
    
    // fetch("http://swapi.dev/api/people/1")
    // .then((response)=>{
    //     return response.json()
    // }).then((result)=>{
    //     return setdata(result)
    // })

       



    // using the useeffect below => the first parameter is the function which we want to run which contains the thing whixh is outside the scope of react like fetch api useeffect we use the useeffect that are outside the scope of the react like the fetch api this useEffect will run after the return of this main App will run the 2nd [] and [0] are same same means that this effect will run one time only after the return of the main fun app return if do not put the second parameter when will get same result the console log above and this fun will run infinite times 
    // React.useEffect(function(){
    //     console.log("this is effect function call")
    //     fetch("http://swapi.dev/api/people/1")
    //     .then((response)=>{
    //         return response.json()
    //     }).then((result)=>{
    //         return setdata(result)
    //     })
        
    // } ,[] )



    // if the above [] and below [count] does not match then then it will render the effect fun when the  this component will render (when we click the button the this app component will render [count] value also become different from previous count value increased to one this effect will also run) but one time it will always run second time it will check the condition if the past [] 
    // and the second [] will be different then it will run again as the count change when we click the button data we see is {} at the first then  after the return of app.jd the below will run and data will be changed and we can see on the screen
    // one thing any number in this array [] should not match if we want the effect to run


    React.useEffect(function(){
        console.log("this is effect function call")

        fetch("http://swapi.dev/api/people/1")
        .then((response)=>{
            return response.json()
        }).then((result)=>{
            return setdata(result)
        })
        
    } ,[count] )

    // [data] then it will infine 

    
    return(
        <div>
            {/* the below will cause error because it is just an object will cannot be displayed on the screen a string can easily be displayed */}
            {/* {data} */}

            {/* but the below is working on the criteria i explain above =>the below syntax is important null and 2 han  the below is json object*/}
            {JSON.stringify(data,null,2)}


            {/* the above and below is working same but below is not giving true results becasue of null and 2 */}
            {/* {JSON.stringify(data)} */}


            <h1>The count is {count}</h1>
            <button onClick={clickfun}>Add</button>
        </div>
    )
}



// anything in which the react is not the incharge is ccalled the side effect and to remove that side effect we have a hook named (useeffect) so the react become the incharge
// we use the useeffect that are outside the scope of the react like the fetch api 


// local storage api websokets and two states in sins are side effects react cannot hold them witout the use effect

// whenever the setdata runs then the whole component then will run again and when ever the effect fun runs then it will fetch the same data from the api again and again as long it runs again and again