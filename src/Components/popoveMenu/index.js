import styles from './popovermenu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './menuItem';
import Popover from '../../Components/Popover';
import Header from './header';
import { useState } from 'react';

const cx = classNames.bind(styles);
function PopoverMenu({ children, menuItems, onHide = false }) {
    const [history, setHistory] = useState([{ data: menuItems }]);
    let currentMenu = history[history.length - 1];
    function handleChange(e) {
        console.log('handlechange', e);
    }

    return (
        <Tippy
            delay={[0, 500]}
            placement="bottom-end"
            offset={[15, 20]}
            visible
            interactive
            hideOnClick={onHide}
            onHide={() => setHistory((valueNow) => valueNow.slice(0, 1))}
            render={(Attr) => (
                <div className={cx('container')}>
                    <Popover classname={cx('classname')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onClick={() => {
                                    setHistory((valueNow) => valueNow.slice(0, valueNow.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('scroll')}>
                            {currentMenu.data.map((e, i) => {
                                return (
                                    <MenuItem
                                        key={i}
                                        onClick={() => {
                                            let isChildren = !!e.children;
                                            if (isChildren) {
                                                setHistory((valueNow) => [...valueNow, e.children]);
                                            } else {
                                                handleChange(e);
                                            }
                                        }}
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

export default PopoverMenu;
