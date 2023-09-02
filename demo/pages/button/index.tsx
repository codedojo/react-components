import React from 'react';

import { Button } from '../../lib';
import { Page, Section } from '../../components';

export default function Buttons() {
    return (
        <Page title="Buttons">
            <Section>
                <Button content="Button" />

                <Button icon="star" />

                <Button content="Button" icon="star" />

                <Button content="Button" icon="star" iconPosition="after" />
            </Section>
        </Page>
    );
}