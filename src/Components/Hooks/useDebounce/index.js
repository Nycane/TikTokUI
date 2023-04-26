import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        console.log('useEffect');
        let idTimeout = setTimeout(() => {
            setDebounce(value);
        }, delay);
        return () => {
            console.log('clear time out');
            clearTimeout(idTimeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    console.log('Debounce');
    return debounce;
}
useDebounce.propTypes={
    value:PropTypes.string,
    delay:PropTypes.number
}
export default useDebounce;
