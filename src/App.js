import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Skeleton from './skeleton';
import Privilege from './privilege';
import OrderManagement from './orderManagement';
import CreateOrder from './createOrder';
import Editor from './edit';
import LeftMiddle from './leftMiddle';
import Center from './center';

const skeletonPage = [
    {
        name: 'privilege',
        label: '权限管理',
        cssPrefix: 'ske-pm-',
        component: Privilege
    }, {
        name: 'orderManagement',
        label: '订单管理',
        cssPrefix: 'ske-om-',
        component: OrderManagement
    }, {
        name: 'createOrder',
        label: '新建订单',
        cssPrefix: 'ske-co-',
        component: CreateOrder
    }, {
        name: 'edit',
        label: '编辑',
        cssPrefix: 'ske-ed-',
        component: Editor
    }, {
        name: 'leftMiddle',
        label: '左中布局',
        cssPrefix: 'ske-lm-',
        component: LeftMiddle
    }, {
        name: 'center',
        label: '居中布局',
        cssPrefix: 'ske-ct-',
        component: Center
    }];

class App extends Component {
    render() {
        return (
            <Router>
                <Skeleton skeletonPage={skeletonPage} />
            </Router>
        );
    }
}

export default App;

