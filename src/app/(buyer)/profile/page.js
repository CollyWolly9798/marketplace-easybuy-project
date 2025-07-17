'use client';

import { useState } from 'react';
import Menu from '@/features/buyer/panel/Menu.jsx';
import SectionContent from '@/features/buyer/panel/SectionContent.jsx';
import '@/styles/globals.scss';

const UserPanel = () => {
  const [activeSection, setActiveSection] = useState('menu');
  return (
    <aside>
      {activeSection === 'menu' ? (
        <div className="mx-4 mb-13 max-w-[343px] w-full rounded-[16px] shadow-lg py-3">
          <Menu setActiveSection={setActiveSection} />
        </div>
      ) : (
        <SectionContent sectionKey={activeSection} onBack={() => setActiveSection('menu')} />
      )}
    </aside>
  );
};

export default UserPanel;
