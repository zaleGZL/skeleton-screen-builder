import React, { PureComponent } from 'react';
import './index.css';

class CreateOrder extends PureComponent {
    componentDidMount() {
        const { generateHtmlAndCss } = this.props;
        generateHtmlAndCss && generateHtmlAndCss();
    }

    render() {
        return (
            <div className='ske-co-root ske-co-flex'>
                <div className='ske-co-header ske-co-flex'>
                    <div className='ske-co-filling ske-co-brand'></div>
                    <div className='ske-co-flex'>
                        <div className='ske-co-filling ske-co-avatar'></div>
                        <div className='ske-co-filling ske-co-topnav-menu'></div>
                    </div>
                </div>
                <div className="ske-co-flex ske-co-body">
                    <div className='ske-co-menu ske-co-flex'>
                        <div className='ske-co-filling ske-co-item'></div>
                        <div className='ske-co-filling ske-co-sub-item'></div>
                        <div className='ske-co-filling ske-co-item ske-co-new-item'></div>
                        <div className='ske-co-filling ske-co-sub-item'></div>
                        <div className='ske-co-filling ske-co-sub-item'></div>
                        <div className='ske-co-filling ske-co-sub-item'></div>
                        <div className='ske-co-filling ske-co-sub-item'></div>
                        <div className='ske-co-filling ske-co-sub-item'></div>
                        <div className='ske-co-filling ske-co-sub-item'></div>
                    </div>
                    <div className='ske-co-content ske-co-flex'>
                        <div className='ske-co-filling ske-co-title'></div>
                        <div className='ske-co-filling ske-co-form'></div>
                        <div className='ske-co-filling ske-co-next-step'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateOrder;