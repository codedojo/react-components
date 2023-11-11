import {
    Persona as FluentPersona,
    PersonaProps as FluentPersonaProps
} from '@fluentui/react-components';
import classnames from 'classnames';

export type PersonaProps = FluentPersonaProps;

export default function Persona({ className, ...props }: PersonaProps) {
    return (
        <FluentPersona
            className={classnames('ui-Persona', className)}
            {...props}
        />
    );
}