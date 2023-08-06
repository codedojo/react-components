import { type ReactElement, forwardRef } from 'react';
import {
    TreeItem,
    TreeItemLayout,
    TreeItemPersonaLayout,
    type TreeItemProps,
    type TreeItemLayoutProps,
    type TreeItemPersonaLayoutProps
} from '@fluentui/react-components/unstable';
import classnames from 'classnames';

import Icon from '../Icon';

export type ListItemProps = Omit<TreeItemProps, 'as' | 'itemType' | 'content'> & Omit<TreeItemLayoutProps, 'as'> & Omit<TreeItemPersonaLayoutProps, 'as'> & {
    as?: string | React.FunctionComponent;
    itemType?: TreeItemProps['itemType'];
    content?: string | ReactElement;
    icon?: string | ReactElement;
    main?: string | ReactElement;
    aside?: string | ReactElement;
    to?: string;
    href?: string;
    target?: string;
    download?: boolean;
    active?: boolean;
};

const ListItem = forwardRef<HTMLDivElement, ListItemProps>(({
    as,
    media,
    icon,
    content,
    main = content,
    description,
    aside,
    iconBefore = icon,
    iconAfter,
    active,

    className,
    children = content,
    ...props
}, ref) => {
    const classNames = classnames('ui-ListItem', {
        'ui-ListItem--active': active
    }, className);

    return (
        <TreeItem
            // @ts-ignore
            as={as}
            ref={ref}
            className={classNames}
            itemType="leaf"
            {...props}
        >
            {(media || description) ?
                <TreeItemPersonaLayout
                    media={media}
                    main={main}
                    description={description}
                    aside={aside}
                />
                :
                <TreeItemLayout
                    main={main}
                    iconBefore={typeof iconBefore === 'string' ?
                        <Icon name={iconBefore} /> : iconBefore
                    }
                    iconAfter={typeof iconAfter === 'string' ?
                        <Icon name={iconAfter} /> : iconAfter
                    }
                    aside={aside}
                />
            }

            {children}
        </TreeItem>
    );
});

ListItem.displayName = 'ListItem';

export default ListItem;