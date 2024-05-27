import React from 'react';
import SideBar from "@/app/components/SideBar";

const Dashboard = () => {

    return (
        <aside className="flex">
            <SideBar/>
            <div className="w-full lg:w-full">
                <header className="bg-white shadow">
                    <div className="mx-1 max-w-7xl px-2 py-4 sm:px-2 lg:px-2">
                        <h1 className="text-2xl font-medium tracking-tight text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        {/* Your content */}
                    </div>
                </main>
            </div>

        </aside>
    );
};

export default Dashboard;