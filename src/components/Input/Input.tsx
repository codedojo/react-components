import { forwardRef } from 'react';
import {
    Input as FluentInput,
    type InputProps as FluentInputProps
} from '@fluentui/react-components';
import classnames from 'classnames';

export type InputProps = FluentInputProps;

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
    return (
        <FluentInput
            ref={ref}
            className={classnames('ui-Input', className)}
            {...props}
        />
    );
});

export default Input;