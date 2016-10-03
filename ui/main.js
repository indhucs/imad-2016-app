console.log("open");
var button = document.getElementById("counter");
button.onclick = function() {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        console.log("ready");
        if (request.readyState === XMLHttpRequest.DONE) {
            console.log("Done");
            if (request.Status === 200) {
                var counter = request.resposnseText;
                console.log(counter);
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open("GET","http://indhucs.imad.hasura-app.io/counter",true);
    request.send(null);
    
};
