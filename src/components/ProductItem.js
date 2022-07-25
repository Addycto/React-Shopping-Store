import { useLocation } from "react-router-dom";

function ProductItem(props) {
  const product = props.product
  const location = useLocation()
  
  return (
    <div className="col-auto pt-3">
      <div className="card pt-2" style={{ width: "18rem" }}>
        <div style={{height: "120px", objectFit: "contain"}}>
          <img src={product.image} className="card-img-top" style={{height: "120px", objectFit: "contain"}} alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title" title={product.title} style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace:"nowrap"}}>{product.title}</h5>
          <div className="row just-content-between">
            <h5 className="col card-subtitle d-flex justify-content-center align-items-center">{product.price} $</h5>
            <button hidden={location.pathname==='/cart'} className="col btn btn-sm btn-outline-primary me-3" onClick={()=>props.handleAddToCartButton(product)}>Add to cart</button>
            <button hidden={location.pathname!=='/cart'} className="col btn btn-sm btn-outline-danger me-3" onClick={()=>props.handleRemoveFromCartButton(product)}>Remove from cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;