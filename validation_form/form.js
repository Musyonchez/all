const handleSubmit = (event) => {
  event.preventDefault()
  console.log("Working")
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if(username === "Formget" && password === "formget#123") {
    alert("Login Successful")
  } else {
    alert("Login Failed")
  }

}
