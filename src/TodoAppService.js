export function editItemText(items, index, text) {
    items[index] = {
        completed: items[index].completed,
        text,
    };
    return items;
}
