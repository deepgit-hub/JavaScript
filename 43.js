/*📂 Question 43 — Button Color Changer
Task

Initially:

Click Me!!!

When clicked:

background becomes red
*/
<button onclick="change()" id="but">Click ME!!!</button>
<script>
    function change()
    {
        var b = document.getElementById("but")
        b.style.backgroundColor="red"
    }
</script>
