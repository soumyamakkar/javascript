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
        
        const editBtn=document.createElement("button");
        editBtn.textContent="edit";


        editBtn.onclick=function(){
            li.textContent="";
            const editInputField=document.createElement("input");
            editInputField.value=item;
            const saveBtn=document.createElement("button");
            saveBtn.textContent="save";

            saveBtn.onclick=function(){
                list[index]=editInputField.value;
                renderList();
            }
            li.appendChild(editInputField);
            li.appendChild(saveBtn);
        }


        li.appendChild(delBtn);
        li.appendChild(editBtn);
        li.appendChild(checklistBtn);
        ul.appendChild(li);
    });
}
