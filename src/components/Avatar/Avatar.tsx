import { ReactNode } from 'react';
import {
    Avatar as FluentAvatar,
    type AvatarProps as FluentAvatarProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon from '../Icon';

const AvatarSizeMap = {
    small: 24,
    medium: 32,
    large: 48
};

export type AvatarProps = Omit<FluentAvatarProps, 'icon' | 'image' | 'size'> & {
    icon?: ReactNode;
    image?: string | FluentAvatarProps['image'];
    size?: 'small' | 'medium' | 'large' | FluentAvatarProps['size'];
};

export default function Avatar({
    icon,
    image,
    size,

    className,
    ...props
}: AvatarProps) {
    return (
        <FluentAvatar
            className={classnames(className, 'ui-Avatar')}
            icon={icon ? <Icon name={icon as string} /> : undefined}
            image={typeof image === 'string' ? { src: image } : image}
            size={typeof size === 'string' ? AvatarSizeMap[size] as FluentAvatarProps['size'] : size}
            {...props}
        />
    );
}