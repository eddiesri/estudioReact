import React, { Component } from 'react';
import './App.css';
// import MyComponent from './components/MyComponent';
// import BasicExample from './components/Router';
import Product from './components/product-item'
import AddItem from './components/addItem'
const products = [
  {
    name : 'ipad',
    price: 200
  },
  {
    name : 'iphoe',
    price: 650
  }
];
localStorage.setItem('products' , JSON.stringify(products));

class App extends Component {
  componentWillMount(){
    this.setState({
      products : JSON.parse(localStorage.getItem('products'))
    })
  };
   getProducts(){
    return this.state.products;

   }
   onDelete(name){
    const products =this.getProducts()
    const filteredProds = products.filter(prod => {
      return prod.name !== name;
    })
    this.setState({products:filteredProds})
   }
   onAdd(name,price){
    const prods = this.getProducts();
    prods.push({name:name, price:price})
    this.setState({products:prods})

   }
   onEditSubmit(name,price,originalName){
     console.log(name,price)
    let prods = this.getProducts();
    prods = prods.map(product =>{
      if(product.name === originalName){
        product.name = name;
        product.price = price
      }
      return product;
    })
    this.setState({products:prods})
   }
constructor(props) {    

  super(props);
  this.state = {
    products : []
  }
/*     this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      tittle : 'App tittle'
    }
    this.onClick = this.onClick.bind(this); */
    this.onAdd =this.onAdd.bind(this);
    this.onDelete =this.onDelete.bind(this);
    this.onEditSubmit =this.onEditSubmit.bind(this);
}
/* 
  onClick() {
    console.log()
    this.setState({
      title:'new App tittle'
    });
  } */
/*   onSubmit(event){
    event.preventDefault();
    alert(this.prueba.value)
  } */
  render() {
/*  const title = this.state.tittle;
    const list  = [
      'item 1',
      'item 2',
      'item 3'
    ] */
    return (
      <div className="App">

{
  /*        part 1
    -------------------------------------------------------------------
         <h1>{title}</h1>
          {
            list.map(item => {
            return(
              <div key={item} onClick={this.onClick}>{item}</div>
            )
            })
          }
          <form onSubmit={this.onSubmit} >
          <input type="text" ref={prueba => this.prueba = prueba}/> 
          <button type="submit"  >Submit</button> 
          </form>
        --------------------------------------------------------------
          part 2
          <h1 > {this.state.tittle} </h1> 
          <div onClick={this.onClick}>Click Here!</div>
          <MyComponent title="this is a modified title" name ="this is a name"/>
        --------------------------------------------------------------
          part 3
          <BasicExample/>
        */
}

<h1>My Products</h1>
<AddItem onAdd={this.onAdd}></AddItem>
  {this.state.products.map(prod => {
    return(
      <Product key={prod.name} onEditSubmit={this.onEditSubmit} onDelete ={this.onDelete} name = {prod.name} price = {prod.price}></Product>
      

    )
  })}
    </div>
    );
  }
}

export default App;


