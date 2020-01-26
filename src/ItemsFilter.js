import React from 'react';

export class ItemsFilter extends React.Component { 
    render() { 
        const { onFilterChange } = this.props;
        return (
            <>
                <input onChange={onFilterChange} type="radio" name="filter" value="all" id="filterAll" />
                <label htmlFor="filterAll">All</label>
                <input onChange={onFilterChange} type="radio" name="filter" value="todo" id="filterTodo" />
                <label htmlFor="filterTodo">To do</label>
                <input onChange={onFilterChange} type="radio" name="filter" value="completed" id="filterCompleted"/>
                <label htmlFor="filterCompleted">Completed</label>
            </>
        );
    }
}
