/* 🎯 Question 27 — Theatre Status 🎬

Create:

one heading
one button

Initially heading should display:

Seats Available

When button is clicked:

House Full */
<html>
    <body>
        <h1 id="title">Tickets are available</h1>
        <button onclick="on()" id="but">BOOK ALL</button>
        
    </body>
</html>
<script>
    function on()
    {
        console.log("Seats Available")
        var h = document.getElementById("title")
        h.textContent = "HOUSE FULL"
        console.log("HOUSE FULL")   
    }
    
</script>
