/* 🎯 Question 42 (Name adder)

Create:

<input id="name">

<button>Add Name</button>

When user types:

Deepak

and clicks button,

output:

<h1>Deepak</h1>

inside the div.
*/

<input id="name">
<button onclick="add()">Add Name</button>
<div id="d">

</div>
<script>
    var i = document.getElementById("name")
    function add()
    {
        var c = document.createElement("h2")
        c.textContent=i.value
        d.append(c)
        
    }
</script>
