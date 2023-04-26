import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './popovermenu.module.scss';
const cx = classNames.bind(styles);
function Header({ title, onClick }) {
    return (
        <header className={cx('header')}>
            <button onClick={onClick}>
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </button>
            <h3>{title}</h3>
        </header>
    );
}
Header.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
};
export default Header;
