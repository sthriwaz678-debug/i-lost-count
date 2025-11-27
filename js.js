var myform = document.getElementById("my form");
var myinput = document.getElementById("myyinput");
var mylist = document.getElementById("myinput");

myform.addEventListener("submit",
    function (event){
        event.preventDefault()
        createItem(myinput.value)
    })
    function createItem(inputItems){
        var items = `<li>${inputItems}
        <button onclick="deleteElement(this)">Delete</button></li>`
        mylist.insertAdjacentHTML("beforeend", items)
        myinput.value =""
        myinput.focus()
    }
    function deleteElement(element) {
        element.parentElement.remove();
    }
