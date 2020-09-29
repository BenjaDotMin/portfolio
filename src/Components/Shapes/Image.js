import React from 'react';

function Image({ clickable }) {
    return (
        <div className={`ortho__image ${clickable ? "--clickable" : ""}`}>
            {Array.from({ length: 30 }, () =>
                <svg viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
            )}
        </div>
    )
}

export default Image
