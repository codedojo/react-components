import { type KeyboardEvent, type MouseEvent, useCallback } from 'react';
import {
    TagGroup as FluentTabGroup,
    TagGroupProps as FluentTagGroupProps
} from '@fluentui/react-tags-preview';
import classnames from 'classnames';

import Tag, { type TagProps } from './Tag';

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
    const handleDismiss = useCallback((
        event: MouseEvent | KeyboardEvent,
        data: { dismissedTagValue: string; }
    ) => {
        onDismiss?.(data.dismissedTagValue, event);
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