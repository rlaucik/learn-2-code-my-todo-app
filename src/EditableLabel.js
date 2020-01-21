import React from 'react';

export class EditableLabel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            text: props.text,
        }
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render() {
        if (this.state.isEditing) {
            return(
                <input
                    type="text"
                    ref={this.inputRef}
                    value={this.state.text}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                />
            );
        }
        return (
            <label
                onDoubleClick={this.onDoubleClick}
            >
                {this.props.text}
            </label>
        );
    }

    onDoubleClick = () => {
        this.setState({
            isEditing: true,
        }, () => {
            this.inputRef.current.focus();
        });
    }

    onChange = event => {
        this.setState({
            text: event.target.value,
        });
    }

    handleSave = () => {
        const value = this.inputRef.current.value;
        this.setState({
            isEditing: false,
        });
        this.props.onEdit(value, this.props.itemIndex);
    }

    onKeyPress = event => {
        if (event.key === 'Enter') {
            this.handleSave();
        }
    }

    handleClickOutside = (event) => {
        if (this.inputRef.current && !this.inputRef.current.contains(event.target)) {
            this.handleSave();
        }
    }
}
