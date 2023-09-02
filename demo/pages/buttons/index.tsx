import React from 'react';

import { Button } from '../../lib';

export default function Buttons() {
    return (
        <main>
            <Button content="Button" />

            <Button icon="star" />

            <Button content="Button" icon="star" />

            <Button content="Button" icon="star" iconPosition="after" />
        </main>
    );
}