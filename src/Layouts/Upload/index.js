import Header from '../Components/Header';
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

export default Upload;
