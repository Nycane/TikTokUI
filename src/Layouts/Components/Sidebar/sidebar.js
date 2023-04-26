import classNames from 'classnames/bind';
import styles from './sidebar.module.scss';
import Menu from './menu';
import { MenuItem } from './menu';
import { HomeIcon, FollowIcon, LiveIcon } from '~/Components/Icon';
import { SuggestedAccount } from '~/Components/Suggestedaccounts';
import routesConfig from '~/Config';
import { useEffect, useState } from 'react';
import axios from 'axios';
console.log(routesConfig);
const cx = classNames.bind(styles);
function SideBar() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getAccount = async () => {
            const kq = await axios.get('https://tiktok.fullstack.edu.vn/api/users/search?q=huong&type=less');
            try {
                setData(kq.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getAccount();
    }, []);
    function listSuggestedAccount() {
        return data.map((e) => {
            return <SuggestedAccount key={e.id} data={e}></SuggestedAccount>;
        });
    }
    return (
        <h1 className={cx('sidebar')}>
            <Menu>
                <MenuItem path={routesConfig.routes.home} title="For You" icon={<HomeIcon />}></MenuItem>
                <MenuItem path={routesConfig.routes.follow} title="Following" icon={<FollowIcon />}></MenuItem>
                <MenuItem path={routesConfig.routes.live} title="Live" icon={<LiveIcon />}></MenuItem>
            </Menu>
            <div className={cx('suggestedAccount')}>
                <p className={cx('title')}>SuggestedAccount</p>
                {listSuggestedAccount()}
                <p className={cx('seeAll')}>See All</p>
            </div>
            <div className={cx('suggestedAccount')}>
                <p className={cx('title')}>Following accounts</p>
                {listSuggestedAccount()}
                <p className={cx('seeAll')}>See All</p>
            </div>
        </h1>
    );
}

export default SideBar;
