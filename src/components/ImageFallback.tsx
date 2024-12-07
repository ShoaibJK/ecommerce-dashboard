import  { useState } from 'react';
import placeholder from "../assets/placeholder.jpg";
import Loader from './Loader';
type IProp={
    src:string;
    alt:string;
    styleMainImage:string;
}
/* the purpose of this component is to provide better UX for image load and optimize image load*/
function ImageFallback({ src, alt, styleMainImage }: IProp) {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };
    const handleImageError = () => {
        setImageSrc(placeholder);
    };
    return (
      <>
          {isLoading && (
              <div className={'loader-on-image'}>
                <Loader size={40} isLoading={isLoading} className={''}/>
             </div>
          )}
          {isLoading && <img src={placeholder} className={styleMainImage}/>}
          <img
              src={imageSrc}
              style={{ display: !isLoading ? 'block' : 'none' }}
              onLoad={handleImageLoad}
              onError={handleImageError}
              alt={isLoading ? '' : alt}
              className={styleMainImage}
          />
      </>
  );
}

export default ImageFallback