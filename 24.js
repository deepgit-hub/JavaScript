🎯 Question 24 — Welcome Message

Create:

one heading
one button

Initially heading should display:

Welcome

When button is clicked, change it to:

Welcome Deepak
<html>
    <body>
        <h1 id="title">Welcome</h1>
        <button onclick="change()" id="but">Click me</button>
    </body>
</html>
<script>
    function change()
    {
        var h = document.getElementById("title")
        h.textContent = "Welcome DEEPAK!!!"
        
        
    }
</script>
