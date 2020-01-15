import React from 'react';

import { ItemCreateInput } from './ItemCreateInput';
import { ItemListContainer } from './ItemListContainer';

export class TodoAppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
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
    
    completeItem = (event, text) => {
        const currentItem = this.state.items.find(item => item.text === text);
        const itemIndex = this.state.items.indexOf(currentItem);
        const updatedItems = [...this.state.items]
        updatedItems[itemIndex].completed = event.target.checked;
        this.setState({
            items: updatedItems
        });
    }
}
