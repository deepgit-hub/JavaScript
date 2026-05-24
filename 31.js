/**/
<html>
    <body>
        <h1 onmouseover="change()" onmouseout="notchange()" id="title">System Idle</h1>
    </body>
</html>
<script>
    function change()
    {
        var h = document.getElementById("title")
        h.textContent="System Active"
    }
    function notchange()
    {
        var h = document.getElementById("title")
        h.textContent="System Idle"
    }
</script>
