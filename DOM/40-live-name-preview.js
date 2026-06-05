/* 🎯 Question 40 — Live Name Preview 😎

Create:

one input box
one heading

When user types inside input box,
the heading should update LIVE */
<input id="text" onkeyup="change()">

<h1 id="result"></h1>

<script>

    var textBox = document.getElementById("text")

    var result = document.getElementById("result")

    function change()
    {
        result.textContent = textBox.value
    }

</script>
