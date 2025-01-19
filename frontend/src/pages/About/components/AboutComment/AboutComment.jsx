import React from 'react';

const AboutComment = ({ imgSrc, title, paragraphs }) => {
    return (
        <div className='flex gap-[32px]'>
            <div>
                <img src={imgSrc} alt="About" />
            </div>
            <div>
                <h1>{title}</h1>
                <div>
                    {paragraphs.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutComment;
