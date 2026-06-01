/* .

📂 Question 48 — Add Heading Using innerHTML
🎯 Task

Create:

<button>Add Heading</button>

<div id="result"></div>

When button is clicked:

Output:

<h1>Hello Deepak</h1>

should appear inside the div.
*/
<div id="d">

</div>
<button onclick="addh()">Add Heading</button>
<script>
    var di = document.getElementById("d")
    function addh()
    {
    di.innerHTML="<h1>Assalam Walaikum Lyari</h1>"
    }
</script>
