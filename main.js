function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6yPmH2Xi_/model.json",model_ready);
}
 
function model_ready(){
    console.log("MODEL IS LOADED");
    classifier.classify(gotresults);
    
}

function gotresults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
