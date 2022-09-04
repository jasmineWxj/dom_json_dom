import React, { useEffect, useRef, useState } from 'react';
import './index.less';
import iphone from '@/img/images.png';
function Render(props: any, ref: any) {
    const { compon, esta, block } = props;
    const [clcck, useblcck] = useState(block);
    const [targeter, useTargeter] = useState(true);
    const numRef = useRef(-1);
    const [domlist, useDomlist] = useState(0);
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
        if (!targeter) return;
        useblcck([
            ...clcck,
            {
                key: compon.key,
                num: numRef.current + 1,
                childs: [],
            },
        ]);

        numRef.current += 1;
        e.preventDefault();
    };

    const ChildOnenter = (e: any) => {
        e.dataTransfer.dropEffect = 'move'; // 移动标识
    };

    const ChildOnover = (e: any) => {
        if (e.target.getAttribute('class') == 'box-rander') {
            useTargeter(false);
        }
        e.preventDefault();
    };

    const ChildOnleave = (e: any) => {
        e.dataTransfer.dropEffect = 'none'; // 移动标识
    };
    const ChildOndrop = (e: any, num: number) => {
        clcck[e.target.getAttribute('data-index')]['childs'].push({
            key: compon.key,
            num: numRef.current + 1,
            childs: [],
        });
        numRef.current += 1;
        console.log(numRef.current);
        useTargeter(true);
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
                        if (esta.componentMap[item.key].childer) {
                            return (
                                <div
                                    key={index}
                                    onDragEnter={(e) => ChildOnenter(e)}
                                    onDragOver={(e) => ChildOnover(e)}
                                    onDragLeave={(e) => ChildOnleave(e)}
                                    onDrop={(e) => ChildOndrop(e, item.num)}
                                >
                                    {esta.componentMap[item.key].render(item.childs, index)}
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
