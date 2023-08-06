import { ReactNode, forwardRef } from 'react';
import classnames from 'classnames';

import { cssClasses } from './constants';

type Span = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export type GridCellProps = {
    span?: Span;
    desktop?: Span;
    tablet?: Span;
    mobile?: Span;
    order?: Span;
    align?: 'top' | 'middle' | 'bottom';
    grid?: boolean;

    as?: 'div';
    className?: string;
    children?: ReactNode | ReactNode[];
};

const GridCell = forwardRef<HTMLDivElement, GridCellProps>(({
    span,
    desktop,
    tablet,
    mobile,
    order,
    align,
    grid = false,

    as: Component = 'div',
    className,
    children,
    ...props
}, ref) => {
    const classNames = classnames(className, cssClasses.CELL, {
        [`${cssClasses.CELL_SPAN}-${span}`]: span,
        [`${cssClasses.CELL_SPAN}-${desktop}-desktop`]: desktop,
        [`${cssClasses.CELL_SPAN}-${tablet}-tablet`]: tablet,
        [`${cssClasses.CELL_SPAN}-${mobile}-mobile`]: mobile,
        [`${cssClasses.CELL_ORDER}-${order}`]: order,
        [`${cssClasses.CELL_ALIGN}-${align}`]: align
    });

    return (
        <Component ref={ref} className={classNames} {...props}>
            {grid ?
                <div className={cssClasses.INNER}>
                    {children}
                </div>
                :
                children
            }
        </Component>
    );
});

GridCell.displayName = 'GridCell';

export default GridCell;