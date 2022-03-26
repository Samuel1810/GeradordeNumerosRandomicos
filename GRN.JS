function getRandomNum(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateNum(){
    if(min > max || max < min){} 
    var min = parseFloat(document.getElementById("minimum").value);
    var max = parseFloat(document.getElementById("maximum").value);
    var result = parseFloat(getRandomNum(min, max));
    
    document.getElementById("demo").innerHTML = result;
}