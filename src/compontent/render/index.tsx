import React, { useRef, useState } from 'react';
import './index.less';
import iphone from '@/img/images.png';
function Render(props: any, ref: any) {
    const { compon, esta, block } = props;
    const [clcck, useblcck] = useState(block);
    const [num, useNum] = useState(0);
    const dragenter = (e: any) => {
        e.dataTransfer.dropEffect = 'move'; // 移动标识
    };
    const onDragOver = (e: any) => {
        e.preventDefault();
    };

    const onDragLeave = (e: any) => {
        e.dataTransfer.dropEffect = 'none'; // 移动标识
    };

    const onDrop = (e: any) => {
        useblcck([
            ...clcck,
            {
                key: compon.key,
                num: num + 1,
                child: {
                    key: 'text',
                    num: num + 1,
                },
            },
        ]);
        useNum(num + 1);
        console.log(esta.componentMap);
    };

    const ChildOnenter = () => {
        console.log(111);
    };

    const ChildOnover = () => {
        console.log(111);
    };

    const ChildOnleave = () => {
        console.log(111);
    };

    const ChildOndrop = () => {
        // console.log(clcck, 'clcck');
    };

    return (
        <div className="render">
            <div className="render-con">
                <div
                    className="render-box"
                    ref={ref}
                    onDragEnter={(e) => dragenter(e)}
                    onDragOver={(e) => onDragOver(e)}
                    onDragLeave={(e) => onDragLeave(e)}
                    onDrop={(e) => onDrop(e)}
                >
                    {clcck.map((item: any, index: number) => {
                        // console.log(item, 'item');
                        // console.log(esta.componentMap[item.key], 'itemkey');
                        if (esta.componentMap[item.key].childer) {
                            return (
                                <div
                                    key={index}
                                    onDragEnter={ChildOnenter}
                                    onDragOver={ChildOnover}
                                    onDragLeave={ChildOnleave}
                                    onDrop={ChildOndrop}
                                >
                                    {esta.componentMap[item.key].render(item.child, index)}
                                </div>
                            );
                        }
                        return <div key={index}>{esta.componentMap[item.key].render()}</div>;
                    })}
                </div>
                <img src={iphone} alt="" />
            </div>
        </div>
    );
}
const NewA = React.forwardRef(Render);

export default NewA;
