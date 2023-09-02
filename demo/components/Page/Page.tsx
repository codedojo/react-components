import React, { ReactNode } from 'react';

import { Heading } from '../../lib';

export default function Page({
    title,
    children,
    ...props
}: {
    title?: string;
    children: ReactNode | ReactNode[];
}) {
    return (
        <main {...props}>
            {title &&
                <Heading type="title2" content={title} />
            }

            {children}
        </main>
    );
}