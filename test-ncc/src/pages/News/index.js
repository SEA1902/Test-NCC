import Group from '../../component/Group';
import './News.css'

function News() {
    return ( 
        <div className="news-page">
            <img src='logo.png' alt='logo' className='logo-img'></img>
            <div className='group1'>
                <label>Lorem ipsum dolor sit asmet?</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
            </div>
            <div className='group-list'>
                <Group image='group2.png'/>
                <Group image='group3.png'/>
                <Group image='group4.png'/>
            </div>
        </div>
    );
}

export default News;