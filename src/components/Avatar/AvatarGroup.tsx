import {
    AvatarGroup as FluentAvatarGroup,
    AvatarGroupProps as FluentAvatarGroupProps
} from '@fluentui/react-components';
import classnames from 'classnames';

export type AvatarGroupProps = FluentAvatarGroupProps;

export default function AvatarGroup({
    className,
    ...props
}: AvatarGroupProps) {
    return (
        <FluentAvatarGroup
            className={classnames(className, 'ui-AvatarGroup')}
            {...props}
        />
    );
}