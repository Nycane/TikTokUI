import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutDefault from './Layouts/Default';
import { publishRoute } from './Routes';
function App() {
    console.log(publishRoute);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {publishRoute.map((e, i) => {
                        console.log(e.layout);
                        const Component = e.component;
                        const Layout = e.layout ? e.layout : LayoutDefault;
                        return (
                            <Route
                                key={i}
                                path={e.path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
