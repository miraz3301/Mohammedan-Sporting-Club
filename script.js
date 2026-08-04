// Fade-in animation
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Smooth page transition
document.querySelectorAll("a").forEach(link => {

    if (
        link.hostname === window.location.hostname &&
        !link.hasAttribute("target") &&
        link.href !== ""
    ) {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            document.body.classList.remove("loaded");

            setTimeout(() => {
                window.location.href = this.href;
            }, 350);

        });

    }

});

// Login Form
const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit",function(e){

        e.preventDefault();

        const username=document.getElementById("username").value;
        const password=document.getElementById("password").value;

        // Demo login
        if(username==="admin" && password==="1234"){

            document.body.classList.remove("loaded");

            setTimeout(()=>{

                window.location.href="dashboard.html";

            },350);

        }

        else{

            alert("Invalid Username or Password");

        }

    });

}