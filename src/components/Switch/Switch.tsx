import {
    Switch as FluentSwitch,
    SwitchProps as FluentSwitchProps,
} from '@fluentui/react-components';
import classnames from 'classnames';

export type SwitchProps = FluentSwitchProps;

export default function Switch({
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