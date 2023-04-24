import Button from '../Button'
import styles from './popovermenu.module.scss'
import classNames  from 'classnames/bind';
const cx = classNames.bind(styles)
function MenuItem({data,onClick}) {
    return (  
               <Button icon={data.icon}  to={data.to} onClick={onClick} customCss={cx("menuItem",{
                customcss:data.type
               })}>
                {data.title}
               </Button>
    );
}

export default MenuItem;