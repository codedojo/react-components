import { forwardRef } from 'react';
import {
    Label as FluentLabel,
    type LabelProps as FluentLabelProps
} from '@fluentui/react-components';
import classnames from 'classnames';

export type LabelProps = FluentLabelProps & {
    className?: string;
};

const Label = forwardRef<HTMLLabelElement, LabelProps>(({
    className,
    ...props
}, ref) => {
    return (
        <FluentLabel
            ref={ref}
            className={classnames('ui-Label', className)}
            {...props}
        />
    );
});

export default Label;