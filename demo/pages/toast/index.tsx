import React, { useRef } from 'react';

import { Button, Toast, ToastRef } from '../../lib';
import { Page } from '../../components';

export default function ToastPage() {
    const toastRef = useRef<ToastRef>(null);

    return (
        <Page title="Toast">
            <Button
                content="Show toast"
                onClick={() => toastRef.current?.show()}
            />

            <Button
                content="Hide toast"
                onClick={() => toastRef.current?.hide()}
            />

            <Toast
                ref={toastRef}
                title="Toast"
                content="Toast body"
                description="Toast description"
                intent="success"
                action={<Button content="Dismiss" />}
                actions={<Button content="Action 1" />}
                dismissible
            />
        </Page>
    );
}