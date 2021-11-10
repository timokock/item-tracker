var addForm = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// FORM SUBMIT EVENT
addForm.addEventListener('submit', addItem);

// DELETE EVENT
itemList.addEventListener('click', removeItem);

// SEARCH EVENT
filter.addEventListener('keyup', filterItems)

// FUNTION ADD ITEM
function addItem(e) {
    e.preventDefault();
    
    // GET INPUT VALUE
    var newItem = document.getElementById('item').value;

    // CREATE NEW LI ELEMENT
    var li = document.createElement('li');

    // ADD CLASS NAME TO LI ELEMENT
    li.className = 'list-group-item';
    
    // ADD TEXT NODE WITH THE INPUT VALUE
    li.appendChild(document.createTextNode(newItem));

        // CREATE THE DELETE BUTTON ELEMENT
        var deleteBtn = document.createElement('button');

        // ADD CLASS NAME TO DELETE BUTTON
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

        // APPEND THE TEXT NODE
        deleteBtn.appendChild(document.createTextNode('X'));

    // APPEND THE BUTTON TO LI
    li.appendChild(deleteBtn);
    
    // APPEND THE TEXT NODE TO THE ITEM LIST
    itemList.appendChild(li);
}

// REMOVE ITEM
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure you want to delete?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// FILTER ITEMS
function filterItems(e) {
    // CONVERT INPUT TEXT TO LOWERCASE
    var text = e.target.value.toLowerCase();

    // GET ALL LI TAGS
    var tagList = itemList.getElementsByTagName('li');

    // TURN THIS COLLECTION INTO AN ARRAY
    Array.from(tagList).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}