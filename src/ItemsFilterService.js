export function getFilteredItems(items, filter) {
    if (filter === 'completed') {
        return items.filter(item => item.completed);
    }
    if (filter === 'todo') {
        return items.filter(item => !item.completed);
    }
    return items;
}

export function setAllItemsCompleted(items) {
    return items.map(item => ({ ...item, completed: true }));
}