import { MouseEventHandler, ReactElement, ReactNode } from 'react';
import {
    Card as FluentCard,
    type CardProps as FluentCardProps,
    CardFooter,
    CardHeader as FluentCardHeader,
    type CardHeaderProps as FluentCardHeaderProps,
    CardPreview
} from '@fluentui/react-components';
import classnames from 'classnames';

export type CardProps = FluentCardProps & {
    interactive?: boolean;
};

const noopHandler: MouseEventHandler<HTMLDivElement> = () => { return; };

function Card({
    interactive,

    className,
    children,
    ...props
}: CardProps) {
    return (
        <FluentCard
            className={classnames(className, 'ui-Card')}
            onClick={interactive ? noopHandler : undefined}
            {...props}
        >
            {children}
        </FluentCard>
    );
}

export type CardHeaderProps = Merge<FluentCardHeaderProps, {
    title?: string | ReactElement;
    media?: FluentCardHeaderProps['image'];
}>;

function CardHeader({
    title,
    media,
    ...props
}: CardHeaderProps) {
    return (
        <FluentCardHeader
            header={title}
            image={media}
            {...props}
        />
    );
}

function CardBody({
    as: Tag = 'div',
    className,
    children,
    ...props
}: {
    as?: 'div' | 'a';
    href?: string;
    target?: string;
    className?: string;
    children?: ReactNode | ReactNode[];
}) {
    return (
        <Tag className={classnames('ui-CardBody', className)} {...props}>
            {children}
        </Tag>
    );
}

Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Preview = CardPreview;

export {
    Card as default,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardPreview
};