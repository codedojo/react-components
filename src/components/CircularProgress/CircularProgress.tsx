import { forwardRef } from 'react';
import classnames from 'classnames';

import { strings, cssClasses, sizeProps } from './constants';

export type CircularProgressProps = {
    value?: number;
    size?: 'small' | 'medium' | 'large';

    className?: string;
};

const CircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>(({
    value = 0,
    size = 'medium',

    className,
    ...props
}, ref) => {
    const classNames = classnames(className, cssClasses.ROOT, {
        [`${cssClasses.ROOT}--${size}`]: size
    });

    const { viewBox, radius, strokeDasharray, strokeWidth } = sizeProps[size];
    const progress = value > 1 ? (value / 100) : Number(value);
    const cx = viewBox / 2, cy = viewBox / 2;
    const strokeDashoffset = (2 * Math.PI * radius) * (1 - progress);

    return (
        <div
            ref={ref}
            className={classNames}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={1}
            aria-valuenow={progress}
            {...props}
        >
            <div className={cssClasses.CONTAINER}>
                <svg className={cssClasses.CIRCLE_GRAPHIC} viewBox={`0 0 ${viewBox} ${viewBox}`} xmlns={strings.XMLNS}>
                    <circle className={cssClasses.TRACK} cx={cx} cy={cy} r={radius} strokeWidth={strokeWidth} />
                    <circle className={cssClasses.CIRCLE} cx={cx} cy={cy} r={radius} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} />
                </svg>
            </div>
        </div>
    );
});

export default CircularProgress;