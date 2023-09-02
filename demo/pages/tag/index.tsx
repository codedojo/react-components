import React from 'react';

import { Flex, Tag } from '../../lib';
import { Page, Section } from '../../components';

export default function Tags() {
    return (
        <Page title="Tags">
            <Section title="Tag">
                <Flex gap="smallest">
                    <Tag content="Tag" />

                    <Tag content="Tag" icon="person" />

                    <Tag
                        appearance="outline"
                        primaryContent="Tag"
                        secondaryContent="Description"
                        icon="person"
                    />
                </Flex>
            </Section>

            <Section title="Tag Group">

            </Section>
        </Page>
    );
}