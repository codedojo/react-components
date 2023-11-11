import { type KeyboardEvent, type MouseEvent, useCallback } from 'react';
import {
    TagGroup as FluentTabGroup,
    TagGroupProps as FluentTagGroupProps,
    TagDismissHandler
} from '@fluentui/react-components';
import classnames from 'classnames';

import Tag, { TagProps } from './Tag';

export type TagGroupProps = Omit<FluentTagGroupProps, 'onDismiss'> & {
    tags?: TagProps[];
    onDismiss?: (tagValue: string, event?: MouseEvent | KeyboardEvent) => void;
};

export default function TagGroup({
    tags,
    onDismiss,

    className,
    children,
    ...props
}: TagGroupProps) {
    const handleDismiss = useCallback<TagDismissHandler>((event, data) => {
        onDismiss?.(data.value, event);
    }, [onDismiss]);

    return (
        <FluentTabGroup
            className={classnames(className, 'ui-TabGroup')}
            onDismiss={handleDismiss}
            {...props}
        >
            {tags?.map((tag: TagProps) =>
                <Tag key={tag.key} {...tag} />
            )}

            {children}
        </FluentTabGroup>
    );
}