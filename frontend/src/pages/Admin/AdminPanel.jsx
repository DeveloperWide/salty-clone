import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import createIcon from "../../assets/createIcon.png";
import productsIcon from "../../assets/productsIcon.png";
import dashboardIcon from "../../assets/dashboard.png"

const AdminPanel = () => {
    const location = useLocation()

    const sidebarLinks = [
        { name: "Dashboard", path: "/admin/dashboard", icon: dashboardIcon },
        { name: "Create New Product", path: "/admin/dashboard/new", icon: createIcon },
        { name: "All Products", path: "/admin/dashboard/products", icon: productsIcon },
    ]

    return (
        <>
            {/* Top Navbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#7E46AC] to-[#9546AC] text-white">
                <img src="https://salty.co.in/cdn/shop/files/Asset_2_288x_5162e963-ec13-4ad2-b991-100c4873b2eb.png?v=1722942549&width=220" alt="Salty Logo" width={110} />
                <div className="flex items-center gap-4">
                    <span>Hi! Admin</span>
                    <button className="border px-4 py-1 rounded-full text-sm bg-white text-black hover:bg-gray-100">Logout</button>
                </div>
            </div>

            {/* Sidebar + Content */}
            <div className="flex">
                {/* Sidebar Navigation */}
                <aside className="w-16 md:w-64 border-r border-gray-200 min-h-screen pt-4">
                    {sidebarLinks.map((link, index) => {
                        const isActive = location.pathname === link.path
                        return (
                            <Link
                                key={index}
                                to={link.path}
                                className={`flex items-center gap-3 py-3 px-4 transition-all duration-200
                                ${isActive ? "bg-indigo-100 text-indigo-600 border-r-4 border-indigo-500" : "text-gray-700 hover:bg-gray-100"}`}
                            >
                                <img src={link.icon} alt={link.name} className='h-5 w-5'/>
                                <span className="hidden md:inline">{link.name}</span>
                            </Link>
                        )
                    })}
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 p-4">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default AdminPanel
