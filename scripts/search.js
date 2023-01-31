let params = new URLSearchParams(document.location.search);
let searchQuery = params.get("q");

if(searchQuery !== null)
{
    document.getElementById("search-input").value = searchQuery;
}