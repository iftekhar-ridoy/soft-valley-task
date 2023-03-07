import React, { useState } from 'react';

const ReadMoreReadLess = ({ readClass, readBtn, limit, children }) => {
    const text = children;
    const [isReadMoreShown, setReadMoreShown] = useState(false);

    const toggleBtn = () => {
        setReadMoreShown(prevState => !prevState)
    }

    return (
        <div className={readClass}>
            {
                isReadMoreShown ?
                    text : text.substr(0, limit)
            }
            <button onClick={toggleBtn} className={readBtn}>
                {
                    isReadMoreShown ?
                        '..Read Less'
                        :
                        '...Read More'
                }
            </button>
        </div>
    );
};

export default ReadMoreReadLess;