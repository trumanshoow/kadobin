import {NavLink} from "react-router-dom";

const MenuLink = ({children, to}) => {
    return (
        <>
            <NavLink
                to={to}
                style={({isActive}) => ({color: isActive ? 'red' : "black"})}
                className={({isActive, isPending}) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                {children}
            </NavLink>
        </>
    );
};
export default MenuLink;