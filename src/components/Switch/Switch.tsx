import {
    Switch as FluentSwitch,
    type SwitchProps as FluentSwitchProps,
} from '@fluentui/react-components';
import classnames from 'classnames';

export type SwitchProps = FluentSwitchProps;

export default function Switch({
    onChange,
    className,
    ...props
}: SwitchProps) {
    return (
        <FluentSwitch
            className={classnames(className, 'ui-Switch')}
            {...props}
        />
    );
}