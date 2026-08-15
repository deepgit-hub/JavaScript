/*🏆 Question 61
Count Button Clicks

Create:

<button id="btn">Click Me</button>

<h1 id="result">0</h1>

Every click should increase the count.

Example:

Click 1 → 1
Click 2 → 2
Click 3 → 3

Use:

addEventListener()
textContent
variable



count++
*/
<h1 >Count : <span id="count">0</span></h1>
<button id="btn">increase</button>
<script>
  var c = document.getElementById("count")
var b = document.getElementById("btn")
var count = 0
b.addEventListener("click",function()
{
    count++
    
    c.textContent=count
})
  </script>
