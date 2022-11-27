import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BulkData from '../../bulk-food.json'

const ProductPage = () => {
    const [ productData, setProductData] = useState({});
    const params = useParams();

    useEffect(() => {
        const productInfo = BulkData.find((element) => element.id === Number(params.id))
    setProductData(productInfo);
    console.log(productInfo);

    }, [params])
    console.log(params);
    console.log(productData);
   
    return(
        <div>
            <div className="single-product-container">
            <div className="images-container">
            <img src={productData.imageUrl} alt=""/>
            </div>
            <div className="text-container">
            <h2>{productData.name}</h2>
            </div>
            </div>
        </div>
    )
}
export default ProductPage;