var client_id = "50c4648f34bb075578c383ec62d6908fa49b6986d992c34a2a029be777e0337e";
var client_secret = "d15d4d4ba2b80a91aaff7a5c94d30fe65c87b058991a327a5de4dfe71f7c5576";

var backend_url = "https://backend.aplmooc.fi";

$=s=>document.querySelector(s);
$$=s=>document.querySelectorAll(s);


// On page load

function auto_login() {
    if($$("div.write-problem").length == 0) return;

    problem_status_update();
}

auto_login();

// Authentication

function get_mooc_token() {
    return localStorage.getItem("mooc_token");
}

function set_mooc_token(token) {
    localStorage.setItem("mooc_token", token);
}

function login() {
    let user = $("#user").value;
    let pass = $("#pass").value;
    let ret = mooc_login(user, pass);
    console.log(ret);
    $("#loginResponse").innerText = "Logging in...";
}

function logout() {
    localStorage.removeItem("mooc_token");
}

function mooc_login(username, password) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState != 4) return;

        if (this.status == 200) {
            mooc_token = JSON.parse(this.responseText)["access_token"];
            set_mooc_token(mooc_token);
            $("#loginResponse").innerText = "Success";
        } else {
            $("#loginResponse").innerText = "Login failed";
        }
    }

    xhttp.open("POST","https://tmc.mooc.fi/oauth/token",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("client_id="+client_id+"&"+
               "client_secret="+client_secret+"&"+
               "username="+encodeURIComponent(username)+"&"+
               "password="+encodeURIComponent(password)+"&"+
               "grant_type=password");
}

// Problems

function set_feedback(problem_id, feedback, success = false) {
    $(`#feedback_${problem_id}`).innerHTML = feedback;
    color = success ? "green" : "red";
    $(`#feedback_${problem_id}`).style.color = color;
}

function submit_problem(problem_id, parts=0) {
    let submission = "";

    if(parts > 0){
        for(let i=1; i<=parts; i++){
            input_part = $(`#input_${problem_id}_b${i}`);
            if(input_part.nodeName == "INPUT") submission += input_part.value + " ";
            else if(input_part.nodeName == "SPAN") submission += input_part.innerText + " ";
        }
    } else {
        submission = $(`#input_${problem_id}`).value;
    }

    user_token = get_mooc_token();
    if(user_token == null) {
        set_feedback(problem_id, "Please <a href='/account'>log in</a> first")
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState != 4) return;

        response = JSON.parse(this.responseText);
        if (this.status == 200) {
            set_feedback(problem_id, response["feedback"], response["points"] == 2);
        } else {
            set_feedback(problem_id, response["message"]);
        }
    }

    xhttp.open("POST", `${backend_url}/submit`, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({
        "id_problem": problem_id,
        "mooc_token": user_token,
        "code_encoded": window.btoa(unescape(encodeURIComponent(submission))),
    }));
}

function problem_status() {
    console.log(`Getting problem status for user ${get_mooc_token()}`);
    // Return dummy data
    return ["c1_p1", "c1_p3"];
}

function problem_status_update() {
    const solved = problem_status();
    let problems = $$("div.write-problem");

    for(const problem of problems) {
        let problem_id = problem.getElementsByClassName("probleminput")[0].id;
        if(solved.includes(problem_id)) {
            console.log(`Marking ${problem_id} as complete`);
            problem.classList.remove("write-problem");
            problem.classList.add("success");
        }
    }
}

// Styling

function fillinput_resize(field) {
    field.style.flexGrow=0;
    field.style.width = ((field.value.length+1) * 14) + 'px';
}
