import React from 'react';

export class TodoItemContainer extends React.Component {
    render() {
        const { text, completed } = this.props.item;
        const elementId = `item-${text}`;
        const className = completed ? 'item completed' : 'item active';
        return (
            <p className={className}>
                <input
                    type="checkbox"
                    id={elementId}
                    onChange={this.onItemChecked}
                />
                <label htmlFor={elementId}>{text}</label>
            </p>
        );
    }

    onItemChecked = event => {
        this.props.onItemChecked(event, this.props.item.text);
    }
}
