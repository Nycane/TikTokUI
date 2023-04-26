import classNames from 'classnames/bind';
import Header from '../Components/Header';
import SideBar from '../Components/Sidebar';
import styles from './default.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function LayoutDefault({ children }) {
    console.log('default', children);
    return (
        <div>
            <Header></Header>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <SideBar></SideBar>
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}
LayoutDefault.propTypes = {
    children: PropTypes.node.isRequired,
};
export default LayoutDefault;
