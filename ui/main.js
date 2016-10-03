var button = document.getElementById("counter");
button.onclick = function() {
    var request = new XMLHttpRequest();
    
    request.open("GET","http://indhucs.imad.hasura-app.io/counter",true);
    request.send(null);
    
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.Status === 200) {
                var counter = request.resposnseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
};