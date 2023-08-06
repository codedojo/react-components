import { useCallback } from 'react';
import {
    TabList as FluentTabList,
    type TabListProps as FluentTabListProps,
    type SelectTabData,
    type SelectTabEvent,
    type SelectTabEventHandler
} from '@fluentui/react-components';
import classnames from 'classnames';

import Tab, { type TabProps } from './Tab';

export type TabsProps = Omit<FluentTabListProps, 'value' | 'onChange'> & {
    value?: unknown;
    items?: TabProps[];
    onValueChange?: (value: unknown) => void;
};

export type { SelectTabData, SelectTabEvent, SelectTabEventHandler };

export default function Tabs({
    value,
    defaultValue,
    items,
    onValueChange,

    className,
    children,
    ...props
}: TabsProps) {
    const handleTabSelect: SelectTabEventHandler = useCallback((event, data) => {
        onValueChange?.(data.value);
    }, [onValueChange]);

    return (
        <FluentTabList
            className={classnames(className, 'ui-Tabs')}
            selectedValue={value}
            defaultSelectedValue={defaultValue}
            onTabSelect={handleTabSelect}
            {...props}
        >
            {items?.map((item: TabProps) =>
                <Tab key={item.key} {...item} />
            )}

            {children}
        </FluentTabList>
    );
}