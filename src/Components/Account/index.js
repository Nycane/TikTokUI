/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import styles from './account.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Account({ data }) {
    return (
        <Link to={'@' + data.nickname} className={cx('info')}>
            <div className={cx('avatar')}>
                <img src={data.avatar}></img>
            </div>
            <div className={cx('name')}>
                <h4>
                    {data.nickname}
                    {data.tick && <FontAwesomeIcon className={cx('iconCheck')} icon={faCircleCheck}></FontAwesomeIcon>}
                </h4>
                <p>{data.full_name}</p>
            </div>
        </Link>
    );
}

export default Account;
