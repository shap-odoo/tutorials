/** @odoo-module **/
import { Component,useState } from "@odoo/owl";
import { useAutofocus } from "../utils";
import { Todo } from "../todo/todo";
export class TodoList extends Component {
    setup() {
        this.nextId = 0;
        this.todoList = useState([]);
        useAutofocus("todoListInput");
    }
    addTodo(ev) {
        if (ev.keyCode === 13) {
            const newTask = ev.target.value.trim();
    
            if (newTask!=='') {
                const newTodo = {
                    id: this.nextId++,
                    description: newTask,
                    done: false
                };
    
                this.todoList.push(newTodo);
                ev.target.value = "";
            }
        }
    }

    toggleTodo(todoId) {
        const todo = this.todoList.find((todo) => todo.id === todoId);
        if (todo) {
            todo.done = !todo.done;
        }
    }

   
    
} 

TodoList.components = { Todo };
TodoList.template = "owl_playground.TodoList";