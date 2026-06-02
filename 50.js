/*
📂 Question 50 — querySelector()
🎯 Task

Create:

<h1 class="title">Hello</h1>

<button>Change Text</button>

When button clicked:

Hello

becomes:

Welcome Deepak

Use:

document.querySelector(".title")
*/
<h1 class="title">Hello</h1>
<button onclick="change()">Click ME!!!
</button>
<script>
    var t = document.querySelector(".title")
    function change()
    {
        t.textContent="Welcome Deepak!!!"
    }
</script>
