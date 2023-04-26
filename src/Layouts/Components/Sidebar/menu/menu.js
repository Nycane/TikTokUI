import classNames from "classnames/bind";
import styles from './meneu.module.scss'
const cx = classNames.bind(styles)
function Menu({children}) {
    return <nav className={cx("sidebar")}>
            {children}
         </nav>;
}

export default Menu;
