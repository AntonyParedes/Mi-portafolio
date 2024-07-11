window.addEventListener("DOMContentLoaded", function () {
  var check = document.querySelector(".navbar__toggle--language-input");
  check.addEventListener("click", idioma);

  function idioma() {
    console.log(check.checked);
    // var id = check.checked;
    // if (id === true) {
    //   location.href = "portafolio/assets/en/index.html";
    // } else {
    //   location.href = "portafolio/index.html";
    // }
  }
});
