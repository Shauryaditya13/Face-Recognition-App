Webcam.set({
    width:360,
    height:300,
    image_format:'png',
    png_quality:90
   });
   
   camera=document.getElementById("camera");
   Webcam.attach("camera");
   
   function TakeImage() {
    Webcam.snap(function(data_url){
    document.getElementById("Result").innerHTML="<img id='capturedimage' src='"+data_url+"'>";
    });
   }
   console.log("ml5version",ml5.version);
   imageclassifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/agSFt2ny9/",modelloaded);