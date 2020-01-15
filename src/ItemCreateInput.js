import React from 'react';

export class ItemCreateInput extends React.Component {
    render() {
        return (
            <input
                onKeyUp={this.handleKeyUp}
            />
        );
    }
    
    handleKeyUp = event => {
        if (event.target.value && event.key === 'Enter') {
            this.props.onEnter(event.target.value);
            event.target.value = '';
        }
    }
}