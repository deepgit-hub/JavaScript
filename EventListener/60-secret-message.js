/*
🏆 Question 60 (Challenge)
Secret Message

Initially:

Message Hidden

Click button:

Welcome Deepak 🚀

Click again:

Message Hidden

Use:

click
textContent
*/
<h1 id="message">Message Hidden</h1>
<button id="btn">revel</button>
<script>
  var b = document.getElementById("btn")
var m = document.getElementById("message")
b.addEventListener("click",function(){
    m.textContent="Helo Deepak!!!"
})
b.addEventListener("dblclick",function(){
    m.textContent="Message Hidden"
})

  </script>
