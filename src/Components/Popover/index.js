import styles from './popover.module.scss';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';
const cx = classNames.bind(styles);
function Popover({ children,classname},ref) {
    return (
        <div ref={ref} className={cx('container',classname)}>
            {children}
        </div>
    );
}

export default forwardRef(Popover);
