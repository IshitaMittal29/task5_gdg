import React from 'react';

import CreatorSidebar from './Sidebar.jsx';
import PageTitleBar from './PageTitleBar.jsx';
import DashboardHeader from './DashboardHeader.jsx';
import WelcomeCard from './WelcomeCard.jsx';
import CreatorStats from './CreatorStats.jsx';
import MyCourses from './MyCourses.jsx';

function CreatorDashboardPage() {
  return (
    <div className="flex min-h-screen font-inter bg-gray-100">
      <CreatorSidebar />

      <main className="flex-1 p-8">
        <PageTitleBar />
        <DashboardHeader />

        {/* Grid of Cards */}
        <div className="grid grid-cols-3 gap-6">
          <WelcomeCard />
          <CreatorStats />
          <MyCourses />
        </div>
      </main>
    </div>
  );
}

export default CreatorDashboardPage;