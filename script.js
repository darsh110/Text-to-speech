const textarea=document.querySelector("txt-area");
const button=document.querySelector("button");
let isSpeaking =true;

const  textTOSpeech=()=> {
    const synth= window.speechSynthesis;
    const text=textarea.value;
    
    if(!synth.speak && text){
        const uttar=new SpeechSynthesisUtterance(text);
        synth.speak(uttar);
    }
    if(text.length>20){
        if(synth.speaking && isSpeaking){
            button.innerText="pause";
            synth.resume();
            isSpeaking = false;
        } else{
            button.innerText ="Resume";
            synth.pause();
            isSpeaking=true;
        }
        
    }

    setInterval(() =>{
    if(!synth.speaking && !isSpeaking){
    idSpeaking=true;
    button.innerText="convert to speech";
    }
 } )
};


button.addEventListener("click",textTOSpeech);