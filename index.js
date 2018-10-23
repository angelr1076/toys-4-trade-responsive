setTimeout (function() {
    document.querySelector("#modal").style = "display:block";
}, 3000)

var header = document.getElementById("modal-para");

    function checkUser() {
        var name = document.getElementById("name"),
            email = document.getElementById("email"),
            submit = document.getElementById("submit");

        if (email.value.length > 8 && email.value.length < 30 && name.value.length > 8 && name.value.length < 25) {
            header.innerHTML = "Congrats, you've been added to our mailing list!";
        } else {
            (header.innerHTML = "Please try again");
        }
    } 

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

