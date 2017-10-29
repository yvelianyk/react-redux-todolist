import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form class="input-group"
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value));
                    input.value = ''
                }}
            >
                <span class="input-group-btn">
                    <button class="btn btn-secondary" type="submit">
                    Add Todo
                    </button>
                </span>
                <input class="form-control"
                       ref={node => {
                           input = node;
                       }}
                />

            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo);

export default AddTodo;