
// react
import { Outlet } from "react-router-dom"


export default function Root({  }) {
    return (
        <div className="rooting">
            <Outlet/>
        </div>
    )
}