import React from 'react';
import { EditableLabel } from './EditableLabel';

export class TodoItemContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            completed: props.item.completed,
        };
    }
    render() {
        const { text, completed } = this.props.item;
        const className = completed ? 'item completed' : 'item active';
        return (
            <p className={className}>
                <input
                    type="checkbox"
                    checked={this.state.completed}
                    onChange={this.onItemChecked}
                />
                <EditableLabel
                    text={text}
                    itemIndex={this.props.itemIndex}
                    onEdit={this.props.onEdit}
                />
            </p>
            
        );
    }
    onItemChecked = event => {
        const completed = event.target.checked;
        this.setState({
            completed,
        })
        this.props.onItemChecked(completed, this.props.item.text);
    }
}
