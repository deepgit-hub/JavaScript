/* 📂 Question 40 — System Boot 💻
Task

When page loads:

System Starting...

should display automatically. */

<html>
    <body onload="welcome()">
       
        <h1 id="hello" ></h1>

    </body>
</html>
<script>
    function welcome()
    {
        var i = document.getElementById("hello")
        i.textContent = "System Starting!!!"
        
    }
    
</script>
