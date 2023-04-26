/* eslint-disable no-unused-vars */
import styles from './globalStyles.module.scss';
import PropTypes from 'prop-types'
function GlobalStyles({ children }) {
    console.log(children)
    return <div>{children}</div>;
}
GlobalStyles.propTypes={
    children:PropTypes.node.isRequired
}
export default GlobalStyles
