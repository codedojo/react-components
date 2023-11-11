import { useCallback } from 'react';
import {
    TabList as FluentTabList,
    TabListProps as FluentTabListProps,
    SelectTabData,
    SelectTabEvent,
    SelectTabEventHandler
} from '@fluentui/react-components';
import classnames from 'classnames';

import Tab, { TabProps } from './Tab';

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