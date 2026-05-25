/**/
<html>
    <body>
       
        <h1 id="result" onmouseover="on()" onmouseout="off()">Light off</h1>

    </body>
</html>
<script>
    function on()
    {
        var r = document.getElementById("result")
        r.textContent = "Light on"
    }
     function off()
    {
        var r = document.getElementById("result")
        r.textContent = "Light off"
    }
    
</script>
