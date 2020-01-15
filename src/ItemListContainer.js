import React from 'react';

import { TodoItemContainer } from './TodoItemContainer';

export class ItemListContainer extends React.Component {
    render() {
        return this.props.items.map(
            item => <TodoItemContainer
                item={item}
                key={item.text}
                onItemChecked={this.props.onItemChecked}
            />
        );
    }
}
