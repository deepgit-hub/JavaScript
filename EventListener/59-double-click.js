/*🏆 Question 59
Double Click Surprise
Double click button
↓
Alert appears:
"Double Attack!"

Use:

blclick
*/
<button id="btn">Click</button>
<script>
  var b = document.getElementById("btn")
b.addEventListener("dblclick",function(){
    alert("Double Attack")
})

  </script>
