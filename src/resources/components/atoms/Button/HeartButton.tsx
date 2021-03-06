import React, {useState} from 'react';
import * as CSS from 'csstype';
import styled, {css} from 'styled-components';
import {media} from '@styled-bs-grid';
import px2vw from '@config/utils/getPx2vw';

type Props = {
    style?: CSS.Properties;
    className?: string;
    size?: number;
};

function HeartButton(props: Props) {

    const {className, style, size}: any = props;
    const [active, setActive] = useState(false);

    const effectCircleList = [
        'top',
        'rightTop',
        'right',
        'rightBottom',
        'leftBottom',
        'left',
        'leftTop',
    ];

    return (
        <HeartRoot style={style} className={className}>
            <HeartSvg size={size} viewBox="467 392 58 57" onClick={() => setActive(!active)}>
                <HeartContainer>
                    <HeartPath
                        d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                        active={active}
                    />
                    <Circle cx="29.5" cy="29.5" r="1.5" active={active}/>

                    {effectCircleList.map(position => (
                        <EffectCircle
                            key={position}
                            position={position}
                            active={active}
                        >
                            <FirstCircle active={active}/>
                            <SecondCircle active={active}/>
                        </EffectCircle>
                    ))}
                </HeartContainer>
            </HeartSvg>
        </HeartRoot>
    );

}

export default HeartButton;

HeartButton.defaultProps = {
    style: undefined,
    size: undefined,
    className: undefined,
};

const FirstCircle: any = styled.circle``;
const SecondCircle: any = styled.circle``;

const EffectCircle: any = styled.g`
    opacity: 0;
    
    ${(props: any) => props.active && css`  
        opacity:1; 
        transition:.1s all .3s;
    `}
    
    ${(props: any) => props.position === 'top' && css`
        transform: translate(24px);
        
        ${FirstCircle} {
            fill: #9FC7FA;
            cx: 2.5;
            cy: 3; 
            r: 2;
            
            ${props.active && css`
                transform:scale(0) translate(0, -30px);
                transform-origin:0 0 0;
                transition:.5s transform .3s;
            `};
        }
        ${SecondCircle} {
            fill: #9FC7FA;
            cx: 7.5;
            cy: 2; 
            r: 2;
            ${props.active && css`
                transform:scale(0) translate(10px, -50px);
                transform-origin:0 0 0;
                transition:1.5s transform .3s;
            `};
        }
    `};
    ${(props: any) => props.position === 'rightTop' && css`
        transform: translate(44px, 6px);
        
        ${FirstCircle} {
            fill: #CC8EF5;
            cx: 5;
            cy: 6; 
            r: 2;
            ${props.active && css`
                transform:scale(0) translate(30px, -15px); 
                transform-origin:0 0 0;
                transition:.5s transform .3s;
            `};
        }
        ${SecondCircle} {
            fill: #CC8EF5;
            cx: 2;
            cy: 2; 
            r: 2;
            ${props.active && css`
                transform:scale(0) translate(60px, -15px); 
                transform-origin:0 0 0;
                transition:1.5s transform .3s;
            `};
        }
    `};
    ${(props: any) => props.position === 'right' && css`
        transform: translate(52px, 28px);
        
        ${FirstCircle} {
            fill: #9CD8C3;
            cx: 2;
            cy: 7; 
            r: 2;
            ${props.active && css`
                transform:scale(0) translate(30px, 0px);
                transform-origin:0 0 0;
                transition:.5s transform .3s;
            `};
        }
        ${SecondCircle} {
            fill: #8CE8C3;
            cx: 4;
            cy: 2; 
            r: 2;
            ${props.active && css`
                transform:scale(0) translate(60px, 10px);
                transform-origin:0 0 0;
                transition:1.5s transform .3s;
            `};
        }
    `};
    ${(props: any) => props.position === 'rightBottom' && css`
        transform: translate(35px, 50px);
        
        ${FirstCircle} {
            fill: #F48EA7;
            cx: 6;
            cy: 5; 
            r: 2;
            ${props.active && css`
                transform:scale(0) translate(30px, 15px);
                transform-origin:0 0 0;
                transition:.5s transform .3s;
            `};
        }
        ${SecondCircle} {
            fill: #F48EA7;
            cx: 2;
            cy: 2; 
            r: 2;
            ${props.active && css`
                transform:scale(0) translate(40px, 50px);
                transform-origin:0 0 0;
                transition:1.5s transform .3s;
            `};
        }
    `};
    ${(props: any) => props.position === 'leftBottom' && css`
        transform: translate(14px, 50px);
        
        ${FirstCircle} {
            fill: #91D2FA;
            cx: 6;
            cy: 5; 
            r: 2;
            ${props.active && css`
                transform:scale(0) translate(-10px, 20px);
                transform-origin:0 0 0;
                transition:.5s transform .3s;
            `};
        }
        ${SecondCircle} {
            fill: #91D2FA;
            cx: 2;
            cy: 2; 
            r: 2;
            ${props.active && css`
                transform:scale(0) translate(-60px, 30px);
                transform-origin:0 0 0;
                transition:1.5s transform .3s;
            `};
        }
    `};
    ${(props: any) => props.position === 'left' && css`
        transform: translate(0, 28px);
        
        ${FirstCircle} {
            fill: #CC8EF5;
            cx: 2;
            cy: 7; 
            r: 2;
            ${props.active && css`
                transform:scale(0) translate(-30px, 0px);
                transform-origin:0 0 0;
                transition:.5s transform .3s;
            `};
        }
        ${SecondCircle} {
            fill: #91D2FA;
            cx: 3;
            cy: 2; 
            r: 2;
            ${props.active && css`
                transform:scale(0) translate(-60px, -5px);
                transform-origin:0 0 0;
                transition:1.5s transform .3s;
            `};
        }
    `};
    ${(props: any) => props.position === 'leftTop' && css`
        transform: translate(7px, 6px);
        
        ${FirstCircle} {
            fill: #9CD8C3;
            cx: 2;
            cy: 6; 
            r: 2;
            ${props.active && css`
                transform:scale(0) translate(-30px, -15px);
                transform-origin:0 0 0;
                transition:.5s transform .3s;
            `};
        }
        ${SecondCircle} {
            fill: #8CE8C3;
            cx: 5;
            cy: 2; 
            r: 2;
            ${props.active && css`
                transform:scale(0) translate(-55px, -30px);
                transform-origin:0 0 0;
                transition:1.5s transform .3s;
            `};
        }
    `};
`;

const Circle: any = styled.circle`
    transform-origin:29.5px 29.5px;
    fill: #E2264D; 
    opacity: 0;
    
    ${(props: any) => props.active && css`
        transition:all 2s;
        animation:animateCircle .3s linear forwards;
        opacity:1;
        
        @keyframes animateCircle{
          40%{transform:scale(10); opacity:1; fill:#DD4688;}
          55%{transform:scale(11); opacity:1; fill:#D46ABF;}
          65%{transform:scale(12); opacity:1; fill:#CC8EF5;}
          75%{transform:scale(13); opacity:1; fill:transparent; stroke:#CC8EF5; stroke-width:.5;}
          85%{transform:scale(17); opacity:1; fill:transparent; stroke:#CC8EF5; stroke-width:.2;}
          95%{transform:scale(18); opacity:1; fill:transparent; stroke:#CC8EF5; stroke-width:.1;}
          100%{transform:scale(19); opacity:1; fill:transparent; stroke:#CC8EF5; stroke-width:0;}
        }
    `};
    
    
`;

const HeartPath: any = styled.path`
    fill: #AAB8C2;
    transform-origin:center;
    animation:animateHeartOut .3s linear forwards;
    
    ${(props: any) => props.active && css`
        transform:scale(.2); 
        fill:#E2264D; 
        animation:animateHeart .3s linear forwards .25s;
    `};
    
    @keyframes animateHeart{
        0% {
            transform:scale(.2);
        }
        40% {
            transform:scale(1.2);
        }
        100% {
            transform:scale(1);
        }
    }
    
    @keyframes animateHeartOut{
        0% {
            transform:scale(1.4);
        }
        100% {
            transform:scale(1);
        }
    }
`;

const HeartContainer = styled.g`
     fill: none;
     fill-rule: evenodd; 
     transform: translate(467px, 392px);
`;

const HeartSvg: any = styled.svg`
    cursor:pointer;
    overflow:visible;
    width:${(props: any) => px2vw(props.size)};
    
    ${media.lg`
        width:${(props: any) => props.size}px;
    `}
`;

const HeartRoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;
