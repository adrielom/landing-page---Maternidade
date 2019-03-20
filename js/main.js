$(document).ready(function() {
  if (window.innerWidth <= 576) {
    $("#logos-div").css({ padding: 0 });
  } 

  console.log(window.innerWidth);

  parallax();
  whatsappButton();

  $("#whatsapp-link a").click(function() {
    if (window.innerWidth >= 1000) {
      alert("Este link só é funcional em aparelhos celulares");
    }
  });
 
});

let userName = '';

const submit = () => {
  $( "#inf_form_21585772141bf2c9f89458b1f426c05c" ).submit(function( event ) {
    event.preventDefault();

    let name = $("#inf_field_FirstName").val();
    let email = $("#inf_field_Email").val();
    let phone = $("#inf_field_Phone1").val();
    let city = $("#inf_field_City3").val();

    if (!name.isNullOrEmpty && 
        !email.isNullOrEmpty && 
        !phone.isNullOrEmpty && 
        !city.isNullOrEmpty){

        alert ("Cadastro concluído");
        userName = name;
    } else {
        console.log(`${name} ${email} ${phone} ${city}`);
        alert ("Ocorreu um erro no cadastro");
    }

  });
}

const isNullOrEmpty = (value) => {
  return !(typeof value === String && value.length > 0);
}

function parallax() {
  $(window).scroll(function() {
    let scrollVar = $(this).scrollTop();
    if (window.innerWidth > 1000) {
      $(".ball-blur-icon").css(
        "transform",
        "translate(0px," + scrollVar / 80 + "%)"
      );
      $(".ball-icon").css(
        "transform",
        "translate(0px,-" + scrollVar / 45 + "%)"
      );
    }
  });
}

function whatsappButton() {
  let linkHref = "https://wa.me/5585989020173?text=Fa%C3%A7a%20seu%20plano%20hapvida";
    "https://api.whatsapp.com/send?phone=5585989020173&text=Fa%C3%A7a%20seu%20plano%20hapvida";
  let linkImg = "./img/whatsapp-icon.svg";
  let altText = "whatsapp link";
  let classes = "social-icons img-fluid "; 

  if (window.innerWidth < 1000) {
    $("#whatsapp-link").html(
      "<a href=" +
        linkHref +
        "><img src=" +
        linkImg +
        " alt=" +
        altText +
        " class=" +
        classes +
        " /> </a>"
    );
  } else {
    $("#whatsapp-link")
      .html(
        "<a><img src=" +
          linkImg +
          " alt=" +
          altText +
          " class=" +
          classes +
          " /> </a>"
      )
      .css("cursor", "pointer");
  }
}
