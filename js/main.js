$(document).ready(function() {
  if (window.innerWidth <= 576) {
    $("#logos-div").css({ padding: 0 });
  }

  console.log(window.innerWidth);

  whatsappButton();

  $("#whatsapp-link a").click(function() {
    if (window.innerWidth >= 1000) {
      alert("Este link só é funcional em aparelhos celulares");
    }
  });
});

function whatsappButton() {
  let linkHref =
    "https://api.whatsapp.com/send?phone=5585989020173&text=Fa%C3%A7a%20seu%20plano%20hapvida";
  let linkImg = "./img/whatsapp-icon.svg";
  let altText = "whatsapp link";
  let classes = "social-icons img-fluid ";

  if (window.innerWidth < 1000) {
    $("#whatsapp-link").html("<a href=" + linkHref + "><img src=" + linkImg + " alt=" + altText + " class=" + classes " /> </a>");
  } else {
    $("#whatsapp-link")
      .html("<a><img src=" + linkImg + " alt=" + altText + " class=" + classes + " /> </a>")
      .css("cursor", "pointer");
  }
}
