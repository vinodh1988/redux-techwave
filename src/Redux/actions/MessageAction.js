export const MessageAction = ()=>{
    let strings =["hello world!!!","Java java java",
        "Node JS is simple", "React is Easy","Angular is easier"];

     return {
        type:"MESSAGE_ACTION", 
        data:strings[Math.round(Math.random()*4)]
     }
}