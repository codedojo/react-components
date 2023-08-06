import { forwardRef } from 'react';
import {
    Checkbox as FluentCheckbox,
    type CheckboxProps as FluentCheckboxProps
} from '@fluentui/react-components';
import classnames from 'classnames';

export type CheckboxProps = FluentCheckboxProps & {};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => {
    return (
        <FluentCheckbox
            ref={ref}
            className={classnames(className, 'ui-Checkbox')}
            {...props}
        />
    );
});

export default Checkbox;