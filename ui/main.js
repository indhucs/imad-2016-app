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

var nameField = document.getElementById("name");
var nameVal = nameField.value;
var subBut = document.getElementById("sub");
subBut.onclick = function() {
    var names = [1,2,3];
    var list = '';
    for ( var i =0; i< names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var li = document.getElementById('namelist');
    li.innerHTML = list;
}