import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import { Outlet } from 'react-router-dom';

const DashboardLayout = ({ children, activeMenu }) => {
    const { user } = useContext(UserContext);

    // 1. Add state to manage the menu's visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 2. Create a function to toggle the state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* 3. Pass the state and toggle function to Navbar */}
            <Navbar
                activeMenu={activeMenu}
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
            />

            {user && (
                <div className="flex flex-1">
                    {/* Persistent sidebar for larger screens */}
                    <div className="hidden lg:block w-64 bg-white shadow">
                        <SideMenu activeMenu={activeMenu} />
                    </div>

                    {/* Toggled sidebar for smaller screens */}
                    {isMenuOpen && (
                        <div className="lg:hidden fixed top-[73px] left-0 h-full bg-white shadow-lg z-20">
                            <SideMenu activeMenu={activeMenu} />
                        </div>
                    )}

                    <main className='flex-grow p-6'>{children}</main>
                </div>
            )}
        </div>
    );
};

export default DashboardLayout;