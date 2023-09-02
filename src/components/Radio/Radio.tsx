import {
    Radio as FluentRadio,
    RadioProps as FluentRadioProps
} from '@fluentui/react-components';
import cn from 'classnames';

export type RadioProps = FluentRadioProps;

const Radio = ({
    className,
    ...props
}: RadioProps) => {
    return (
        <FluentRadio
            className={cn(className, 'ui-Radio')}
            {...props}
        />
    );
};

export default Radio;