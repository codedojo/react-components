import { FC, ForwardRefExoticComponent, ReactNode, RefAttributes, forwardRef } from 'react';
import classnames from 'classnames';

import GridCell, { GridCellProps } from './GridCell';
import { cssClasses } from './constants';

export type GridProps = {
    align?: 'left' | 'right';
    fixedColumnWidth?: boolean;

    as?: 'div';
    children?: ReactNode | ReactNode[];
    className?: string;
};

type GridFC = ForwardRefExoticComponent<GridProps & RefAttributes<HTMLDivElement>> & {
    Cell?: FC<GridCellProps>;
};

const Grid: GridFC = forwardRef(({
    align,
    fixedColumnWidth = false,

    as: Component = 'div',
    className,
    children,
    ...props
}, ref) => {
    const classNames = classnames(className, cssClasses.ROOT, {
        [`${cssClasses.ALIGN}-${align}`]: align,
        [cssClasses.FIXED_COLUMN_WIDTH]: fixedColumnWidth
    });

    return (
        <Component ref={ref} className={classNames} {...props}>
            <div className={cssClasses.INNER}>{children}</div>
        </Component>
    );
});

Grid.Cell = GridCell;

export default Grid;