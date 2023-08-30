import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Profile/Profile';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
            
            
        </div>
    );
};

export default Main;