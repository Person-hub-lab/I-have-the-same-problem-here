compare.set({
    width:50,
    height:75,
    image_format:'png',
    image_quality:100
});

camera = document.getElementById("camera");
compare.attach('camera');
console.log('ml5:', ml5.version);

function photoTake(){
    compare.snap(function(data_uri){
     document.getElementById("compare").innerHTML = '<img id="captured_image src='+data_uri+'"/>'
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FYfDuc8EM/',modelLoaded);
