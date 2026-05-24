/* <html>
    <body>
        <h1 id="title">Normal User</h1>
        <button onclick="lin()" id="but">log in</button>
        <button onclick="out()" id="but">log out</button>
        
    </body>
</html> */
<script>
    function lin()
    {
        let h = document.getElementById("title")
        h.textContent="Ethical Hacker"
        console.log("User logged in")
    }
    function out()
    {
        let h = document.getElementById("title")
        h.textContent ="Normal User"
        console.log("User Logged out")
    }
    
</script>
