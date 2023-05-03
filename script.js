const sortableList = document.querySelector(".playlist");
const items = sortableList.querySelectorAll(".item + .playlist-item");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const drag = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    
    let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];
 
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;

    });
sortableList.insertBefore(draggingItem, nextSibling);
}
sortableList.addEventListener("dragover", drag);
sortableList.addEventListener("dragenter", e => e.preventDefault());