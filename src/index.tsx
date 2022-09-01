import './index.less';
import './common.less';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './compontent/header';
import Material from './compontent/material';
import Render from './compontent/render';
import Attr from './compontent/attr';
// 热更新
// if (module && module.hot) {
//     module.hot.accept();
// }
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <div className="box">
            <Header></Header>
            <div className="box-bottom">
                <Material></Material>
                <Render></Render>
                <Attr></Attr>
            </div>
        </div>
    </React.StrictMode>,
);
