// @flow
/**
 * Tooltips
 */
import * as React from 'react';
import styled, {css} from 'styled-components';
import px2vw from '@config/utils/getPx2vw';
import {media} from 'styled-bootstrap-grid/dist/index';

type Props = {
    style?: React.CSSProperties,
    children?: React.Node,
    className?: string,
    position?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft' | 'topCenter' | 'bottomCenter',
    isTopAnimate?: boolean,
    isVisibleTips?: boolean,
    isAnimation?: boolean,
};
type State = {};

class Tooltips extends React.PureComponent<Props, State> {
    static defaultProps = {
        style: undefined,
        className: undefined,
        position: 'topCenter',
        children: undefined,
        isTopAnimate: false,
        isVisibleTips: true,
        isAnimation: false,
    };

    render() {
        const {className, style, position, children, isTopAnimate, isVisibleTips, isAnimation} = this.props;

        return (
            <AnimationContainer
                isVisibleTips={isVisibleTips}
                isAnimation={isAnimation}
                isTopAnimate={isTopAnimate}
            >
                <TooltipsRoot
                    className={className}
                    style={style}
                    position={position}
                >
                    <TooltipsArrow position={position}/>
                    <Container>
                        {children}
                    </Container>
                </TooltipsRoot>
            </AnimationContainer>
        );
    }
}

export default Tooltips;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff4b4b;
    border-radius: 3px;
    padding: ${px2vw(5)} ${px2vw(65)};
    min-height: ${px2vw(40)};
    width: 100%;
    
    ${media.lg`
        padding: 5px 65px;
        min-height: 40px;
    `}
`;

const AnimationContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    
    // 定義動畫效果
    @keyframes slide-in-bottom {
        0% {
            transform: translateY(35px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes slide-out-bottom {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(35px);
            opacity: 0;
        }
    }

    @keyframes slide-in-top {
        0% {
            transform: translateY(-35px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out-top {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-35px);
            opacity: 0;
        }
    }
    
    // 預設顯不顯示
    opacity: ${props => props.isVisibleTips ? 1 : 0};
     
    ${props => props.isVisibleTips && props.isAnimation && css`
        animation: slide-in-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    `};
    
    ${props => !props.isVisibleTips && props.isAnimation && css`
        animation: slide-out-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    `};

    ${props => props.isVisibleTips && props.isAnimation && props.isTopAnimate && css`
        animation: slide-in-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    `};
    
    ${props => !props.isVisibleTips && props.isAnimation && props.isTopAnimate && css`
        animation: slide-out-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    `};
`;

const TooltipsRoot = styled.div`
    position: absolute;
    justify-content: center;
    border-radius: ${px2vw(2)};
    font-size: ${px2vw(12)};
    color: #fff;
    font-weight: bold;
    white-space: nowrap;
    box-shadow: ${px2vw(1)} ${px2vw(1)} ${px2vw(3)} rgba(0, 0, 0, 0.3);
       
    ${props => props.position === 'topCenter' && css `
        left: 50%;
        top: 0;
          
        ${TooltipsArrow}{
            left: 0;
            right: 0;
            margin: auto;
            bottom: -12px;
            padding-bottom: 4px;
        }
    `};   
    
    ${props => props.position === 'topRight' && css `
        right: 0;
        top: 0;
        transform: translateY(calc(-100% - 12px));

        ${TooltipsArrow}{
            right: ${px2vw(8)};
            bottom: ${px2vw(-8)};
            margin: auto;
        }
    `};
    
    ${props => props.position === 'topLeft' && css `
        left: 0;
        top: 0;
        transform: translateY(calc(-100% - 12px));
        
        ${TooltipsArrow}{
            left: ${px2vw(8)};
            bottom: -12px;
            padding-bottom: 4px;
            margin: auto;
        }
    `};
    
    
    ${props => props.position === 'bottomLeft' && css `
        bottom: 0;
        left: 0;
        transform: translateY(calc(100% + 12px)); 

        ${TooltipsArrow}{
            left: 8px;
            top: -8px;
            transform: rotate(180deg);
        }
    `};
    
    ${props => props.position === 'bottomCenter' && css `
        left: 50%;
        bottom: 0;
        transform: translate(-50%, calc(100% + 12px));
        
        ${TooltipsArrow}{
            left: 0;
            right: 0;
            top: -8px;
            margin: auto;
            transform: rotate(180deg);
        }
    `};
    
    ${props => props.position === 'bottomRight' && css `
        bottom: 0;
        right: 0;
        transform: translateY(calc(100% + 12px)); 

        ${TooltipsArrow}{
            right: 8px;
            top: -8px;
            transform: rotate(180deg);
        }
    `};
    
    ${media.lg`
        font-size: 14px;
        border-radius: 2px;
        
        ${props => props.position === 'topRight' && css `
            transform: translateY(-100%) translateY(-12px);
            
            ${TooltipsArrow}{
                right: 8px;
                bottom: -8px;
            }
        `};
         
        ${props => props.position === 'topCenter' && css `
            transform: translateX(-50%) translateY(-100%) translateY(-12px);
            
            ${TooltipsArrow}{
                left: 0;
                right: 0;
                margin: auto;
                bottom: -12px;
                padding-bottom: 4px;
            }
        `};
                
        ${props => props.position === 'topLeft' && css `
            transform: translateY(-100%) translateY(-12px);
            
            ${TooltipsArrow}{
                left: 8px;
            }
        `};
        
        
        ${props => props.position === 'bottomLeft' && css `
            transform: translateY(100%) translateY(12px); 
        `};
       
        ${props => props.position === 'bottomCenter' && css `
            transform: translateX(-50%) translateY(100%) translateY(12px);
        `};
        
        ${props => props.position === 'bottomRight' && css `
            transform: translateY(100%) translateY(12px); 
        `};
    `}
`;

const TooltipsArrow = styled.div`
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${px2vw(12)} ${px2vw(10)} 0;
    border-color: #ff4b4b transparent transparent ;
    
    ${media.lg`
        border-width: 12px 10px 0;
    `}
`;