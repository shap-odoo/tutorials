/** @odoo-module **/


import { Component,useState } from "@odoo/owl";
import { useAutofocus } from "../utils";
import { Todo } from "../todo/todo";
export class TodoList extends Component {
    setup() {
        this.todoList = [
            { id: 4, description: "buy shampoo", done: true },
            { id: 5, description: "buy oil", done: true },
        ];
       
        this.todoList = useState([]);
        this.nextId = 1;
        //  useAutofocus("todoListInput");
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
    
} 

TodoList.components = { Todo };
TodoList.template = "owl_playground.TodoList";
   
  
