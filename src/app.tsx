import React, { useRef, useState } from 'react';
import Header from './compontent/header';
import Material from './compontent/material';
import NewA from './compontent/render';
import Attr from './compontent/attr';
import { registerConfig } from './util/editor';
import data from './data.json';
function App() {
    const domRef: any = useRef();
    let currentComponent: any = null;
    const [esta, useEsta] = useState();
    const [component, useComponent] = useState();
    const [block, useBlck] = useState([]);

    const dragenter = (e: any) => {
        e.dataTransfer.dropEffect = 'move'; // 移动标识
    };
    const dragover = (e: any) => {
        e.preventDefault();
    };
    const dragleave = (e: any) => {
        e.dataTransfer.dropEffect = 'none'; // 移动标识
    };
    const drop = (e: any) => {
        console.log(domRef, 123);
        currentComponent = null;
    };
    const getHtml = (e: any, component: any) => {
        useEsta(e);
        useComponent(component);
        // dragenter 进入元素中 添加一个移动的标识
        // dragover 在目标元素经过，必阻止默认行为，否则不能出发drop
        // dragleave 离开元素的时候，需要添加一个禁用表示
        // drop 松手的时候根据拖拽的组件， 添加一个组件
        // console.log(domRef.current);
        domRef.current.addEventListener('dragenter', dragenter(e));
        // domRef.current.addEventListener('dragover', dragover(e));
        // domRef.current.addEventListener('dragleave', dragleave(e));
        // domRef.current.addEventListener('drop', drop(e));
        currentComponent = component;
    };
    return (
        <div className="box">
            <Header></Header>
            <div className="box-bottom">
                <Material
                    htmldata={data}
                    htmlProps={registerConfig}
                    getHtml={(e: any, component: any) => getHtml(e, component)}
                ></Material>
                <NewA ref={domRef} esta={registerConfig} compon={component} block={block}></NewA>
                <Attr></Attr>
            </div>
        </div>
    );
}

export default App;
