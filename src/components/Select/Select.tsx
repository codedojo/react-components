import { useCallback, useState } from 'react';
import { Dropdown, DropdownProps } from '@fluentui/react-components';
import classnames from 'classnames';

import type { ChangeEvent, ChangeEventData, SelectionEvents } from '../../types';

import Option, { OptionProps } from './Option';

type OptionOnSelectData = {
    optionValue: string | undefined;
    optionText: string | undefined;
    selectedOptions: string[];
};

export type SelectProps = Omit<DropdownProps, 'value' | 'options' | 'onChange'> & {
    value?: string | string[];
    options: OptionProps[];
    multiple?: boolean;
    onChange?: (event: ChangeEvent, data: ChangeEventData) => void;
};

export default function Select({
    name,
    value,
    options,
    multiple,
    multiselect = multiple,
    onChange,

    className,
    children,
    ...props
}: SelectProps) {
    const [inputValue, setInputValue] = useState(options.find(v => v.value === value)?.text);

    const handelOptionSelect: DropdownProps['onOptionSelect'] = useCallback((event: SelectionEvents, data: OptionOnSelectData) => {
        onChange?.(event as ChangeEvent, {
            value: data.optionValue
        });
        setInputValue(data.optionText);
    }, [onChange]);

    return (
        <Dropdown
            className={classnames(className, 'ui-Select')}
            name={name}
            value={inputValue}
            multiselect={multiselect}
            onOptionSelect={handelOptionSelect}
            {...props}
        >
            {options?.map(option =>
                <Option key={option.key} {...option} />
            )}

            {children}
        </Dropdown>
    );
}

Select.Option = Option;