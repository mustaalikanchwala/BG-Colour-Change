const button = document.querySelectorAll('.buttons');
const body = document.querySelector('body');
button.forEach((button)=>{
   button.addEventListener('click',(e)=>{
    // console.log(e)  // e is a mouse event
    // console.log(e.target); // "Target" it shows from which target the event has been come 
    switch (e.target.id) {
        case "grey" :
            body.style.backgroundColor = e.target.id
            break;
        case "yellow" :
            body.style.backgroundColor = e.target.id
            break;
        case "green" :
            body.style.backgroundColor = e.target.id
            break;
        case "brown" :
            body.style.backgroundColor =e.target.id
            break;
    
        default: 
        body.style.backgroundColor ='#121212'
            break;
    }
   })
});
    
