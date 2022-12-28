import React from "react";

const Link = (props) => {
    const onClick = (e) => {
        if(e.metaKey || e.ctrlKey){
            return;
        }
        
        e.preventDefault();
        window.history.pushState({}, '', props.href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    
    
    return(
        <a href={props.href} className={props.className} onClick={onClick}>
            {props.children}
        </a>
    );
}

export default Link;