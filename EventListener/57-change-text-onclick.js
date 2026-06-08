/*🏆 Question 57
Change Text on Click
Click button
↓
Button text changes to:
"I Was Clicked!"

Expected:

<button id="btn">Click Me</button>

After click:

I Was Clicked!

Use:

addEventListener("click", ...)
 */ 
<button id="btn">Click ME</button>
<script>
var b = document.getElementById("btn")
b.addEventListener("click",function(){
    b.textContent="I Was Clicked!"
})
  </script>
