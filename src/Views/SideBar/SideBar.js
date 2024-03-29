import Button from '../../Components/Button/Button';
import { FaHome, FaSearch, FaWpexplorer, FaVideo, FaPlaneDeparture, FaBell, FaPlus, FaPersonBooth } from "react-icons/fa";
import './SideBar.css';

function SideBar() {
    return (
        <div className="SideBar">
            <h3>Social Gram</h3>
            <Button text="Home" icon={FaHome} />
            <Button text="Search" icon={FaSearch} />
            <Button text="Explore" icon={FaWpexplorer} />
            <Button text="Reels" icon={FaVideo} />
            <Button text="Messages" icon={FaPlaneDeparture} />
            <Button text="Notifications" icon={FaBell} />
            <Button text="Create" icon={FaPlus} />
            <Button text="Profile" icon={FaPersonBooth} />
            
        </div>
    )
}

export default SideBar;