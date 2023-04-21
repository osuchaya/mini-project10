class Component {
    constructor (children = []) {
        
        this.children = children;
        
    }
    
    render () {
        throw Error ("Child class must implement render() method.");} 
    renderInnerHTML() {
        for (var i = 0; i<children.length; i++) {
         if (typeof children[i] !== 'string')  {
            return this.children[i].render()
         } 
        }
        this.children.join("");
        
    }
}



module.exports = Component



