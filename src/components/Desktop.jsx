import AppIcons from './AppIcons';
import Dock from './Dock';
import TopBar from './TopBar';
import AppWindow from './AppWindow';
import { useState } from 'react';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';


function Desktop() {

  const [openWindows, setOpenWindows] = useState([]);

  const handleOpenApp = (appName) => {
    setOpenWindows([...openWindows, { id: Date.now(), appName }]);
  };

  const handleCloseApp = (windowId) => {
    setOpenWindows(openWindows.filter(window => window.id !== windowId));
  };
  
  //Items dock
  const itemsdock = [
          { icon: <VscHome size={18} />, label: 'Home', onClick: () => handleOpenApp('Home') },
          { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => handleOpenApp('Archive') },
          { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => handleOpenApp('Profile') },
          { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => handleOpenApp('Settings') },
      ];
    
  const itemsapp = [
          { icon: <VscHome size={34} />, label: 'Test', onClick: () => handleOpenApp('Test') },
          { icon: <VscArchive size={34} />, label: 'blabla', onClick: () => handleOpenApp('blabla') },
          { icon: <VscAccount size={34} />, label: 'tytytyy', onClick: () => handleOpenApp('tytytyy') },
          { icon: <VscSettingsGear size={34} />, label: 'Settings', onClick: () => handleOpenApp('Settings') },
      ];

  return (
    <div className="relative h-screen w-screen">
      
      <TopBar />
      
      <div className="pt-8">
        <AppIcons 
            items={itemsapp}
        /> 
      </div>

      {openWindows.map(window => (
        <AppWindow 
          key={window.id}
          appName={window.appName}
          onClose={() => handleCloseApp(window.id)}
        />
      ))}

      <Dock 
          items={itemsdock}
          panelHeight={30}
          baseItemSize={60}
          magnification={70}
      />

    </div>
  );
}

export default Desktop;