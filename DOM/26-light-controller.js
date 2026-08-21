/* html
🎯 Question 26 — Light Controller 💡

Create:

one heading
TWO buttons

Initially heading should display:

Light OFF
🟢 Button 1

Button text:

ON

When clicked:

Light ON
🔴 Button 2

Button text:

OFF

When clicked:

Light OFF */
<html>
    <body>
        <h1 id="title">Light is OFF!!!</h1>
        <button onclick="on()" id="but">ON</button>
        <button onclick="off()" id="but">OFF</button>
    </body>
</html>
<script>
    function on()
    {
        var h = document.getElementById("title")
        h.textContent = "Light is ON!!!"
        console.log(h.textContent)   
    }
    function off()
    {
        var h = document.getElementById("title")
        h.textContent = "Light is OFF!!!"
        console.log(h.textContent)
    }
</script>
