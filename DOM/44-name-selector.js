/* 📂 Question 44 — Dynamic Name Selector
🎯 Task

Initially:

Name

When clicking:

Button 1
Deepak

Output:

Mr. Deepak
Button 2
Kathir

Output:

Mr. Kathir
Button 3
Aashik

Output:

Mr. Aashik
    */
    
<h1 id="name">Name</h1>
<button id="btn1" onclick="change1()">Deepak</button>
<button id="btn2" onclick="change2()">Kathir</button>
<button id="btn3" onclick="change3()">Aashik</button>
<script>
    var r = document.getElementById("name")
    function change1()
    {
        r.textContent="Mr . Deepak"
    }
    function change2()
    {
        r.textContent="Mr . Kathir"
    }
    function change3()
    {
        r.textContent="Mr . Aashik"
    }
</script>
