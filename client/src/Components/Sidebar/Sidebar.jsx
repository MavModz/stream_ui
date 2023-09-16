import React from 'react';
import { LayoutDashboard, Wallet2, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import './Sidebar.css';

function Sidebar() {

    const sidebarLinks = [
        {
            icon: <LayoutDashboard size={26} strokeWidth={1.5} />,
            title: "Dashboard",
            link: "/dashboard",
        },
        {
            icon: <Wallet2 size={26} strokeWidth={1.5} />,
            title: "Wallet",
            link: "/login",
        },
        {
            icon: <User size={26} strokeWidth={1.5} />,
            title: "Profile",
            link: "/register",
        },
        {
            icon: <LogOut size={26} strokeWidth={1.5} />,
            title: "Logout",
            link: "/logout",
        },

    ];

    return (
        // <aside>
        //     <div className="sidebar-container top-0 left-0 fixed bg-blue-500 w-[16vw] h-screen">
        //         <h2 className='text-xl text-white flex justify-center'>Sidebar</h2>
        //         <div className="sidebar-links flex flex-col gap-10 mt-10 w-full">
        //             {sidebarLinks.map((link, index) => (
        //                 <Link key={index} to={link.link} className={`sidebar-wrapper flex items-center gap-3 w-full rounded-tl-2xl rounded-bl-2xl ${window.location.pathname === link.link ? "active" : ""}`}>
        //                     <b></b>
        //                     <b></b>
        //                     {link.icon}
        //                     <span className="text-white text-lg" onClick={link.onClick}>
        //                         {link.title}
        //                     </span>
        //                 </Link>
        //             ))}
        //         </div>
        //     </div>
        // </aside>

        <aside>
            <div className="sidebar-container top-0 left-0 fixed bg-blue-500 w-[16vw] h-screen">
                <h2 className='text-xl text-white flex justify-center'>Sidebar</h2>
                <div className="sidebar-links flex flex-col gap-10 mt-10 w-full">
                    {sidebarLinks.map((link, index) => (
                        <Link key={index} to={link.link} className={`sidebar-wrapper flex items-center w-full rounded-tl-2xl rounded-bl-2xl ${window.location.pathname === link.link ? "active" : ""}`}>
                            <b></b>
                            <b></b>
                            <div className="icon-and-link flex items-center gap-3 pl-5">
                                {link.icon}
                                <span className="text-white text-lg" onClick={link.onClick}>
                                    {link.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </aside>

    )
}

export default Sidebar