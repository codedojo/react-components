import { ReactNode } from 'react';
import {
    Option as FluentOption,
    type OptionProps as FluentOptionProps,
} from '@fluentui/react-components';
import classnames from 'classnames';

export type OptionProps = Omit<FluentOptionProps, 'content' | 'text'> & {
    content?: ReactNode;
    text?: string;
};

export default function Option({
    content = '',

    className,
    children = content,
    ...props
}: OptionProps) {
    return (
        <FluentOption
            className={classnames(className, 'ui-Option')}
            text={typeof content === 'string' ? (content as string) : ''}
            {...props}
        >
            {children}
        </FluentOption>
    );
}