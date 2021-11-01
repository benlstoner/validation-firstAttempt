var menus=["Home","About","View"];
var list=[];

function createNav(){
    document.body.innerHTML="";
    var nav=document.createElement("nav");
    createButton(menus[0]);
    createButton(menus[1]);
    createButton(menus[2]);

    document.body.appendChild(nav);

    function createButton(pg){
        var button=document.createElement("button");
        button.innerHTML=pg;
        button.addEventListener("click",function(){
            navigate(pg);
        })
        nav.appendChild(button)
    }
}

function createWrapper(){
    var wrapper=document.createElement("wrapper");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}

function navigate(pg){
    if(pg==="home"){
        homePage()
    }else if(pg==="about"){
        aboutPage()
    }else if(pg==="view"){
        viewPage()
    }else{
        loginPage()
    }
}

// Login page

function loginPage(){
    var name=document.createElement("input");
        name.classList.add("user");
        name.placeholder="username";
    var enter=document.body.createElement("button");
        enter.classList.add("submit");
        enter.innerHTML="Submit"
    var output=document.body.createElement("div");

    enter.addEventListener("click", function(){
        var username=document.body.querySelector(".name").value;

        if(username==="coolStudent123"){
            createNav();
            createWrapper();
            navigate("home");
        }else{
            output.innerHTML="Incorrect Username"
        }
    })
    document.body.appendChild(name);
    document.body.appendChild(enter);
    document.body.appendChild(output);
}

// Home page

function homePage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header=document.createElement("h1");
    header.innerHTML="Home";
    wrapper.appendChild(header);
}

// About Page

function aboutPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header=document.createElement("h1");
    var name=document.createElement("h3");
    header.innerHTML="About Me";
    name.innerHTML="Ben";
    wrapper.appendChild(header);
    wrapper.appendChild(name);
}

// Notes page

function viewPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";

    var header=document.createElement("h1");
    header.innerHTML="View Notes";

    var firstNote=document.createElement("input");
    firstNote.classList.add("singular");
    firstNote.placeholder="Note";

    var importance=document.createElement("input");
    importance.classList.add("important");
    importance.placeholder="Importance";

    var notes=document.createElement("button");
    notes.classList.add("notes");
    notes.innerHTML="Submit";

    var noteList=document.createElement("div");
    noteList.classList.add("noteList");
    notes.addEventListener("click",function(){
        var notes=document.body.querySelector(".singular").value;
        var importance=document.body.querySelector(".important").value;

        if(notes.length===1){
            noteList.innerHTML="Note is too short";
        }else if(isNaN(importance)){
            noteList.innerHTML="Importance has to be number";
        }else{
            renderList();
        }
        function renderList(){
            noteList.innerHTML="";
            for(var i=0; i<list.length; i++){
                var notes=document.createElement("div");
                notes.innerHTML=list[i];
                noteList.appendChild(notes);
            }
        }
    })
    wrapper.appendChild(header);
    wrapper.appendChild(firstNote);
    wrapper.appendChild(importance);
    wrapper.appendChild(notes);
    wrapper.appendChild(noteList);
}

createNav();
createWrapper();
// navigate("login");