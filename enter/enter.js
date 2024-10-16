const hashedPassword = "b9c31f58456c604e942876614bf5b52c"; // YmFkIGhhc2g=

function checkPassword() {
  const inputPassword = document.getElementById("passwordInput").value;
  const inputHashed = md5(inputPassword);

  if (inputHashed === hashedPassword) {
    console.log("*");
  }
}

document
  .getElementById("passwordInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkPassword();
    }
  });

function md5(string) {
  return CryptoJS.MD5(string).toString();
}
