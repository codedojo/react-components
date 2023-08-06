import { forwardRef } from 'react';
import {
    Textarea as FluentTextarea,
    type TextareaProps as FluentTextareaProps
} from '@fluentui/react-components';
import classnames from 'classnames';

export type TextareaProps = FluentTextareaProps;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
    return (
        <FluentTextarea
            ref={ref}
            className={classnames('ui-Textarea', className)}
            {...props}
        />
    );
});

Textarea.displayName = 'Textarea';

export default Textarea;