import { ReactNode } from 'react';
import {
    AccordionHeader as FluentAccordionHeader,
    type AccordionHeaderProps as FluentAccordionHeaderProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import Icon from '../Icon/Icon';

export type AccordionHeaderProps = FluentAccordionHeaderProps & {
    content?: ReactNode;
    icon?: ReactNode;

    className?: string;
    children?: ReactNode;
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