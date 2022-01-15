function confirmation(){
    let message=confirm("your response and the data will be recorded")
    if(message==true)
    {
        window.setTimeout('alert("your response is recorded ");window.close();',2000);
    }

   
}
//  setInterval(
//     function confirmation(){
//         let message=alert("your response and the data will be recorded")
        
//     },2000
// );