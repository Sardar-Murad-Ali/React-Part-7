import React, { useEffect } from "react"

export default function Windowtracker(){
 


    // we want to see when we resize the page the innerWidth num autumatically changes so we need to run the resize event listener which is on the window which is outside the scope of React so we need to use the react.useeffect when ever we resize the page the console.log is running and event is also ??running?? reason but it is running every moment the window resize event
    let [windowwidth,setwindowwidth]=React.useState(window.innerWidth)
    // without use effect the resize is running ??? we if we do not resize the page it will set the same width again and again console.log runs many again and again and after some time we resize the page we see that console.log has run many times but by use effect it console.log run no.time we rezise page=console.log runs  by the use effect it the window resize event is running only when we are resizing the page
    


    // React.useEffect(()=>{
    //     window.addEventListener("resize",()=>{
    //         // console.log("resizing the window lebgth")
    //         // console.log(window.innerWidth)
    //          setwindowwidth(window.innerWidth)
    //         })
    // },[])
    console.log("running")
    
    // to solve the memory leaque we will run the below instead of the above
    // the below has no dependencies [] so it is not working as the before we learn the effect 
    // it is working on any change in in the page size
    // if we do not use the effect then we see the abnormal behaviout of the console log og the fun1
    // remember if we want to use the async fun below then have to put the async fun in the below aninimous function return fun must always be the part of aninimous fun because if it is the part of async fun then by return fun we get the promise not the fun value which is to remove the upper event
    React.useEffect(()=>{
        function fun1(){
            setwindowwidth(window.innerWidth)
            console.log("if set is on the below will run")
        }
        window.addEventListener("resize",fun1)
            
        return function(){
             console.log("if set is off this fun will run we will avoid the mwmory leaque window event will not run")
            window.removeEventListener("resize",fun1)
        }
    },[])
    

    
  


    return(
        <div>           
            {/* below is for both the button toogle and the useeffect */}
           <h1>The inner width of window is  {windowwidth} </h1>
        </div>
    )}





    // when we clck the button show is false width dissaperes we resize the page and then click the button the show is true we then see the updated width not the previous one 


    // the below is for the window resize event for below one 
    // {show &&  <h1>The inner width of window is  {`${windowwidth}`} </h1>}
    // we click the button the width or the line vanishes and we we resize it the resize event runs but gives a warning of memory leaque it means that this component is not the part of dom but browser is trying to set the setwindowwidth this is memory leaque
    // we want is the button is set so the show is  off we do not need to to run event on the window we want to clean the useEffect this is called effect clenup


    // the show state is is in app and the component is this when show is on this component will show up and the use effect 1st fun will run if set is off this component will vanish and use effect 2nd fun will run 1 time and most of the time we clean the first fun the second we do need to add any event on the window if the component is not there