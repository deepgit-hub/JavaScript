/*📂 Question 55 — Insert Before Element
🎯 Task

Create:

<div id="box">
    <h1>Cyber Security</h1>
</div>

<button>Revel</button>

When button clicked:

<h1>My aim is </h1>

<div id="box">
    <h1>Cyber Security</h1>
</div>
*/
<div id="box">
    <h1>Cyber Security</h1>
    <button onclick="revel()">Revel</button>
</div>
<script>
    var a = document.querySelector("#box")
    function revel()
    {
    var h = document.createElement("h1")
    h.textContent="My AIM is to become"
    a.insertAdjacentElement("beforebegin",h)
    }
</script>
