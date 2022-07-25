import ProductsList from "./ProductsList";

function Cart(props) {

  return (
    <div className="container-fluid">
      <ProductsList
        products={props.cartItems}
        handleRemoveFromCartButton={(product) =>
          props.handleRemoveFromCartButton(product)
        }
      />
    </div>
  );
}

export default Cart;
