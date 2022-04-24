import React from "react";
import "./Part2.css"
import Picarr from "./Picarr";

// let random=1
export default function Part2(){
   
    let [random,setrandom]=React.useState("")

    function fun2(){
        let randomno=Math.floor(Math.random()*Picarr.length)
        setrandom(Picarr[randomno].pic)
        console.log(randomno)
        console.log(random)
    }


    



   
     
    let [textobj,settextobj]=React.useState({
        upper:"",
        lower:""
    })

    function changefun(e){
          settextobj((pre)=>{
              return {...pre,
                       [e.target.name]:e.target.value
                          }
          })
    }
    console.log(textobj)
    
    return(
        <div className="main2">
            <form style={{marginTop:"24%"}}>

            <div style={{display:"flex"}} className="inputs">
                <input type="text" id="id" class="no1" placeholder="Upper Text" onChange={changefun} name="upper" value={textobj.upper}/>
                <input type="text" id="id" class="no1"placeholder="Lower Text" onChange={changefun}name="lower" value={textobj.lower}></input> 
            </div>

            </form>
            <div>
                <button type="button" className="memebtn" onClick={fun2}> Get New Meme Image</button>
            </div>



            {/* states of the text below */}
            <div className="upper" >{textobj.upper}</div>
            <div className="below" style={{display:random?"block":"none"}}>{textobj.lower}</div>
            {/* end the state of the text */}
            <img alt="" src={random} className="memepic"/>
        </div>
    );
}
// the fun2 is running but not updating the random 
// then the concept of state comes in
// without state this will not work