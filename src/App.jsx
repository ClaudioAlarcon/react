import { Outlet } from "react-router";
import Navmenu from "./components/Navmenu";

const App = () => {
    return (
        <div>
            <Navmenu />
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default App;
