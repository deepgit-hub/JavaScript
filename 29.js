/*
📂 Question 29 — Hacker Warning ⚠️
Task

Initially:

Safe Zone

When mouse moves over text:

Warning Detected
*/<html>
    <body>
        <h1 onmouseover="change()" id="title">Safe Zone</h1>
    </body>
</html>
<script>
    function change()
    {
        var h = document.getElementById("title")
        h.textContent="Danger zone"
    }
</script>
