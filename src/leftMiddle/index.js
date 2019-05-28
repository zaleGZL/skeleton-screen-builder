import React, { PureComponent } from 'react';
import './index.css';

class LeftMiddle extends PureComponent {
    componentDidMount() {
        const { generateHtmlAndCss } = this.props;
        generateHtmlAndCss && generateHtmlAndCss();
    }

    render() {
        return (
            <div className="ske-lm-root">
                <div className="ske-lm-sidebar ske-lm-flex">
                    <div className="ske-lm-step ske-lm-fill" />
                    <div className="ske-lm-subStep ske-lm-fill" />
                    <div className="ske-lm-subStep ske-lm-fill" />
                    <div className="ske-lm-subStep ske-lm-fill" />
                    <div className="ske-lm-subStep ske-lm-fill" />
                </div>
                <div className="ske-lm-main-container">
                    <div className="ske-lm-main">
                        <div className="ske-lm-title ske-lm-fill" />
                        <div className="ske-lm-subTitle ske-lm-fill" />
                        <div className="ske-lm-section ske-lm-flex">
                            <div className="ske-lm-row ske-lm-fill" />
                            <div className="ske-lm-row ske-lm-fill" />
                            <div className="ske-lm-row ske-lm-fill" />
                            <div className="ske-lm-row ske-lm-fill" />
                            <div className="ske-lm-row ske-lm-fill" />
                            <div className="ske-lm-row ske-lm-fill" style={{ width: '60%' }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftMiddle;