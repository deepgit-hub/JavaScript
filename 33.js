<html>
    <body>
       <input id="input" onchange="change()" placeholder="name">
        <h1 id="result" >Hello</h1>

    </body>
</html>
<script>
    function change()
    {
        var i = document.getElementById("input").value
        var r = document.getElementById("result")
        r.textContent = "Hello " + i
    }
    
</script>
