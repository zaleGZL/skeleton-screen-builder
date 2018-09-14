import React, { PureComponent } from 'react';
import './index.css';

class OrderManagement extends PureComponent {
    componentDidMount() {
        const { generateHtmlAndCss } = this.props;
        generateHtmlAndCss && generateHtmlAndCss();
    }

    render() {
        return (
            <div className='ske-om-root ske-om-flex'>
                <div className='ske-om-header ske-om-flex'>
                    <div className='ske-om-filling ske-om-brand'></div>
                    <div className='ske-om-flex'>
                        <div className='ske-om-filling ske-om-avatar'></div>
                        <div className='ske-om-filling ske-om-right-menu'></div>
                    </div>
                </div>
                <div className="ske-om-flex ske-om-body">
                    <div className='ske-om-menu ske-om-flex'>
                        <div className='ske-om-filling ske-om-item'></div>
                        <div className='ske-om-filling ske-om-item'></div>
                        <div className='ske-om-filling ske-om-item'></div>
                    </div>
                    <div className='ske-om-content'>
                        <div className='ske-om-filling ske-om-tab'></div>
                        <div className='ske-om-tools ske-om-flex'>
                            <div className='ske-om-filling ske-om-operation'></div>
                            <div className='ske-om-filling ske-om-search'></div>
                        </div>
                        <div className='ske-om-filling ske-om-table'></div>
                        <div className='ske-om-filling ske-om-pagination'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderManagement;