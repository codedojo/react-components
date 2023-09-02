import {
    Portal as FluentPortal,
    PortalProps as FluentPortalProps
} from '@fluentui/react-components';

export type PortalProps = FluentPortalProps;

const Portal = (props: PortalProps) => {
    return (
        <FluentPortal
            {...props}
        />
    );
};

Portal.displayName = 'Portal';

export default Portal;