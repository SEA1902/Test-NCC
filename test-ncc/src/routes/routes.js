import config from '../config';

// Pages
import Home from '../pages/Home';
import Services from '../pages/Services';
import News from '../pages/News';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

const routes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.services, component: Services },
    { path: config.routes.news, component: News},
    { path: config.routes.blog, component: Blog},
    { path: config.routes.contact, component: Contact },
];


export { routes };
