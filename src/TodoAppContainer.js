import React from 'react';

import { ItemCreateInput } from './ItemCreateInput';
import { ItemListContainer } from './ItemListContainer';
import { editItemText } from './TodoAppService';
import { ItemsFilter } from './ItemsFilter';
import { getFilteredItems, setAllItemsCompleted } from './ItemsFilterService';
import { ItemsLeftMessage } from './ItemsLeftMessage';
import { MarkAllCompletedButton } from './MarkAllCompletedButton';

export class TodoAppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                { text: 'Make todo list', completed: false },
                { text: 'Improve the code', completed: false }
            ],
            filter: 'all',
        };
    }

    render() {
        const { items, filter } = this.state;
        const itemsToDisplay = getFilteredItems(items, filter);
        return (
            <>
                <ItemCreateInput
                    onEnter={this.addItem}
                />
                <MarkAllCompletedButton onClick={this.onMarkAllCompleted} /> 
                <ItemListContainer
                    items={itemsToDisplay}
                    onItemChecked={this.completeItem}
                    onEditItem={this.onItemEdit}
                    onItemDelete={this.onItemDelete}
                />
                <ItemsFilter
                    onFilterChange={this.onFilterChange}
                />
                <ItemsLeftMessage items={getFilteredItems(items, 'todo')} />
            </>
        );
    }

    addItem = text => {
        this.setState({
            items: [
                ...this.state.items,
                { completed: false, text }
            ]
        });
    }

    onItemEdit = (text, index) => {
        const updatedItems = editItemText(this.state.items, index, text);
        this.setState({
            items: updatedItems,
        });
    }

    onItemDelete = index => {
        const items = [...this.state.items];
        items.splice(index, 1);
        this.setState({
            items,
        });
    }
    
    completeItem = (completed, itemIndex) => {
        const updatedItems = [...this.state.items]
        updatedItems[itemIndex].completed = completed;
        this.setState({
            items: updatedItems
        });
    }

    onFilterChange = event => {
        this.setState({
            filter: event.target.value,
        });
    }

    onMarkAllCompleted = () => {
        const items = setAllItemsCompleted(this.state.items);
        this.setState({
            items,
        });
    }
}
