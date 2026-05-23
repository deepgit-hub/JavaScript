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
