import React, { Component } from 'react';

class Product extends Component {
constructor(props){
super(props);

this.state = {
  isEdit:false
}
this.onDelete = this.onDelete.bind(this);
this.onEditSubmit = this.onEditSubmit.bind(this);
this.onEdit = this.onEdit.bind(this);
}
onEditSubmit(event){
  event.preventDefault();
  this.props.onEditSubmit(this.nameIpt.value, this.priceIpt.value,this.props.name)
  this.setState ({
    isEdit:false
  })
}
onEdit(){
  this.setState({isEdit:true})
}
onDelete(){
    const {onDelete,name} = this.props;
    onDelete(name)
}
  render() {
    const { name, price, onDelete} = this.props;
        return(
            <div key={name}>
            {
              this.state.isEdit 
            ? (
            <div>
              <form onSubmit={this.onEditSubmit}>
                    <h3>Edit Product</h3>
                    <input placeholder="Name"  defaultValue = {name} ref={nameIpt => this.nameIpt = nameIpt}></input>
                    <input placeholder="Price" defaultValue = {price} ref={priceIpt => this.priceIpt = priceIpt}></input>
                    <button>Add</button>
              </form>
            </div>
            )
            : ( <div>
            <span>{name}</span>
             {` | `}  
             <span>{price}</span>
             {` | `}     
             <button onClick={this.onEdit} >Edit</button>
        
             {` | `}     
             <button onClick={this.onDelete} >Delete</button>
        
              </div> 
              
              )
            }

          </div>
        )
  }
}

export default Product;


