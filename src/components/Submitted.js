import React from 'react';
import Link from './Link';

const Submitted = (props) => {
    return(
        <div className="ui center aligned container text" style={{marginTop: '3em'}}>
            <i aria-hidden="true" className="check circle massive icon" style={{color: 'green'}}></i>
            <div className="ui center aligned header">
                <div className="content">Your request has been placed!</div>
                <br/>
                <div className="content">Request ID: {props.requestId}</div>
                <br/>
                <div className="content" style={{fontWeight:'normal'}}>
                    Date: {new Date().toLocaleString()}
                </div>
            </div>
            <div className="ui blue animated button" onClick={props.reset}>
                <Link href="/">
                    <div className="visible content" style={{color: '#FFF'}}>
                        Main Menu
                    </div>
                    <div className="hidden content" style={{color: '#FFF'}}>
                        <i aria-hidden="true" className="home icon"></i>
                    </div>
                </Link>
            </div>
            <div className="ui green animated button" onClick={props.reset}>
                <Link href="/new_request">
                    <div className="visible content" style={{color: '#FFF'}}>
                        New Request
                    </div>
                    <div className="hidden content" style={{color: '#FFF'}}>
                        <i aria-hidden="true" className="plus icon"></i>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Submitted;