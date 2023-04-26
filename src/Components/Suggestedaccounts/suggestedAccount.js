import classNames from 'classnames/bind';
import styles from './suggestedacAccount.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function SuggestedAccount({data}) {
    console.log(data)
    return (
        <div>
            <Link to={'/@' + data.nickname} className={cx('info')}>
                <div className={cx('avatar')}>
                    <img src={data.avatar}></img>
                </div>
                <div className={cx('name')}>
                    <h4>
                        {data.nickname}
                        {data.tick && (
                            <FontAwesomeIcon className={cx('iconCheck')} icon={faCircleCheck}></FontAwesomeIcon>
                        )}
                    </h4>
                    <p>{data.full_name}</p>
                </div>
            </Link>
        </div>
    );
}

export default SuggestedAccount;
