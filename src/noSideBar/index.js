import React, { PureComponent } from 'react';
import './index.css';

class NoSideBar extends PureComponent {
    componentDidMount() {
        const { generateHtmlAndCss } = this.props;
        generateHtmlAndCss && generateHtmlAndCss();
    }
    
    render() {
        return (
            <div className='ske-ns-root ske-ns-flex'>
            <div className='ske-ns-header ske-ns-flex'>
                <div className='ske-ns-filling ske-ns-brand'></div>
                <div className='ske-ns-filling ske-ns-topnav'></div>
            </div>
            <div className="ske-ns-flex ske-ns-body">
                <div className='ske-ns-menu ske-ns-flex'>
                    <div className='ske-ns-filling ske-ns-item'></div>
                    <div className='ske-ns-filling ske-ns-item'></div>
                    <div className='ske-ns-filling ske-ns-item'></div>
                    <div className='ske-ns-filling ske-ns-item'></div>
                    <div className='ske-ns-filling ske-ns-item'></div>
                </div>
                <div className='ske-ns-content ske-ns-filling'>
                </div>
            </div>
        </div>
        )
    }
}

export default NoSideBar;