import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
    <div class="container">
        <div class="row">
            <div class="input-group">
                <AddTodo />
            </div>
            <VisibleTodoList />
            <Footer />
        </div>
    </div>
);

export default App;