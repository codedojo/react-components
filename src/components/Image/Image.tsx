import {
    Image as FluentImage,
    ImageProps as FluentImageProps
} from '@fluentui/react-components';
import classnames from 'classnames';

export type ImageProps = FluentImageProps;

export default function Image({ className, ...props }: ImageProps) {
    const classNames = classnames(className, 'ui-Image');

    return (
        <FluentImage className={classNames} {...props} />
    );
}