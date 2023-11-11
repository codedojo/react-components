import type { ReactNode } from 'react';
import {
    AccordionHeader as FluentAccordionHeader,
    AccordionHeaderProps as FluentAccordionHeaderProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon from '../Icon/Icon';

export type AccordionHeaderProps = Omit<FluentAccordionHeaderProps, 'content'> & {
    content?: ReactNode;
    icon?: ReactNode;
};

export default function AccordionHeader({
    content,
    icon,

    className,
    children = content,
    ...props
}: AccordionHeaderProps) {
    return (
        <FluentAccordionHeader
            className={classnames(className, 'ui-Accordion__header')}
            icon={icon && <Icon name={icon as string} />}
            {...props}
        >
            {children}
        </FluentAccordionHeader>
    );
}