import React from 'react';

import { Button, Dialog } from '../../lib';
import { Page, Section } from '../../components';

export default function DialogPage() {
    const [open, setOpen] = React.useState(false);

    return (
        <Page title="Dialog">
            <Section>
                <Button onClick={() => setOpen(true)}>Open Dialog</Button>

                <Dialog title="Dialog" open={open}>
                    Dialog Content
                </Dialog>
            </Section>
        </Page>
    );
}