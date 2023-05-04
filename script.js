const sortableList = document.querySelector(".playlist");
const items = sortableList.querySelectorAll(".playlist-item");

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

    if (nextSibling) {
        sortableList.insertBefore(draggingItem, nextSibling);
      } else {
        sortableList.appendChild(draggingItem);
      }
      
    // sortableList.insertBefore(draggingItem, nextSibling);

}
sortableList.addEventListener("dragover", drag);
sortableList.addEventListener("dragenter", e => e.preventDefault());