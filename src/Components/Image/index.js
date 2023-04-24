import { forwardRef, useState } from 'react';
import imgFallBack from '~/assets/image/duphong.jpg';
function Image({ src, alt, fallBack: customFacllBack = imgFallBack, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');
    const [onLoad, setOnload] = useState(false);
    function handleImg() {
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
}

export default forwardRef(Image);
