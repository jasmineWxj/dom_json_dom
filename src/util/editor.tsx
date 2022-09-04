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
        if (item.length >= 1) {
            console.log(item, '0000000');

            return (
                <div className="box-rander" data-num={item.num} data-index={index}>
                    {DOm(item, index)}
                </div>
            );
        }
        return <div className="box-rander" data-num={item.num} data-index={index}></div>;
    },
    key: 'box',
    childer: true,
});
const DOm = (item: any, indexs: any): any => {
    return item.map((item: any, index: number) => {
        return (
            <div key={index} className="aaa" data-num={item.num} data-index={indexs}>
                {registerConfig.componentMap[item.key].render(item?.childs, indexs)}
            </div>
        );
    });
};
