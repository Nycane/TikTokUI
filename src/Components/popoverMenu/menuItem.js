import Button from '../Button';
import styles from './popovermenu.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    return (
        <Button
            icon={data.icon}
            to={data.to}
            onClick={onClick}
            customCss={cx('menuItem', {
                customcss: data.type,
            })}
        >
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};
export default MenuItem;
