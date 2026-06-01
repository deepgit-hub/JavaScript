<h1 id="result">Name</h1>
<button  onclick="update(event)">Deepak</button>
<button  onclick="update(event)">Kathir</button>
<button  onclick="update(event)">Antony Kevin</button>
<script>
    var r = document.getElementById("result")
    var btn = document.getElementById("btn")
    function update(event)
    {
        r.textContent="Hello Mr "+event.target.textContent
    }
</script>

