import ProductItem from "./ProductItem";

function ProductsList(props) {
  return (
    <div className="row justify-content-center mt-4">
      {props.products.length > 0 &&
        props.products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              handleAddToCartButton={(product) =>
                props.handleAddToCartButton(product)
              }
              handleRemoveFromCartButton={(product) =>
                props.handleRemoveFromCartButton(product)
              }
            />
          );
        })}
    </div>
  );
}

export default ProductsList;
