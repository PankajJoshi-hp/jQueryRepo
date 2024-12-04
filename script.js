jQuery(function () {
  $("#formOne").on("submit", function (e) {
    e.preventDefault();

    const email = $("#email").val().trim();
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();
    const checkbox = $("#checkbox").is(":checked");

    if (email === "") {
      alert("Please fill the email field first");
      return;
    }

    if (password !== confirmPassword) {
      alert("Error: Password should be same for both fields");
      return;
    }

    if (!checkbox) {
      alert("Error: Please agree terms & conditios");
      return;
    }

    alert("Success: Form submitted successfully");
  });
});
