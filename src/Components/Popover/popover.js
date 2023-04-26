import styles from './popover.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Popover({ children, classname }) {
    return <div className={cx('container', classname)}>{children}</div>;
}
Popover.propTypes = {
    children: PropTypes.node.isRequired,
    classname: PropTypes.string,
};
export default Popover;
