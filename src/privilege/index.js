import React, { PureComponent } from 'react';
import './index.css';

class Privilege extends PureComponent {
    componentDidMount() {
        const { generateHtmlAndCss } = this.props;
        generateHtmlAndCss && generateHtmlAndCss();
    }

    render() {
        return (
            <div className='ske-pm-root ske-pm-flex'>
                <div className='ske-pm-header ske-pm-flex'>
                    <div className='ske-pm-filling ske-pm-brand'></div>
                    <div className='ske-pm-filling ske-pm-topnav'></div>
                </div>
                <div className="ske-pm-flex">
                    <div className='ske-pm-menu ske-pm-flex'>
                        <div className='ske-pm-filling ske-pm-item'></div>
                        <div className='ske-pm-filling ske-pm-item'></div>
                        <div className='ske-pm-filling ske-pm-item'></div>
                    </div>
                    <div className='ske-pm-content ske-pm-flex'>
                        <div className='ske-pm-tab ske-pm-flex'>
                            <div className='ske-pm-tab-item ske-pm-filling'></div>
                            <div className='ske-pm-tab-item ske-pm-filling'></div>
                        </div>
                        <div className='ske-pm-bar ske-pm-flex'>
                            <div className='ske-pm-flex'>
                                <div className='ske-pm-search-input ske-pm-filling'></div>
                                <div className='ske-pm-search-input ske-pm-filling'></div>
                                <div className='ske-pm-search-input ske-pm-filling'></div>
                            </div>
                            <div className='ske-pm-create-button ske-pm-filling'></div>
                        </div>
                        <div className='ske-pm-list ske-pm-filling'></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Privilege;
