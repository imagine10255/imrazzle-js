import React from 'react';
import styled, {css} from 'styled-components';
import type {ContainerProps} from './types';

import {themeName} from '../../config';
import media from '../../media';
import getDataName from './getDataName';

const generateMedia = (props: any) => {
    return Object.keys(props.theme[themeName].gridBreakpoints).map(sizeName => {
        return media[sizeName]`
                max-width: ${props.theme[themeName].gridBreakpoints[sizeName]}px;
            `;
    });
};

/**
 * Row Component
 */
const Container: any = styled.div.attrs((props: ContainerProps) => ({
    'data-grid': 'container',
    'data-debug': getDataName(props),
}))`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  
  ${(props: any) => css`
     padding-right: ${props.theme[themeName].gridGutterWidth}px;
     padding-left: ${props.theme[themeName].gridGutterWidth}px;
     
     
     ${!props.fluid && css`
        ${generateMedia(props)};
    `}
 `}
`;

export default (props: ContainerProps) => <Container {...props}/>;
