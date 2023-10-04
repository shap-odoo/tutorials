/** @odoo-module **/

import { Component } from "@odoo/owl";
import {Counter} from "./counter/counter"
// import { Todo } from "./todo/todo";
import { TodoList } from "./todolist/todolist";
export class Playground extends Component {
    static template = "owl_playground.playground";

    static components = { Counter,TodoList};
 
   
  
}














