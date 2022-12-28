import {useEffect, useState} from 'react';


const Route = (props) => {
    
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);
    
    if(currentPath === props.path){
        return props.children;
    } else {
        return null;
    }
}

export default Route;