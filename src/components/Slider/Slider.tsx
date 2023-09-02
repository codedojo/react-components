import {
    Slider as FluentSlider,
    SliderProps as FluentSliderProps
} from '@fluentui/react-components';
import cn from 'classnames';

export type SliderProps = FluentSliderProps;

const Slider = ({
    className,
    ...props
}: SliderProps) => {
    return (
        <FluentSlider
            className={cn(className, 'ui-Slider')}
            {...props}
        />
    );
};

export default Slider;