import React, { PureComponent } from 'react';
import './index.css';

class SkeletonTemplate extends PureComponent {
    componentDidMount() {
        const { generateHtmlAndCss } = this.props;
        generateHtmlAndCss && generateHtmlAndCss();
    }
    
    render() {
        return (
            <div className='ske-st-root ske-st-flex'>
            <div className='ske-st-header ske-st-flex'>
                <div className='ske-st-filling ske-st-brand'></div>
                <div className='ske-st-filling ske-st-topnav'></div>
            </div>
            <div className="ske-st-flex ske-st-body">
                <div className='ske-st-menu ske-st-flex'>
                    <div className='ske-st-filling ske-st-item'></div>
                    <div className='ske-st-filling ske-st-item'></div>
                    <div className='ske-st-filling ske-st-item'></div>
                    <div className='ske-st-filling ske-st-item'></div>
                    <div className='ske-st-filling ske-st-item'></div>
                </div>
                <div className='ske-st-content ske-st-filling'>
                </div>
            </div>
        </div>
        )
    }
}

export default SkeletonTemplate;