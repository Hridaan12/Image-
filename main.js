Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_qwallty:90
    });
    camera = document.getElementById("camera");

    Webcam.attach( '#camera' );

    function take_snapshot(){
        Webcam.snap(function(data_uri){

            document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>'
        })
    
    }
    console.log('ml5version', ml5.version);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7yKahgJoP/model.json',modelLoaded);

    function modelLoaded(){
        console.log('model Loaded');
    }

    function check(){
        img  =  document.getElementById('captured_image');
        classifier.classify(img , gotResult);


    }


    function gotResult(error , results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    
    document.getElementById("result_objectname").innerHTML = results[0].label;

    document.getElementById("result_objectaccuracy").innerHTML = results[0].confidence.toFixed(3);

}
}

