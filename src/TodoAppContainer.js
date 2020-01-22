import React from 'react';

import { ItemCreateInput } from './ItemCreateInput';
import { ItemListContainer } from './ItemListContainer';
import { editItemText } from './TodoAppService';

export class TodoAppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                { text: 'Make todo list', completed: false },
                { text: 'Improve the code', completed: false }
            ],
        };
    }

    render() {
        return (
            <>
                <ItemCreateInput
                    onEnter={this.addItem}
                />
                <ItemListContainer
                    items={this.state.items}
                    onItemChecked={this.completeItem}
                    onEditItem={this.onItemEdit}
                />
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
    
    completeItem = (completed, itemIndex) => {
        const updatedItems = [...this.state.items]
        updatedItems[itemIndex].completed = completed;
        this.setState({
            items: updatedItems
        });
    }
}
