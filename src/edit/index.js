import React, { PureComponent } from 'react';
import './index.css';

class Edit extends PureComponent {
    componentDidMount() {
        const { generateHtmlAndCss } = this.props;
        generateHtmlAndCss && generateHtmlAndCss();
    }
    
    render() {
        return (
            <div className='ske-ed-root ske-ed-flex'>
                <div className="ske-ed-container">
                    <div className="ske-ed-title ske-ed-filling"/>
                    <div className="ske-ed-subTitle ske-ed-filling"/>
                    <div className="ske-ed-main ske-ed-flex">
                        <div className="ske-ed-item ske-ed-filling" />
                        <div className="ske-ed-item ske-ed-filling" />
                        <div className="ske-ed-item ske-ed-filling" />
                        <div className="ske-ed-item ske-ed-filling" />
                        <div className="ske-ed-item ske-ed-filling" />
                        <div className="ske-ed-item ske-ed-filling" style={{ width: '45%' }} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Edit;
