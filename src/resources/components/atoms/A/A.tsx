import * as React from 'react';
import {Link} from 'react-router-dom';

type Props = {
    href: string;
    as?: string;
    alt?: string;
    style?: {};
    className?: string;
    children?: React.ReactNode;
    onClick?: Function;
};

/**
 * 路由超連結
 * fake react-route <Linkt to="/about"/>
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const A = (props: Props) => {
    const {
        href, as, alt, style, className, children, onClick,
    }: any = props;

    const params = {
        to: as === 'a' ? undefined : href,
        href: as === 'a' ? href : undefined,
        as,
        alt,
        style,
        className,
        onClick,
    };

    return (
    // @ts-ignore
        <Link {...params}>{children}</Link>
    );
};

A.defaultProps = {
    className: undefined,
    style: undefined,
    as: undefined,
    alt: undefined,
    children: '',
    onClick: undefined,
};

export default A;
