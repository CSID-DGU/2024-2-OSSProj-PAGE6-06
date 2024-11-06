import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import * as S from './Styled'
export default function ProgressBar({children, value}) {
    const gradientTransform = `rotate(90)`;
    return (
        <S.ProgressBarContainer>
            <svg style={{ height: 0, width: 0}}>
            <defs>
            <linearGradient id={"progress"} gradientTransform={gradientTransform}>
                <stop offset="0%" stopColor={"#94A3B8"} />
                <stop offset="100%" stopColor={"#475569"} />
            </linearGradient>
            </defs>
        </svg>
            <S.ProgressBarContainer>
                <CircularProgressbar
                value={value}
                strokeWidth={3}
                styles={{
                    path: {
                    stroke: `url(#${"progress"})`,
                    height: "100%",
                    strokeLinecap: "round",
                    transition: "stroke-dashoffset 1s linear 0s",
                    },
                    trail: {
                    stroke: "white",
                    },
                }}
                />
                {children}
                
            </S.ProgressBarContainer>
        </S.ProgressBarContainer>
        
    );
}

