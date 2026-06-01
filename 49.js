/*
📂 Question 49 — Add Multiple Headings
🎯 Task

Create:

<div id="result"></div>

<button>Add Names</button>

When button is clicked, output should become:

<h1>Deepak</h1>
<h1>Kathir</h1>
<h1>Antony Kevin</h1>

inside the div.
*/
<div id="d">

</div>
<button onclick="addh()">Add Name</button>
<script>
    var di = document.getElementById("d")
    function addh()
    {
    di.innerHTML="<h1>Deepak</h1>"
    di.innerHTML+="<h1>kathir</h1>"
    di.innerHTML+="<h1>Antony Kevin</h1>"
    }
</script>
