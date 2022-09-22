import { Link } from 'react-router-dom';
import config from '../../config';
import './Sidebar.css'

function Sidebar() {
    const handelActive = (e) => {
        var elems = document.querySelectorAll(".active");
        [].forEach.call(elems, function(el) {
        el.classList.remove("active");
         });
        e.target.classList.add("active");
    }
    return ( 
        <div className="sidebar">
            <ul onClick={(e) => handelActive(e)}>
                <Link to={config.routes.home} className='sidebar-link-home'>Home</Link>
                <Link to={config.routes.services} className='sidebar-link'>Services</Link>
                <Link to={config.routes.news} className='sidebar-link'>News</Link>
                <Link to={config.routes.blog} className='sidebar-link'>Blog</Link>
                <Link to={config.routes.contact} className='sidebar-link'>Contact</Link>
            </ul>
        </div>
     );
}

export default Sidebar;