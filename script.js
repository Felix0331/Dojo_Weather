function hideCookie(id){
    document.getElementById(id).style.display="none";
}

function convertWeather(){
    if(document.getElementById('selector').value === "c"){
        var f = document.getElementsByClassName("convert");
        Array.prototype.forEach.call(f, function(f) {
            f.innerText = Math.floor((f.innerText - 32)*5/9);
        });
    }
    else if(document.getElementById('selector').value === "f"){
        var c = document.getElementsByClassName("convert");
        Array.prototype.forEach.call(c, function(c) {
            c.innerText = Math.floor((c.innerText*(9/5))+32);
        });
    }

}