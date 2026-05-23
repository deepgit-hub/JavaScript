🎯 Question 25 — Cyber Alert 🚨

Create:

one heading
one button

Initially heading should display:

System Safe

When button is clicked, change it to:

System Hacked */
<html>
    <body>
        <h1 id="title">System is Safe Now!!!</h1>
        <button onclick="change()" id="but">Click me</button>
    </body>
</html>
<script>
    function change()
    {
        var h = document.getElementById("title")
        h.textContent = "System got HACKED!!!"
        console.log(h.textContent)
        
        
    }
</script>
