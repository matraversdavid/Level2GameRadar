function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function smallText(){
    var element = document.body;
    element.classList.add("small-text");
    element.classList.remove("medium-text");
    element.classList.remove("large-text");
}

function mediumText(){
    var element = document.body;
    element.classList.add("medium-text");
    element.classList.remove("small-text");
    element.classList.remove("large-text");
}

function largeText(){
    var element = document.body;
    element.classList.add("large-text");
    element.classList.remove("small-text");
    element.classList.remove("medium-text");
}

function changeText(){
    var name = document.getElementById("welcomeForm").fname.value;
    var welcome = "<h2>Thank you for Submitting </h2>" + name + "! <br><a href='Contact.html'><button>Submit another form</button></a>";
    document.getElementById("welcomeText").innerHTML = welcome;
}
