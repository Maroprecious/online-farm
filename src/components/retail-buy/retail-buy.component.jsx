import './retail-buy.styles.scss'
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const RetailBuy = ({retailInfo}) => {
    const { imageUrl, price, name, id } = retailInfo;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(retailInfo);
    const navigate = useNavigate();
    return(
        
        <div className="retail-buy-container" onClick={() => navigate(`/productPage/${id}`)}>
            <img className='retail-img' src={imageUrl} alt="" />
            <p>{name}</p>
            <p>{price}</p>
            <button className="buy-btn" onClick={addProductToCart}>Add to cart</button>
          </div>
    )
}
export default RetailBuy;
