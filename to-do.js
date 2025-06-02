function addCloseButtons() {
    let items = document.getElementsByTagName("LI");
    for (let i = 0; i < items.length; i++) {
        if (!items[i].querySelector('.deleteBtn')) {
            let button = document.createElement("button");
            button.className = "deleteBtn";
            button.textContent = "Delete";
            items[i].appendChild(button);
        }
    }

    let delBtns = document.getElementsByClassName("deleteBtn");
    for (let i = 0; i < delBtns.length; i++) {
        delBtns[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", addCloseButtons);

document.getElementById("myUL").addEventListener("click", function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
});

function newElement() {
    let inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = inputValue;
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
  addCloseButtons();
}