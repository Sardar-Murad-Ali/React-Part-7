import React from "react";
import "./Part2.css"



// let random=1
export default function Part2(){
   


    // meme obj is actually an array of objects
    let [memearray,setmemearray]=React.useState([])
    // url must be given a value not ""
    let [random,setrandom]=React.useState("../pictures/pic.png")
    // console.log(memeobj)



        // React.useEffect(function(){
        //     fetch("https://api.imgflip.com/get_memes")
        //     .then((response)=>{
        //         return response.json()
        //     }).then((result)=>{
        //         // return console.log(result.data.memes)
        //         return setmemearray(result.data.memes)
        //     })
        // },[])


        // MAKING THE ABOVE WITH HELP OF ASYNC AWAIT
        React.useEffect(function(){
            async function nam(){
                try {  
                    console.log("this runs one time")
                   let jsondata=await fetch("https://api.imgflip.com/get_memes")
                   let jsobj=await jsondata.json()
                   setmemearray(jsobj.data.memes)
                } catch (error) {
                    console.log("we cannot fetch the api please wait till then"+ error)
                }
            }  
            nam()
        },[])






          
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
        

        



    function fun2(){
        let randomno=Math.floor(Math.random()*memearray.length)
        setrandom(memearray[randomno].url)
        // console.log(randomno)
    }

 
    return(
        <div className="main2">
            
             <div style={{display:"flex"}} className="inputs">
                <input type="text" id="id" class="no1" placeholder="Upper Text" onChange={changefun} name="upper"/>
                <input type="text" id="id" class="no1"placeholder="Lower Text" onChange={changefun} name="lower" ></input> 
            </div>
            <div>
                <button type="button" className="memebtn" onClick={fun2}> Get New Meme Image</button>
            </div>
            states of the text below
            <div className="upper" style={{display:random?"block":"none"}}>{textobj.upper}</div>
            <div className="below" style={{display:random?"block":"none"}}>{textobj.lower}</div>
            end the state of the text
            <img alt="" src={random} className="memepic"/>  


        </div>
    );
}
// the fun2 is running but not updating the random 
// then the concept of state comes in
// without state this will not work
// we cannot makr the api call eithout the useeffect