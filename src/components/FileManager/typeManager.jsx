import { VscClose } from 'react-icons/vsc';
import { Rnd } from 'react-rnd';
import { lazy, Suspense } from 'react';
import AppWindow from '../AppWindow';

const appsConfig = {
    
};

function typeManager({ name, onClose1, onFocus1, appInFolder1  }) {
    const AppComponent = appsConfig[appName];

    return (
        <AppWindow 
            appName= {name}
            onClose ={onClose1}
            onFocus={onFocus1}
            appInFolder ={appInFolder1}
        />
    );
}

export default AppWindow;