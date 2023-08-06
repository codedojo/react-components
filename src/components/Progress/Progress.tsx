import {
    ProgressBar as FluentProgressBar,
    type ProgressBarProps as FluentProgressBarProps
} from '@fluentui/react-components';
import classnames from 'classnames';

export type ProgressProps = FluentProgressBarProps;

export default function Progress({
    className,
    ...props
}: ProgressProps) {
    return (
        <FluentProgressBar
            className={classnames(className, 'ui-Progress')}
            {...props}
        />
    );
}