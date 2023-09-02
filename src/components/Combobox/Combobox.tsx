import { forwardRef } from 'react';
import {
    Combobox as FluentCombobox,
    ComboboxProps as FluentComboboxProps
} from '@fluentui/react-components';
import classnames from 'classnames';

export type ComboboxProps = FluentComboboxProps;

const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(({ className, ...props }, ref) => {
    return (
        <FluentCombobox
            ref={ref}
            className={classnames(className, 'ui-Combobox')}
            {...props}
        />
    );
});

Combobox.displayName = 'Combobox';

export default Combobox;