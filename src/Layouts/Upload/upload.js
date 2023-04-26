import Header from '../Components/Header/header';
import PropTypes from 'prop-types'
function Upload({ children }) {
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <div className="container">{children}</div>
        </>
    );
}
Upload.propTypes={
    children:PropTypes.node.isRequired
}
export default Upload;
