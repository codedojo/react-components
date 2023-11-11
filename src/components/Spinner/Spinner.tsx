import {
    Spinner as FluentSpinner,
    SpinnerProps as FluentSpinnerProps
} from '@fluentui/react-components';
import classnames from 'classnames';

export type SpinnerProps = FluentSpinnerProps;

export default function Spinner({ className, ...props }: SpinnerProps) {
    return (
        <FluentSpinner
            className={classnames(className, 'ui-Spinner')}
            {...props}
        />
    );
}