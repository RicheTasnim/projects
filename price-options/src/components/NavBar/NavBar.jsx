import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="text-black p-6 bg-amber-300">
        <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
            {
                open === true ? <AiOutlineClose/> : <AiOutlineMenu />
            }
             
        </div>
      <ul className={`md:flex absolute md:static duration-1000 bg-amber-300 px-6 ${open ? 'top-16': '-top-60'}`}>
        {routes.map((route) => <Link key={route.id} route={route}></Link>)}
      </ul>
    </nav>
  );
};

export default NavBar;
