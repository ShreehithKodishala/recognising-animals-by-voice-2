

function startClassifications(){

    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hqNIKrFBZ/model.json', modelReady);
    
    }
    
    function modelReady(){
    classifier.classify(gotResults);
    
    }