import React,{Component} from "react";
export default class ShoppingCart extends Component{

    state={
        products:[
            {id:1,productName:"Iphone13",price:8900,quantity:0},
            {id:1,productName:"Sony Camera",price:900,quantity:0},
            {id:1,productName:"Samsung QLED TV",price:18700,quantity:0},
            {id:1,productName:"Ipad Pro",price:750,quantity:0},
            {id:1,productName:"Xbox",price:899,quantity:0},
            {id:1,productName:"Mac MOnitor",price:890,quantity:0},
        ],
    };

    render(){
        return (
        <div className="container-fluid">
            <h4>Shopping Cart</h4>

            <div className="row">
                {this.state.products.map((prod)=> {
                    return <Product 
                    key={prod.id}
                    product={prod}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    >
                    <button className="btn btn-primary">Buy Now</button></Product>;
                })}
            </div>
        </div>
        );
    }
    // render ends here

    //executes when the user clicks on + button
    handleIncrement=(product,maxValue) => {
        
        //get index of the selected product
        let allProducts=[...this.state.products];
        let index=allProducts.indexOf(product);
        
        if(allProducts[index].quantity<maxValue){
            allProducts[index].quantity++;
//update the state of the current component(parent component)
        this.setState({products:allProducts});
        }
    };

    handleDecrement=(product,minValue) => {
         //get index of the selected product
         let allProducts=[...this.state.products];
         let index=allProducts.indexOf(product);
         
         if(allProducts[index].quantity>minValue)
         allProducts[index].quantity--;
 //update the state of the current component(parent component)
         this.setState({products:allProducts});
     };
    };
