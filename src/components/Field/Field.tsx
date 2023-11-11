import {
    Field as FluentField,
    FieldProps as FluentFieldProps
} from '@fluentui/react-components';
import classnames from 'classnames';

export type FieldProps = FluentFieldProps;

export default function Field({
    className,
    ...props
}: FieldProps) {
    return (
        <FluentField
            className={classnames(className, 'ui-Field')}
            {...props}
        />
    );
}