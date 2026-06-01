<input id="text" onkeyup="change(event)">
<h1 id="result"></h1>
<script>

    
    function change(event)
    {
       document.getElementById("result").textContent=event.target.value
    }
</script>
