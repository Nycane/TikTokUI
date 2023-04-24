import classNames from 'classnames/bind';
import styles from './sidebar.module.scss';
const cx = classNames.bind(styles);
function SideBar() {
    return <h1 className={cx('sidebar')}>SideBar</h1>;
}

export default SideBar;
