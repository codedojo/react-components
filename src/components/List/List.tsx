import { ForwardRefExoticComponent, forwardRef } from 'react';
import { Tree, type TreeProps } from '@fluentui/react-components/unstable';
import classnames from 'classnames';

import ListItem, { type ListItemProps } from './ListItem';

export type ListProps = TreeProps & {
    items?: ListItemProps[];
};

const List: ForwardRefExoticComponent<ListProps> & {
    Item?: typeof ListItem;
} = forwardRef<HTMLDivElement, ListProps>(({
    items,

    className,
    children,
    ...props
}, ref) => {
    const classNames = classnames('ui-List', className);

    return (
        <Tree ref={ref} className={classNames} {...props}>
            {items?.map((item, index) =>
                <ListItem key={item?.key || index} {...item} />
            )}

            {children}
        </Tree>
    );
});

List.displayName = 'List';

List.Item = ListItem;

export default List;