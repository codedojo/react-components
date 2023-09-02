import { forwardRef } from 'react';
import {
    Overflow as FluentOverflow,
    OverflowProps as FluentOverflowProps
} from '@fluentui/react-components';

export type OverflowProps = FluentOverflowProps;

const Overflow = forwardRef<HTMLInputElement, OverflowProps>((props, ref) => {
    return (
        <FluentOverflow
            ref={ref}
            {...props}
        />
    );
});

Overflow.displayName = 'Overflow';

export default Overflow;