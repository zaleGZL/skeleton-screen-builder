import React, { PureComponent } from 'react';
import './index.css';

class Center extends PureComponent {
    componentDidMount() {
        const { generateHtmlAndCss } = this.props;
        generateHtmlAndCss && generateHtmlAndCss();
    }
    
    render() {
        return (
            <div className='ske-ct-root ske-ct-flex'>
                <div className="ske-ct-container">
                    <div className="ske-ct-title ske-ct-fill"/>
                    <div className="ske-ct-subTitle ske-ct-fill"/>
                    <div className="ske-ct-main ske-ct-flex">
                        <div className="ske-ct-item ske-ct-fill" />
                        <div className="ske-ct-item ske-ct-fill" />
                        <div className="ske-ct-item ske-ct-fill" />
                        <div className="ske-ct-item ske-ct-fill" />
                        <div className="ske-ct-item ske-ct-fill" />
                        <div className="ske-ct-item ske-ct-fill" style={{ width: '60%' }} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Center;