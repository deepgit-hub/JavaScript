/* 🎯 Question 38 — Addition & Subraction Calculator ➕

Create:

2 input boxes
1 button
1 heading for result

When button clicked:

add both numbers
sub both numbers 
display result
    */
<html>
    <body>
       <input id="num1">
       <input id="num2">
       <button id="button" onclick="add()">Add</button>
       <h1 id="result">Result : </h1>


    </body>
</html>
<script>
    function add()
    {
        var a = document.getElementById("num1").value
        var b = document.getElementById("num2").value
        var total = Number(a)+Number(b)
        var result = document.getElementById("result")
        result.textContent ="Result : "+total
        
    }
</script>
