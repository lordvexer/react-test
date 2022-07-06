import { Component } from 'react'
class Product  extends Component {
    render() { 
        var x = 9;
        const list = [<li>One</li>,<li>Two</li>,<li>Three</li>];
        const list2 = list.map(item => <li>{item}</li>)
        return (
            <>
            <span className='m-2 text-info'>product name</span>
            <span  className='m-2 badge bg-primary'>{x}</span> 
            <span  className='m-2 badge bg-primary'>{this.counter()}</span> 
            <button className='m-2 btn btn-sm btn-success'>+</button>
            <button className='m-2 btn btn-sm btn-warning'>-</button>
            <button className='m-2 btn btn-sm btn-danger'>delete</button>
            <ul>{list}</ul>
            <ul>{list2}</ul>
            </>
        );
    }
    counter(){
        return <a >click</a>
    }
}
 
export default Product ;