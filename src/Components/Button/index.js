import styles from './button.module.scss';
import classNames from 'classnames/bind';
import { Route,Link } from 'react-router-dom';
const cx = classNames.bind(styles)
function Button({children,type=false,size=false,radius=false,disabled=false,to=false,href=false,customCss,onClick,icon,...rest}) {
    let props={
        onClick,
        ...rest
      }
      console.log("r render")
    let CompBtn = 'button';
    if(href){
        CompBtn="a"
        props.href=href
    }else if(to){
        CompBtn=Link
        props.to=to
    }
  if(disabled){
   Object.keys(props).forEach(e => {
       if(e.startsWith('on')){
        delete props[e]
       }
    });
  }
    return <CompBtn {...props} className={cx('container',{
        [type]:type,
        [size]:size,
        radius,
        disabled,
        [customCss]:customCss
    })}>
       { icon &&<span className={cx("icon")}>
             {icon}
        </span>
}
        <span className={cx('text')}>
        {children}
        </span>
      
    </CompBtn>;
}

export default Button;
