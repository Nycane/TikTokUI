import {
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faPlusMinus,
    faQuestionCircle,
    faSignOut,
    faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyMessage from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import Search from '../Search';
import PopoverMenu from '~/Components/popoverMenu';
import Image from '~/Components/Image'
import Button from '~/Components/Button';
import { MessageIcon, UploadIcon } from '~/Components/Icon';
import IconLogo from '~/assets/image/iconLogo.js';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import routesConfig from '~/Config/routes.js';
let cx = classNames.bind(styles);
console.log(cx(styles.container));
function Header() {
    let currentUser = true;
    const menuItems = [
        {
            icon: <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        title: 'Tiếng Việt',
                    },
                    {
                        title: 'English',
                    },
                    {
                        title: 'Tiếng Việt',
                    },
                    {
                        title: 'English',
                    },  {
                        title: 'Tiếng Việt',
                    },
                    {
                        title: 'English',
                    },  {
                        title: 'Tiếng Việt',
                    },
                    {
                        title: 'English',
                    },  {
                        title: 'Tiếng Việt',
                    },
                    {
                        title: 'English',
                    },  {
                        title: 'Tiếng Việt',
                    },
                    {
                        title: 'English',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>,
            title: 'Feedback and help',
            to: '/follow',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
            title: 'Keyboard short cut',
        },
    ];
    const userItems = [
        {
            icon: <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>,
            title: 'View Profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            title: 'Get Coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Setting',
        },
        ...menuItems,
        {
            icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
            title: 'Logout',
            type: 'Css',
        },
    ];

    return (
        <header className={cx('container')}>
            <div className={cx('row')}>
                <Link to={routesConfig.home}>
                    <div className={cx('image')}>
                        <Button></Button>
                        <IconLogo></IconLogo>
                    </div>
                </Link>
                {/* search */}
                <Search></Search>

                {/* action */}
                <div className={cx('form-action')}>
                    <Button
                        icon={<FontAwesomeIcon icon={faPlusMinus}></FontAwesomeIcon>}
                        type="rounded"
                        size="medium"
                        customCss={cx('customUpload')}
                    >
                        Upload
                    </Button>
                    {currentUser ? (
                        <div className={cx('user')}>
                            <TippyMessage content="Message">
                                <button className={cx('btn-iconUpload')}>
                                    <UploadIcon classname={cx('customIcon')} />
                                </button>
                            </TippyMessage>
                            <TippyMessage content="Inbox">
                                <button className={cx('btn-iconMessage')}>
                                    <MessageIcon />
                                </button>
                            </TippyMessage>
                        </div>
                    ) : (
                        <>
                            <Button type="default" size="medium">
                                Log in
                            </Button>
                        </>
                    )}
                    <div className={cx('btnMore')}>
                        <PopoverMenu menuItems={currentUser ? userItems : menuItems}>
                            {currentUser ? (
                                <Image src="" alt=""></Image>
                            ) : (
                                <button className={cx('btnEllipe')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                                </button>
                            )}
                        </PopoverMenu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
