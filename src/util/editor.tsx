import { Button } from 'antd';
import React from 'react';
import './index.less';
interface Config {
    label: string;
    preview: () => any;
    render: (item: any, index: any) => any;
    key: string;
    childer?: boolean;
}

function createEditorConfig() {
    const componentList: any = [];
    const componentMap: any = {};

    return {
        componentList,
        componentMap,
        register: (component: Config) => {
            componentList.push(component);
            componentMap[component.key] = component;
        },
    };
}

export const registerConfig = createEditorConfig();
registerConfig.register({
    label: '文本',
    preview: () => '预览文本',
    render: () => '渲染文本',
    key: 'text',
    childer: false,
});

registerConfig.register({
    label: '按钮',
    preview: () => <Button type="primary">Primary Button</Button>,
    render: () => <Button type="primary">Primary Button</Button>,
    key: 'button',
    childer: false,
});

registerConfig.register({
    label: '盒子',
    preview: () => <div className="box-preview"></div>,
    render: (item?: any, index?: any) => {
        console.log(item, 'pppp');

        if (item) {
            return <div className="box-rander">{registerConfig.componentMap[item.key].render()}</div>;
        }
        return <div className="box-rander"></div>;
    },
    key: 'box',
    childer: true,
});
