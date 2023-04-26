import { forwardRef, useState } from 'react';
import imgFallBack from '~/assets/image/duphong.jpg';
import PropTypes from 'prop-types'
const Image= forwardRef(({ src, alt, fallBack: customFacllBack = imgFallBack, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const [onLoad, setOnload] = useState(false);
    function handleImg () {
        setFallBack(customFacllBack);
    }
    return (
        <img
            onLoad={() => {
                setOnload(true);
            }}
            style={{ visibility: onLoad ? 'visible' : 'hidden' }}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleImg}
        ></img>
    );
})
Image.propTypes={
    src:PropTypes.string,
     alt:PropTypes.string,
     fallBack:PropTypes.string
}
export default Image;
