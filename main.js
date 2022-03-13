var Topic1 = document.getElementById("topic1");
var Comment1 = document.getElementById("comment1");
var Comment2 = document.getElementById("comment2");
Topic1 = 0;
Comment1 = 0;
Comment2 = 0;

function postFunction() {
    var Text1 = document.getElementById("text1").value
    if (Topic1 == 0) {
        document.getElementById("topic1").innerText = Text1
        Topic1 = Text1
    }
    else if (Comment1 == 0) {
        document.getElementById("comment1").innerText = Text1
        Comment1 = Text1
    }
    else if (Comment2 == 0) {
        document.getElementById("comment2").innerText = Text1
        Comment2 = Text1
    }
}

function clearFunction() { 
    Topic1 = 0;
    Comment1 = 0;
    Comment2 = 0;
    document.getElementById("topic1").innerText = "";
    document.getElementById("comment1").innerText = "";
    document.getElementById("comment2").innerText = "";
    document.getElementById("text1").value = "";
}