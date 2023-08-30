import { forwardRef } from 'react';
import {
    BreadcrumbDivider as FluentBreadcrumbDivider,
    BreadcrumbDividerProps as FluentBreadcrumbDividerProps
} from '@fluentui/react-breadcrumb-preview';
import classnames from 'classnames';

export type BreadcrumbDividerProps = FluentBreadcrumbDividerProps;

const BreadcrumbDivider = forwardRef<HTMLLIElement, BreadcrumbDividerProps>(({
    className,
    ...props
}, ref) => {
    return (
        <FluentBreadcrumbDivider
            ref={ref}
            className={classnames(className, 'ui-BreadcrumbDivider')}
            {...props}
        />
    );
});

BreadcrumbDivider.displayName = 'BreadcrumbDivider';

export default BreadcrumbDivider;