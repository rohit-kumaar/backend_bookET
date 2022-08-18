const PATH = "http://127.0.0.1:3500";
showHidePassword();

/* ------------------- */
/* SignIn              */
/* ------------------- */
const signIn = document.querySelector("#signIn");
signIn.addEventListener("submit", function (e) {
  e.preventDefault();
  document.location.href = `${PATH}/html/home.html`;
});

/* ---------------------- */
/* Show and hide password */
/* ---------------------- */
function showHidePassword() {
  const password = document.querySelector("#password");

  const show = document.querySelector("#show");
  const hide = document.querySelector("#hide");

  clickEventInShowHide(show);
  clickEventInShowHide(hide);

  function clickEventInShowHide(id) {
    id.addEventListener("click", () => {
      const getPasswordType = password.getAttribute("type");
      if (getPasswordType === "password") {
        password.setAttribute("type", "text");
        show.style.display = "none";
        hide.style.display = "block";
      } else {
        password.setAttribute("type", "password");
        show.style.display = "block";
        hide.style.display = "none";
      }
    });
  }
}
