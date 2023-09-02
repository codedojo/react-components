import {
    Tooltip as FluentTooltip,
    TooltipProps as FluentTooltipProps
} from '@fluentui/react-components';

export type TooltipProps = FluentTooltipProps;

const Tooltip = (props: TooltipProps) => {
    return (
        <FluentTooltip
            {...props}
        />
    );
};

export default Tooltip;