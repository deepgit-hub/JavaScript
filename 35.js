<html>
    <body>
       <input id="input" onkeydown="typing()" placeholder="type something">
        <h1 id="result" >Waiting...</h1>

    </body>
</html>
<script>
    function typing()
    {
        var i = document.getElementById("result")
        i.textContent = "Tying Started!!!"
        
    }
    
</script>
