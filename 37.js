📂 Question 37 — Welcome Loader
Task

When page opens:

Welcome Deepak

should appear automatically.

  <html>

<body onload="welcome()">

<h1 id="result"></h1>

<script>

function welcome()
{
    var result = document.getElementById("result")

    result.textContent = "Welcome Deepak"
}

</script>

</body>

</html>
