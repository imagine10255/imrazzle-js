import * as React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { media } from '@styled-bs-grid';
import { getConfig } from '@config/utils/getConfig';
import px2vw from '@config/utils/getPx2vw';
import Icon from '@components/atoms/Icon';
const themeConfig = {
    default: {
        iconColor: getConfig('site.theme.primaryColor'),
        padding: '0',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        hoverBorderColor: '#000',
        hoverColor: '#fff',
        textStroke: 'unset',
        hoverTextStroke: '1px #000000',
        width: '60px',
        height: '60px',
        shape: '50%',
        background: '#fff',
        hoverBackground: 'radial-gradient(circle at 50% 50%, #ffc400, #ffa400 42%, #ff8800 106%)',
        fontSize: '20px',
    },
    square: {
        iconColor: '#fff',
        padding: '0',
        borderColor: '#000',
        hoverBorderColor: '#000',
        textStroke: '1px #000000',
        width: '100%',
        height: '40px',
        shape: '4px',
        background: 'radial-gradient(circle at 50% 50%, #ffc400, #ffa400 42%, #ff8800 106%)',
        fontSize: '15px',
    },
};
/**
 * PlayButton
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const PlayButton = (props) => {
    const { className, style, children, theme, type } = props;
    const activeTheme = get(themeConfig, theme, {});
    return (React.createElement(PlayButtonRoot, { className: className, style: style, type: type, baseTheme: activeTheme },
        children,
        React.createElement(CustomIcon, { code: "play", size: "20" })));
};
PlayButton.defaultProps = {
    style: undefined,
    theme: 'default',
    type: 'button',
    children: '',
    className: '',
};
export default PlayButton;
const CustomIcon = styled(Icon) `
    padding: 0 ${px2vw(5)};

    // 視覺置中
    transform: translateX(${px2vw(2)});

    ${media.lg `
        padding: 0 5px;
        transform: translateX(2px);
    `}
`;
const PlayButtonRoot = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: ${(props) => props.baseTheme.padding || `${px2vw(2)} ${px2vw(10)}`};

    transition:
        background-color .3s ease-out,
        color .3s ease-out,
        border-color .3s ease-out,
        box-shadow .3s ease-out,
        -webkit-text-stroke .3s ease-out,
        transform .3s ease-out;

    color: #fff;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.35);
    -webkit-text-stroke: ${(props) => props.baseTheme.textStroke};
    font-size: ${px2vw(16)};
    font-weight: bold;
    
    ${(props) => props.baseTheme.shape === '50%' && css `
        box-shadow: inset 0 -6px rgba(0, 0, 0, 0.3);
    `}

    border-color: ${(props) => props.baseTheme.borderColor};
    background: ${(props) => props.baseTheme.background};
    border-radius: ${(props) => props.baseTheme.shape};
    width: ${(props) => props.baseTheme.width};
    height: ${(props) => props.baseTheme.height};
    overflow: hidden;


    &:before {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 50%;
        background-color: rgba(255, 255, 255, 0.2);
        transition: background-color .3s ease-out;
        
        ${(props) => props.baseTheme.shape === '50%' && css `
            box-shadow: ${props.baseTheme.width} ${props.baseTheme.height} 0 0
        `}
    }
    

    ${CustomIcon} {
        i {
            transition: color .3s ease-out, border .3s ease-out;
            color: ${(props) => props.baseTheme.iconColor};

          &:before {
                font-size: ${(props) => props.baseTheme.fontSize};
            }
        }
    }

    &:hover {
        border-color: ${(props) => props.baseTheme.hoverBorderColor};
        ${CustomIcon} {
            i {
                color: ${(props) => props.baseTheme.hoverColor || props.baseTheme.iconColor};
            }
        }
        box-shadow: ${(props) => props.baseTheme.shape === '50%' ? '0 0 20px 0 rgba(0, 0, 0, 0.2), inset 0 -6px rgba(0, 0, 0, 0.39)' : '0 0 20px 0 rgba(0, 0, 0, 0.2), inset 0 -6px rgba(0, 0, 0, 0.3)'};
        transform: translateY(-5px);
        background: ${(props) => props.baseTheme.hoverBackground || props.baseTheme.background};
        -webkit-text-stroke: ${(props) => props.baseTheme.hoverTextStroke};

        &:before {
            background-color: rgba(255, 255, 255, 0.2);
        }
    }

    ${media.lg `
        font-size: 16px;
        padding: 0 10px;
    `}
`;
//# sourceMappingURL=PlayButton.js.map