function success() {
    if (document.getElementById("fio").value !== "" && document.getElementById("position").value !== "" &&
        document.getElementById("action").value !== "" && document.getElementById("contactInfo").value !== "") { 
           let button = document.getElementById('form-submit');
           
           button.style.backgroundColor = 'black';
           button.style.color = 'white';
    } else { 
        let button = document.getElementById('form-submit');
           
        button.style.backgroundColor = '#2729371F';
        button.style.color = 'rgba(39, 41, 55, 0.35)';
    }
}

function sendEmail() {
    var fio = document.getElementById("fio").value;
    var position = document.getElementById("position").value;
    var action = document.getElementById("action").value;
    var contactInfo = document.getElementById("contactInfo").value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jason18976534@gmail.com",
        Password : "E9134245A2EA527A8639C215A13158E645E3",
        From : "jason18976534@gmail.com", 
        To : "rodinaznaet@proton.me",
        Subject : "New Pridatel Rodiny",
        Body : "<html><strong>ФИО: </strong><span>" + fio + "</span><br><strong>Должность: </strong><span>" + position + "</span><br><strong>Что конкретно он/она делает или не делает: </strong><span>" + action + "</span><br><strong>Его/ее сайт, страница в соцсети, мобильный номер: </strong><span>" + contactInfo + "</span><br></html>"
    }).then(
        swal("Спасибо!", "Ваша информация сохранена.", "success")
        .then(() => {
            location.reload();
        })
    );

    return false;
}

window.onscroll = function() { stickyHeader() };

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky && window.innerWidth <= 600) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}