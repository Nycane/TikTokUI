import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover, ResultAccount } from '~/Components';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './search.module.scss';
import { useDebounce } from '~/Components/Hooks';
import { searchService } from '~/Service/searchService.js';
const cx = classNames.bind(styles);
function Search() {
    const [valueSearch, setValueSearch] = useState('');
    const [listSearch, setListSearch] = useState([]);
    const [showSearch, setShowSearch] = useState(true);
    const [loading, setLoading] = useState(true);
    const inputRef = useRef();

    let debounce = useDebounce(valueSearch, 500, setLoading);
    useEffect(() => {
        if (!debounce.trim()) {
            setListSearch([]);
            return;
        }
        const apiSearch = async () => {
            setLoading(true);
            let kq = await searchService(debounce);
            setLoading(false);
            setListSearch(kq);
        };
        apiSearch();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounce]);

    function handleSearch(e) {
        console.log(e.target.value);
        if (e.target.value.startsWith(' ')) {
            e.preventDefault();
        } else {
            setValueSearch(e.target.value);
        }
    }

    function handleRemove() {
        setValueSearch('');
        setListSearch([]);
        inputRef.current.focus();
    }

    function handleFocus() {
        setShowSearch(true);
    }
    <FontAwesomeIcon onClick={handleRemove} className={cx('close')} icon={faCircleXmark}></FontAwesomeIcon>;

    return (
        <div>
            <Tippy
                onClickOutside={() => setShowSearch(false)}
                interactive
                placement="bottom"
                visible={showSearch && listSearch.length >= 1}
                // tabIndex="-1"
                delay={[0, 500]}
                render={(Attr) => (
                    <div className={cx('resultSearch')}>
                        <Popover>
                            <h4 className={cx('title')}>Tài Khoản</h4>
                            {listSearch.map((e) => {
                                return <ResultAccount key={e.id} data={e}></ResultAccount>;
                            })}
                        </Popover>
                    </div>
                )}
            >
                <div className={cx('form-search')}>
                    <input
                        onFocus={handleFocus}
                        ref={inputRef}
                        onChange={(e) => {
                            handleSearch(e);
                        }}
                        value={valueSearch}
                        placeholder="Tìm Kiếm"
                    ></input>
                    <span className={cx('jamb')}></span>

                    {!!valueSearch && (
                        <div className={cx('reset')}>
                            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}
                            {!loading && (
                                <FontAwesomeIcon
                                    onClick={handleRemove}
                                    className={cx('close')}
                                    icon={faCircleXmark}
                                ></FontAwesomeIcon>
                            )}
                        </div>
                    )}
                    <button onMouseDown={(e)=>e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
