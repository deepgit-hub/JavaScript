🎯 Question 46 — Live Input Preview

Create:

One input box
One heading

When user types:

Cyber Deep

The heading should instantly display:

Cyber Deep
<input id="text" onkeyup="change(event)">
<h1 id="result"></h1>
<script>

    
    function change(event)
    {
       document.getElementById("result").textContent=event.target.value
    }
</script>
