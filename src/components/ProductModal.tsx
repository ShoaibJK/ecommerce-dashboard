import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageFallback from './ImageFallback';
import Loader from './Loader';
import { BASE_URL, checkOnline } from '../utils/constants';
import { IProductDetail } from '../utils/types';
import { showAlert } from '../utils/alert';
type IProp={
  productId:number;
  onClose:()=>void;
}

const ProductModal = ({ productId, onClose }:IProp) => {
  const [product, setProduct] = useState<IProductDetail|null>(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        checkOnline();
        setIsLoading(true)
        const response = await axios.get(`${BASE_URL}/productDetail/${productId}`);
        setProduct(response.data);
        setIsLoading(false)
      } catch (error:any) {
        console.error('Failed to fetch product details:', error);
        setIsLoading(false);
        setProduct(null);
        showAlert(2, error?.message)
      }
    };
    fetchProductDetails();
  }, [productId]);

  const getAvailabilityColor = (availability:string) => {
    switch (availability) {
      case 'In Stock':
        return 'green';
      case 'Limited Stock':
        return 'orange';
      case 'Out of Stock':
        return 'red';
      default:
        return 'black';
    }
  };

  if (!product) return <span className="loading"><Loader size={20} isLoading={isLoading} className={''}/></span> //<span className="loading">Loading...</span>;

  return (
    <>
    <div className="modal-overlay" onClick={onClose}></div>
    <div className="modal">
      <div className="bg-white p-4 rounded">
        <h2>{product?.name}</h2>
        <p style={{ color: getAvailabilityColor(product?.availability) }}>{product.availability}</p>
        <p>{product.description}</p>
        <div style={{position:"relative", height: "200px"}}>
        <ImageFallback src={product?.detailedImage} alt={product?.name} styleMainImage={"object-cover"}/>
        </div>
        {/* <img src={product.detailedImage} alt={product.name} /> */}
        <button onClick={onClose} className="modal-close">
          Close
        </button>
      </div>
    </div></>
    
  );
};

export default ProductModal;
