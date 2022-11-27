import './checkout-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({cartItem}) => {
    const {addItemToCart, removeItemToCart, clearItemToCart} = useContext(CartContext);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);
    const clearItemHandler = () => clearItemToCart(cartItem);
    const {name, quantity, imageUrl, price} = cartItem;
    return(
        <div className='checkout-item-container'>
       <div className='image-container'>
       <img src= {imageUrl} alt={`${name}`} />
       </div>
       <span className='name'> {name}</span>
       <span className='quantity'>
       <span className='arrow' onClick={removeItemHandler}>&#10094;</span>
       <span className='value'>{quantity}</span>
       <span className='arrow' onClick={addItemHandler}>&#10095;</span>
       </span>
       <span className='price'>{price}</span>
       <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}
export default CheckoutItem;