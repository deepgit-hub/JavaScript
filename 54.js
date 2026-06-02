/*📂 Question 54 — getElementsByTagName()
🎯 Task

Create:

<p>Hello</p>
<p>World</p>
<p>JavaScript</p>

<button>Change Last</button>

When button clicked:

JavaScript

becomes:

DOM Master

Use:

document.getElementsByTagName("p") */
<html>
    <p>Java</p>
    <p>Python</p>
    <p>Java Script</p>
    <button onclick="change()">Change Last</button>
    <script>
        function change()
        {
            var a =document.getElementsByTagName("p")
            a[2].textContent="DOM Master"
        }
    </script>
</html>
