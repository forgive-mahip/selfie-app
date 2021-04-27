var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
function start()
{
document.getElementById("textbox").innerHTML="";
recognition.start();
console.log("started")
}
recognition.onresult=function(event)
{ console.log("result")
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        speak();
    }
}
function speak()
{

    var synth = window.speechSynthesis;
     //speak_data = document.getElementById("textbox").value;
     speak_data="Taking selfie. Please wait for 5 seconds";
      var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90

});
Webcam.attach(camera)
setTimeout(function() { snapshot(); save(); }, 5000);
}
camera=document.getElementById("camera")
function snapshot()
{
    Webcam.snap(function(data_uri)
     { document.getElementById("result").innerHTML = "<img id='selfie_image' src="+data_uri+">"; });

}
function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}