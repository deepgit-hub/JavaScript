
<h1 id="name">Name</h1>
<button id="btn1" onclick="change1()">Deepak</button>
<button id="btn2" onclick="change2()">Kathir</button>
<button id="btn3" onclick="change3()">Aashik</button>
<script>
    var r = document.getElementById("name")
    function change1()
    {
        r.textContent="Mr . Deepak"
    }
    function change2()
    {
        r.textContent="Mr . Kathir"
    }
    function change3()
    {
        r.textContent="Mr . Aashik"
    }
</script>
