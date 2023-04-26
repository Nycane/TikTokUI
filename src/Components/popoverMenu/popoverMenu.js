import styles from './popovermenu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './menuItem';
import Popover from '../Popover';
import Header from './header';
import {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function PopoverMenu({ children, menuItems, onHide = false }) {
    const [history, setHistory] = useState([{ data: menuItems }]);
    let currentMenu = history[history.length - 1];
    console.log(currentMenu)
    function handleChange(e) {
        console.log('handlechange', e);
    }
        function handleReset(){
           setHistory((valueNow) => valueNow.slice(0, 1))
        }
        function handleBack(){
            setHistory((valueNow) => valueNow.slice(0, valueNow.length - 1));
        } 
        
        const handleMenu = useCallback((e)=>{
                let isChildren = !!e.children;
                if (isChildren) {
                    setHistory((valueNow) => [...valueNow, e.children]);
                } else {
                    handleChange(e);
                }
        },[])
    return (
        <Tippy
            delay={[0, 500]}
            placement="bottom-end"
            offset={[15, 20]}
            interactive
            hideOnClick={onHide}
            onHide={handleReset}
            render={(Attr) => (
                <div className={cx('container')}>
                    <Popover classname={cx('classname')}>
                        {history.length > 1 && (
                            <Header
                                title={currentMenu.title}
                                onClick={
                                    handleBack
                                }
                            />
                        )}
                        <div className={cx('scroll')}>
                            {currentMenu.data.map((e, i) => {
                                return (
                                    <MenuItem
                                        key={i}
                                        onClick={()=>handleMenu(e)}
                                        data={e}
                                    ></MenuItem>
                                );
                            })}
                        </div>
                    </Popover>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
PopoverMenu.propTypes = {
    children: PropTypes.node.isRequired,
    menuItem: PropTypes.array,
    onHide: PropTypes.bool,
};

export default PopoverMenu;
