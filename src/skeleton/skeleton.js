import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import HomePage from './homePage.js';

import classNames from 'classnames';
import generateHtmlAndCss from './generateHtmlAndCss';

class Skeleton extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            showControlPanelModal: false, // 是否展示骨架屏制作控制台
            htmlContent: '', // 该骨架屏对应的 html
            cssContent: '', // 该骨架屏对应的 css
            byteCount: [0, 0, 0], // html、css、总字节数
            originHtmlContent: '', // 原始 html 内容
            originCssContent: '', // 原始 css 内容
            originByteCount: [0, 0, 0], // 原始 html、原始 css、原始总字节数
        };
    }

    componentDidMount() {
        // 监听按键按下的事件
        this.keyPressListener = window.addEventListener('keypress', (event) => {
            if (event.keyCode === 13) {
                this.setState((prevState) => ({
                    showControlPanelModal: !prevState.showControlPanelModal
                }));
            }
        }, false);
        // 监听点击 Modal 以外的区域时隐藏Modal
        this.clickBlankListener = document.body.addEventListener('click', (event) => {
            const target = event.target;
            const modalElement = this.modalElement;
            const { showControlPanelModal } = this.state;
            if (showControlPanelModal && target && modalElement && !modalElement.contains(target)) {
                this.setStateValue('showControlPanelModal', false);
            }
        }, true);
    }

    componentWillUnmount() {
        // 移除监听按键事件
        this.keyPressListener && window.removeEventListener('keypress', this.keyPressListener);
        // 移除监听隐藏Modal事件
        this.clickBlankListener && document.removeEventListener('click', this.clickBlankListener);
    }

    render() {
        const { showControlPanelModal, htmlContent, cssContent, byteCount, originHtmlContent, originCssContent, originByteCount } = this.state;
        const { skeletonPage, history, location } = this.props;
        const skeletonName = location.hash.replace('#', '');
        const modalClass = classNames({
            modal: true,
            'modal-hide': !showControlPanelModal
        });

        return (
            <div>
                <Switch>
                    <Route exact path="/" component={this._renderComponent} />
                </Switch>

                <div className={modalClass} ref={this.setModalRef}>
                    <div className="modal-content">
                        <span className="close" onClick={() => {
                            this.setStateValue('showControlPanelModal', false);
                        }}>&times;</span>
                        <p>手写骨架屏辅助工具</p>
                        <h2 className='modal-title'>选择骨架屏</h2>
                        <div className='tag-group'>
                            {
                                (skeletonPage || []).map((skeleton, index) => {
                                    return (
                                        <div className={`tag ${skeleton.name === skeletonName ? 'tag-select' : 'tag-no-select'}`}
                                            key={index} onClick={() => {
                                                history && history.push(`#${skeleton.name}`);
                                            }}>
                                            {skeleton.label}
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <h2 className='modal-title'>HTML & CSS</h2>
                        <div className='main-content'>
                            <div className='content-box'>
                                <p className='content-title'>HTML ({byteCount[0]} Bytes)</p>
                                <textarea className='content-textarea'
                                    value={htmlContent} readOnly />
                            </div>
                            <div className='content-box'>
                                <p className='content-title'>CSS ({byteCount[1]} Bytes)</p>
                                <textarea className='content-textarea'
                                    value={cssContent} readOnly />
                            </div>
                        </div>
                        <h2 className='modal-title'>总大小</h2>
                        <p className='modal-section'>{byteCount[2]} Bytes</p>
                        <h2 className='modal-title'>原始 HTML & 原始 CSS</h2>
                        <div className='main-content'>
                            <div className='content-box'>
                                <p className='content-title'>原始 HTML ({originByteCount[0]} Bytes)</p>
                                <textarea className='content-textarea'
                                    value={originHtmlContent} readOnly />
                            </div>
                            <div className='content-box'>
                                <p className='content-title'> 原始 CSS ({originByteCount[1]} Bytes)</p>
                                <textarea className='content-textarea'
                                    value={originCssContent} readOnly />
                            </div>
                        </div>
                        <h2 className='modal-title'>总大小</h2>
                        <p className='modal-section'>{[originByteCount[2]]} Bytes</p>
                    </div>
                </div>
            </div>
        );
    }

    setModalRef = (element) => {
        this.modalElement = element;
    }

    _renderComponent = (router) => {
        const { skeletonPage } = this.props;
        const skeletonName = router.location.hash.replace('#', '');
        const currentSkeletonPage = skeletonPage.find(skeleton => skeleton.name === skeletonName);
        const SkeletonComponent = currentSkeletonPage ? currentSkeletonPage.component : null;

        if (SkeletonComponent) {
            return (
                <div id='skeleton-screen'>
                    <SkeletonComponent generateHtmlAndCss={this.generateHtmlAndCss} />
                </div>
            );
        } else {
            return <HomePage onClickEnterButton={() => {
                this.setStateValue('showControlPanelModal', true);
            }} />;
        }
    }

    // 获取 HTML 和 CSS
    generateHtmlAndCss = () => {
        const { skeletonPage, location } = this.props;
        const skeletonName = location.hash.replace('#', '');

        if (!skeletonPage.find(skeleton => skeleton.name === skeletonName)) {
            return;
        }

        const cssPrefix = skeletonPage.find((skeleton) => (skeleton.name === skeletonName)).cssPrefix;
        const originalHtml = document.getElementById('skeleton-screen').innerHTML;

        const styles = document.head.getElementsByTagName('style');
        const styleElement = Array.prototype.find.call(styles, (style) => style.textContent.indexOf(cssPrefix) >= 0);
        const originalCss = styleElement ? styleElement.textContent : '';

        const { htmlContent, cssContent, byteCount, originHtmlContent, originCssContent, originByteCount } = generateHtmlAndCss(originalHtml, originalCss, cssPrefix);
        
        this.setState({
            htmlContent,
            cssContent,
            byteCount,
            originHtmlContent,
            originCssContent,
            originByteCount
        });
    }

    setStateValue = (name, value) => {
        this.setState({
            [name]: value
        });
    }
}

export default withRouter(Skeleton);
