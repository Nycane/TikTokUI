import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './meneu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ path, title, icon }) {
    return (
        <div className={cx('menuItem')}>
           
            <NavLink
                end
                className={(nav) => {
                    return cx('title', {
                        active: nav.isActive,
                    });
                }}
                to={path}
            >
                 <span
                    >
                {icon}
            </span>
                {title}
            </NavLink>
        </div>
    );
}

export default MenuItem;
