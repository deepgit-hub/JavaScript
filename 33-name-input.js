/*
📂 Question 33 — Name Input
Task

User types name in input box.

When value changes:

Hello Deepak

should display.
*/<html>
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
