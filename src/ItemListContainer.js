import React from 'react';

import { TodoItemContainer } from './TodoItemContainer';

export class ItemListContainer extends React.Component {
    render() {
        return this.props.items.map(
            (item, index) => <TodoItemContainer
                item={item}
                itemIndex={index}
                key={item.text}
                onEdit={this.props.onEditItem}
                onItemChecked={this.props.onItemChecked}
            />
        );
    }
}
