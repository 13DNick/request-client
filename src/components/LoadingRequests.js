import React from 'react';
import Link from './Link';

const LoadingRequests = () => {
    return(
        <div className="ui center aligned container text">
            <i aria-hidden="true" className="sync massive icon"></i>
            <div className="ui center aligned header">
                <div className="content">
                    Loading...
                </div>
            </div>
            <div className="ui blue animated button">
                <Link href="/">
                    <div className="visible content" style={{color: '#FFF'}}>
                        Go Back
                    </div>
                    <div className="hidden content" style={{color: '#FFF'}}>
                        <i aria-hidden="true" className="long arrow alternate left large icon"></i>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default LoadingRequests;