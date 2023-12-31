import { forwardRef } from 'react';
import {
    Label as FluentLabel,
    LabelProps as FluentLabelProps
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

Label.displayName = 'Label';

export default Label;