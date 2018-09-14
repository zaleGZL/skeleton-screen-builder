import React, { PureComponent } from 'react';

class HomePage extends PureComponent {
    render() {
        const { onClickEnterButton } = this.props;

        return (
            <div>
                <div className="skeleton">
                    <div className="skeleton-head skeleton-content"></div>
                    <div className="skeleton-body">
                        <div className="skeleton-title skeleton-content"></div>
                        <div className="skeleton-article skeleton-content"></div>
                    </div>
                </div>

                <p className='titile'>Skeleton Screen Builder</p>
                <h2 className='small-title'>骨架屏辅助制作工具</h2>

                <div className='opertion'>
                    <button className='button' onClick={onClickEnterButton}>
                        {'进入控制台(Enter键)'}
                    </button>
                </div>
            </div>
        );
    }
}

export default HomePage;