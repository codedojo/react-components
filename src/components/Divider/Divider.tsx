import {
    Divider as FluentDivider,
    type DividerProps as FluentDividerProps
} from '@fluentui/react-components';
import classnames from 'classnames';

export type DividerProps = FluentDividerProps;

export default function Divider({
    className,
    ...props
}: DividerProps) {
    return (
        <FluentDivider
            className={classnames(className, 'ui-Divider')}
            {...props}
        />
    );
}