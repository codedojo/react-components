import React, { ReactNode } from 'react';

import { Heading } from '../../lib';

export default function Section({
    title,
    children,
    ...props
}: {
    title?: string;
    children: ReactNode | ReactNode[];
}) {
    return (
        <section {...props}>
            {title &&
                <Heading type="title3" content={title} />
            }

            {children}
        </section>
    );
}