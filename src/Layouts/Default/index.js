import classNames from 'classnames/bind';
import Header from '../Components/Header';
import SideBar from './Sidebar';
import styles from './default.module.scss';

const cx = classNames.bind(styles);
function LayoutDefault({ children }) {
    console.log("default",children);
    return (
        <div>
                <Header>
                </Header>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <SideBar></SideBar>
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default LayoutDefault;
