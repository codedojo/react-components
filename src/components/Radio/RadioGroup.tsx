import {
    RadioGroup as FluentRadioGroup,
    RadioGroupProps as FluentRadioGroupProps
} from '@fluentui/react-components';
import classnames from 'classnames';

export type RadioGroupProps = FluentRadioGroupProps;

export default function RadioGroup({
    className,
    ...props
}: RadioGroupProps) {
    return (
        <FluentRadioGroup
            className={classnames(className, 'ui-RadioGroup')}
            {...props}
        />
    );
}