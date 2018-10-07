import React, { Component } from 'react';

class AddItem extends Component {
constructor(props){
super(props);
this.onSubmit = this.onSubmit.bind(this)
}

onSubmit(event){
    
    event.preventDefault()
    this.props.onAdd(this.nameIpt.value,this.priceIpt.value)
    this.nameIpt.value = ""
    this.priceIpt.value = ""
}

  render() {
        return(
            <form onSubmit={this.onSubmit}>
                <h3>Add Product</h3>
                <input placeholder="Name"  ref={nameIpt => this.nameIpt = nameIpt}></input>
                <input placeholder="Price" ref={priceIpt => this.priceIpt = priceIpt}></input>
                <button>Add</button>
          </form>
        )
  }
}

export default AddItem;


