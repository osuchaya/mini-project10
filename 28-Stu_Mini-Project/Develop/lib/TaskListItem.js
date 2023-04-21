//priority = false : sets default value for the parameter
class TaskListItem extends Component {
    constructor (children, priority = false) {
        super(children);
        this.priority = priority;
        
        
    }
    
    render() {
        let className = "tasks-item"
        if (priority === true) {
            className = className + " tasks-item-priority" 
        }
        return (`<li class="${className}">${this.renderInnerHTML()}</li>`);
       
    }
}
module.exports = TaskListItem