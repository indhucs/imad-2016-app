console.log("open");
var button = document.getElementById("counter");
button.onclick = function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        console.log("ready");
        if (request.readyState === XMLHttpRequest.DONE) {
            console.log("Done");
            if (request.status === 200) {
                var counter = request.responseText;
                console.log(counter);
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open("GET","http://indhucs.imad.hasura-app.io/counter",true);
    request.send(null);
};

var subBut = document.getElementById("sub");
subBut.onclick = function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                    var names = request.responseText;
                    names = JSON.parse(names);
                    var list = '';
                    for ( var i =0; i< names.length; i++) {
                        list += '<li>' + names[i] + '</li>';
                    }
                    var li = document.getElementById('namelist');
                    li.innerHTML = list;
            }
        }
    };
    var nameField = document.getElementById("name");
    var nameVal = nameField.value;
    request.open("GET","http://indhucs.imad.hasura-app.io/submit-name?name="+nameVal,true);
    request.send(null);
    
}