const Component = require ('./Component.js')
const {formatDate} = require ('./date.js')

class Header extends Component {
    render() { 
        const header = `<header class="header"><h1>Todo Today</h1><p>${formatDate(new Date())}</p></header>`;
        return header 
    }
   
}
module.exports = Header