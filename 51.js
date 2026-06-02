
📂 Question 51 — querySelectorAll()
🎯 Task

Create:

<h1>Java</h1>
<h1>Python</h1>
<h1>JavaScript</h1>

<button>Change All</button>

When button clicked:

All headings become:

Programming Language

Use:

document.querySelectorAll("h1")
<h1>Java</h1>
<h1>Python</h1>
<h1>JavaScript</h1>
<button onclick="change()">Change</button>
<script>
    var a = document.querySelectorAll("h1")
    function change()
    {
        a[0].textContent="Programming Language"
        a[1].textContent=""
        a[2].textContent=""
    }
</script>
