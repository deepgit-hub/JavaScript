/* 🎯 Question 45 — Dynamic Name Greeting

Create:

One heading
Three buttons

Initially:

Name

When clicking a button:

Hello Mr Deepak

or

Hello Mr Kathir

or

Hello Mr Antony Kevin

should appear. */
<h1 id="result">Name</h1>
<button  onclick="update(event)">Deepak</button>
<button  onclick="update(event)">Kathir</button>
<button  onclick="update(event)">Antony Kevin</button>
<script>
    var r = document.getElementById("result")
    var btn = document.getElementById("btn")
    function update(event)
    {
        r.textContent="Hello Mr "+event.target.textContent
    }
</script>

