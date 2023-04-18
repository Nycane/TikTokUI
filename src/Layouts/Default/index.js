import Header from '../Components/Header'
import SideBar from './Sidebar';
function LayoutDefault({children}) {
    console.log(children)
    return (  
       <>
            <header>
                <Header></Header>
            </header>
            <div className="container">
                <div className="sidebar">
                    <SideBar></SideBar>
                </div>

                <div className="content">
                    {children}
                </div>
            </div>
       </>
       
    );
}

export default LayoutDefault

