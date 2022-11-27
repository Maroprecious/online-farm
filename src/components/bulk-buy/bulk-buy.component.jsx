import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './bulk-buy.styles.scss'

const BulkOne = ({bulkInfo}) => {
    const { imageUrl, name, price, id } = bulkInfo;
    const { addItemToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const addProductToCart = () => addItemToCart(bulkInfo);
    return(
        <div className="bulk-buy-container" onClick={() => navigate(`/productPage/${id}`)}>
        <img className="bulk-img" src={imageUrl} alt="" />
        <p>{name}</p>
        <span>{price}</span>
        <button className="buy-btn" onClick={addProductToCart}>Add to cart</button>
      </div>
    )
}
export default BulkOne;