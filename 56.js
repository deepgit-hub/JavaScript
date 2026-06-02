/*📂 Question 56 — Insert After Element
🎯 Task

Create:

<div id="box">
    <h1>Frontend Developer</h1>
</div>

<button>Revel Next Goal</button>

When button clicked:

<div id="box">
    <h1>Frontend Developer</h1>
</div>

<h1>Cyber Security Expert</h1>*/

<div id="box">
    <h1>Front-End Developer</h1>
    
</div>
<button onclick="revel()">Revel Next Goal</button>
<script>
    var a = document.querySelector("#box")
    function revel()
    {
    var h = document.createElement("h1")
    h.textContent="Cyber Security Expert"
    a.insertAdjacentElement("afterend",h)
    }
</script>
