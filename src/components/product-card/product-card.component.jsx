import CurrencyFormat from "react-currency-format";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//import Ribbon from "../../assets/black ribbon.png"
import { BiHeart } from "react-icons/bi";
import "./biheart.styles.scss"

import {
  BestSeller,
  ProductCardContainer,
  ProductImg,
  ProductOne,
  ProductTag,
  ProductName,
  Currency,
  AddButton,
  Heart,
} from "../product-card/product-card.styles";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price, id, tag } = product;
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer onClick={() => navigate(`/productPage/${id}`)}>
      <ProductOne>
      <ProductTag> 
      <Heart> 
      <BiHeart className="love" />
       </Heart>
      <BestSeller> {tag} </BestSeller>
      </ProductTag>
        <ProductImg src={imageUrl} alt={`${name}`} />
        <ProductName>{name.length > 27 ? name.slice(0, 20).concat("...") : name}</ProductName>
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
          renderText={(price) => <Currency>{price}</Currency>}
        />
        <AddButton onClick={addProductToCart}>Add to cart</AddButton>
      </ProductOne>
    </ProductCardContainer>
  );
};
export default ProductCard;
