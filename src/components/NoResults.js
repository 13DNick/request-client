import React from 'react';

const NoResults = (props) => {
    return(
        <div className="ui center aligned container text">
            <i aria-hidden="true" className="exclamation triangle massive icon" style={{color: 'red'}}></i>
            <div className="ui center aligned header">
                <div className="content">
                    No Requests
                </div>
            </div>
            <div className="ui blue animated button" onClick={() => props.refresh()}>
                <div className="visible content" style={{color: '#FFF'}}>
                    OK
                </div>
                <div className="hidden content" style={{color: '#FFF'}}>
                    <i aria-hidden="true" className="checkmark large icon"></i>
                </div>
            </div>
        </div>
    );
}

export default NoResults;