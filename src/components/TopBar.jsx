import { useState, useEffect } from 'react';


function TopBar() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const getHours = () => {
        return currentTime.getHours().toString().padStart(2, '0');
    };

    const getMinutes = () => {
        return currentTime.getMinutes().toString().padStart(2, '0');
    };

    const getSeconds = () => {
        return currentTime.getSeconds().toString().padStart(2, '0');
    };

    return (
        <div className="fixed top-0 left-0 right-0 h-8 bg-orange-100/20 backdrop-blur-md text-white flex items-center justify-end px-4">
            <div>
                <span className="mr-2 center-left">{`${getHours()}:${getMinutes()}:${getSeconds()}`}</span>
            </div>
        </div>
    );
}

export default TopBar;