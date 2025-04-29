let list = [];

document.getElementById("submit").onclick = function () {
    const task = document.getElementById("input").value.trim();
    if (task !== "") {
        list.push(task);
        document.getElementById("input").value = ""; // Clear input
    }
    renderList();
};

function renderList() {
    const ul = document.getElementById("tasks");
    ul.innerHTML = "";

    list.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;

        const delBtn = document.createElement("button");
        delBtn.textContent = "delete";

        const checklistBtn=document.createElement("input");
        checklistBtn.type="checkbox";

        delBtn.onclick = function () {
            list.splice(index, 1);
            renderList(); // Re-render without re-adding input
        };

        checklistBtn.onchange = function () {
            li.style.textDecoration = checklistBtn.checked ? "line-through" : "none";
        };        

        li.appendChild(delBtn);
        li.appendChild(checklistBtn);
        ul.appendChild(li);
    });
}
