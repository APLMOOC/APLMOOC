var client_id = "50c4648f34bb075578c383ec62d6908fa49b6986d992c34a2a029be777e0337e";
var client_secret = "d15d4d4ba2b80a91aaff7a5c94d30fe65c87b058991a327a5de4dfe71f7c5576";

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
    if("mooc_token" in sessionStorage) {
        return sessionStorage.getItem("mooc_token");
    }

    return null;
}

function set_mooc_token(token) {
    sessionStorage.setItem("mooc_token", token);
}

function login() {
    let user = $("#user").value;
    let pass = $("#pass").value;
    let ret = mooc_login(user, pass, logincallback);
    console.log(ret);
    $("#loginResponse").innerHTML = "Logging in...";
}

function mooc_login(username, password, callback) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState != 4) return;

        if (this.status == 200) {
            mooc_token = JSON.parse(this.responseText)["access_token"];
            set_mooc_token(mooc_token);
            $("#loginResponse").innerHTML = "Success";
        } else {
            $("#loginResponse").innerHTML = "Login failed";
        }

        callback();
    }

    xhttp.open("POST","https://tmc.mooc.fi/oauth/token",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("client_id="+client_id+"&"+
               "client_secret="+client_secret+"&"+
               "username="+encodeURIComponent(username)+"&"+
               "password="+encodeURIComponent(password)+"&"+
               "grant_type=password");
}

function logincallback(){
    console.log("TOKEN: " + mooc_token);
    console.log("STATUS: " + mooc_status);
}

function mooc_logout(callback) {
    sessionStorage.removeItem("mooc_token");
    callback();
}

// Problems

function submit_problem(problem_id) {
    
}

function problem_status() {
    console.log(`Getting problem status for user ${mooc_token}`);
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
