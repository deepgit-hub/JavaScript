/*
📂 Question 52 — getElementById()
🎯 Task

Create:

<h1 id="result">Offline</h1>

<button>Connect</button>

When button clicked:

Offline

becomes:

Online

Use:

document.getElementById()
*/
<h1 id="h">Offline</h1>
<button onclick="change()">Change</button>
<script>
    var a = document.getElementById("h")
    function change()
    {
        a.textContent="Online"
    }
</script>
