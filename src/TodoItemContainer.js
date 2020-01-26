import React from 'react';
import { EditableLabel } from './EditableLabel';
import { DeleteItemButton } from './DeleteItemButton';

export class TodoItemContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            completed: props.item.completed,
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.item.completed !== this.props.item.completed) {
            this.setState({
                completed: this.props.item.completed,
            });
        }
    }

    render() {
        const { text, completed } = this.props.item;
        const { itemIndex, onEdit } = this.props;
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
                    itemIndex={itemIndex}
                    onEdit={onEdit}
                />
                <DeleteItemButton
                    onDelete={this.onItemDelete}
                />
            </p>
        );
    }
    onItemChecked = event => {
        const completed = event.target.checked;
        this.setState({
            completed,
        })
        this.props.onItemChecked(completed, this.props.itemIndex);
    }

    onItemDelete = () => {
        this.props.onItemDelete(this.props.itemIndex);
    }
}
