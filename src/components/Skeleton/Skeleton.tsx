import {
    Skeleton as FluentSkeleton,
    SkeletonProps as FluentSkeletonProps
} from '@fluentui/react-components';
import cn from 'classnames';

export type SkeletonProps = FluentSkeletonProps;

const Skeleton = ({
    className,
    ...props
}: SkeletonProps) => {
    return (
        <FluentSkeleton
            className={cn(className, 'ui-Skeleton')}
            {...props}
        />
    );
};

export default Skeleton;