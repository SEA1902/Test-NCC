import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from '../src/routes';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';
import './App.css'

function App() {

    return (
        <Router>
            <div className="App">
                <Sidebar />
                <div className='container'>
                    <Routes>
                        {routes.map((route, index) => {                  
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                      <Page />
                                    }
                                />
                            );
                        })}
                    </Routes>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
