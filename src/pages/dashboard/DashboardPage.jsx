import React from 'react';

import Sidebar from './Sidebar.jsx';
import PageTitleBar from './PageTitleBar.jsx';
import DashboardHeader from './DashboardHeader.jsx';
import WelcomeCard from './WelcomeCard.jsx';
import Calendar from './Calendar.jsx';
import Performance from './Performance.jsx';
import MyVisit from './MyVisit.jsx';
import LinkedTeachers from './LinkedTeachers.jsx';
import UpcomingEvents from './UpcomingEvents.jsx';

function DashboardPage() {
  return (
    <div className="flex min-h-screen font-inter bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <PageTitleBar />
        <DashboardHeader />

        <div className="grid grid-cols-3 gap-6">
          <WelcomeCard />
          <Calendar />
          <Performance />
          <MyVisit />
          <LinkedTeachers />
          <UpcomingEvents />
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;