import { NavLink } from "react-router-dom";


const StartMenu = ({Icon ,title ,to}) => {
    return (
        <>
            <NavLink to={to} >
                <div>
                    <Icon />
                </div>
                <span>
                    {title}
                </span>
            </NavLink>
        </>
    )
}
export default StartMenu;