import './index.less';
import './common.less';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import App from './app';
// 热更新
// if (module && module.hot) {
//     module.hot.accept();
// }
module?.hot?.accept();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App></App>);
