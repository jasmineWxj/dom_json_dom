import React from 'react';
import './index.less';
function Material(props: any) {
    const { htmlProps, htmldata, getHtml } = props as any;
    // console.log(htmlProps.componentList);
    const arg = (e: any, cpmponent: any) => {
        getHtml(e, cpmponent);
    };
    return (
        <div className="material">
            {htmlProps.componentList.map((item: any, index: number) => {
                // console.log(item, index);
                return (
                    <div
                        className="material-list"
                        key={index}
                        draggable
                        onDragStart={(e) => {
                            arg(e, item);
                        }}
                    >
                        <span className="material-span">{item.label}</span>
                        <div>{item.preview()}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default Material;
