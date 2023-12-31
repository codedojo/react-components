import {
    Popover as FluentPopover,
    PopoverProps as FluentPopoverProps,
    PopoverTrigger,
    PopoverSurface
} from '@fluentui/react-components';

export type PopoverProps = FluentPopoverProps;

export default function Popover(props: PopoverProps) {
    return (
        <FluentPopover
            {...props}
        />
    );
}

Popover.Trigger = PopoverTrigger;
Popover.Surface = PopoverSurface;

export { PopoverTrigger, PopoverSurface };