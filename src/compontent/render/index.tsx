import React from 'react';
import './index.less';
import iphone from '@/img/images.png';
function Render() {
    return (
        <div className="render">
            <div className="render-box" style={{ backgroundImage: iphone }}></div>
            {/* <img src={iphone} alt="" /> */}
        </div>
    );
}

export default Render;
