import { ReactNode } from 'react';
import {
    Accordion as FluentAccordion,
    AccordionItem,
    AccordionPanel,
    AccordionProps as FluentAccordionProps
} from '@fluentui/react-components';
import classnames from 'classnames';

import AccordionHeader from './AccordionHeader';

export type AccordionItemProps = {
    key: string;
    value: string;
    header: ReactNode;
    panel: ReactNode;
};

export type AccordionProps = FluentAccordionProps & {
    items?: AccordionItemProps[];
    className?: string;
    children?: ReactNode | ReactNode[];
};

function Accordion({
    items = [],

    className,
    children,
    ...props
}: AccordionProps) {
    return (
        <FluentAccordion className={classnames(className, 'ui-Accordion')} {...props}>
            {items.map((item, index) =>
                <AccordionItem key={item.key || index} value={item.value}>
                    <AccordionHeader>{item.header}</AccordionHeader>
                    <AccordionPanel>{item.panel}</AccordionPanel>
                </AccordionItem>
            )}
            {children}
        </FluentAccordion>
    );
}

Accordion.Header = AccordionHeader;
Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;

export {
    Accordion as default,
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel
};