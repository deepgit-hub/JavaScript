/*
🎯 Question 47 — Click To Delete Element

Create:

6 headings

Initially:

One
Two
Three
Four
Five
Six
📌 Requirement

When the user clicks any heading:

That heading should be removed from the webpage.

Example:

Click:

Three

Output:

One
Two
Four
Five
Six
*/
<html>
    <h1 onclick="deleteh(event)">One</h1>
    <h1 onclick="deleteh(event)">Two</h1>
    <h1 onclick="deleteh(event)">Three</h1>
    <h1 onclick="deleteh(event)">Four</h1>
    <h1 onclick="deleteh(event)">Five</h1>
    <h1 onclick="deleteh(event)">Six</h1>

</html>
<script>
    function deleteh(event)
    {
        event.target.remove()
    }
</script>
