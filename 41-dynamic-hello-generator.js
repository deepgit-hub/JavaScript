/* 📂 Question 41 — Dynamic Hello Generator
Concepts Used
createElement()
append()
textContent
onclick
DOM Manipulation
*/
<button onclick="add()">Add Hello</button>
<div id="result" > 

    
</div>

<script>
    var r = document.getElementById("result")
    function add()
    {
        var h = document.createElement("h1")
        h.textContent="Hello"
        r.append(h)
    }
</script>
