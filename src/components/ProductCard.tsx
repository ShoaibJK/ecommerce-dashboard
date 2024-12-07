import  { useState } from 'react';
import ProductModal from './ProductModal';
import ImageFallback from './ImageFallback';
import { IProduct } from '../utils/types';
type IProp={
  product:IProduct
}
const ProductCard = ({ product }:IProp) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border p-4 card card-content " >
      <div style={{position:"relative", height:"150px"}}>
      <ImageFallback src={product.image} alt={product.name} styleMainImage={"object-cover"}/>
      </div>
      <h2 className="card-title">{product.name}</h2>
      <p className='card-price'>${product.price}</p>
      <div>
      <button
        className="card-button"
        onClick={() => setShowModal(true)}
      >
        View Details
      </button>
      {showModal && (
        <ProductModal
          productId={product.id}
          onClose={() => setShowModal(false)}
        />
      )}
      </div>
    </div>
  );
};

export default ProductCard;
