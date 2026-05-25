<html>
    <body>
       <input id="input" onchange="change()" placeholder="college">
        <h1 id="result" >College : </h1>

    </body>
</html>
<script>
    function change()
    {
        var i = document.getElementById("input").value
        var r = document.getElementById("result")
        r.textContent = "College : " + i
    }
    
</script>
