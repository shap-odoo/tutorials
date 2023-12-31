/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Todo extends Component {
  

    onClick(ev) {
        this.props.toggleState(this.props.id);
    }
    
    static props={
        id:{type:Number},
        description:{type:String},
        done:{type:Boolean},
        toggleState: { type: Function },
    }

}
Todo.template = "owl_playground.Todo";