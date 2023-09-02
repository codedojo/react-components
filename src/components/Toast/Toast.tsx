import {
    ForwardRefExoticComponent,
    PropsWithoutRef,
    ReactNode,
    RefAttributes,
    forwardRef,
    useId,
    useImperativeHandle
} from 'react';
import {
    Toast as FluentToast,
    ToastProps as FluentToastProps,
    ToastBody,
    ToastBodyProps,
    ToastFooter,
    ToastTitle,
    ToastTitleProps,
    ToastTrigger,
    ToastTriggerProps,
    Toaster,
    ToasterProps,
    ToastIntent,
    useToastController
} from '@fluentui/react-components';
import classnames from 'classnames';

export type ToastProps = FluentToastProps & {
    title?: ReactNode;
    action?: ToastTitleProps['action'];
    media?: ToastTitleProps['media'];
    content?: ReactNode;
    description?: ToastBodyProps['subtitle'];
    actions?: ReactNode | ReactNode[];
    intent?: ToastIntent;
    dismissible?: boolean;
} & Pick<ToasterProps,
    'toasterId' |
    'offset' |
    'position' |
    'priority' |
    'limit' |
    'timeout' |
    'pauseOnHover' |
    'pauseOnWindowBlur' |
    'shortcuts'
>;

export type ToastRef = {
    show: () => void;
    hide: (toastId?: string) => void;
    hideAll: () => void;
};

// @ts-ignore
const Toast: ForwardRefExoticComponent<PropsWithoutRef<ToastProps> & RefAttributes<ToastRef>> & {
    Body: typeof ToastBody;
    Footer: typeof ToastFooter;
    Title: typeof ToastTitle;
    Trigger: typeof ToastTrigger;
} = forwardRef<ToastRef, ToastProps>(({
    title,
    media,
    action,
    content,
    description,
    actions,
    appearance,
    intent,
    dismissible,

    className,
    children,
    ...props
}, ref) => {
    const toasterId = useId();
    const toastId = useId();
    const {
        dispatchToast,
        dismissToast,
        dismissAllToasts
    } = useToastController(toasterId);

    useImperativeHandle(ref, () => ({
        show: (...args) => dispatchToast(
            <FluentToast
                className={classnames('ui-Toast', className)}
                appearance={appearance}
            >
                {title &&
                    <ToastTitle
                        media={media}
                        action={dismissible ?
                            <ToastTrigger>
                                {action as ToastTriggerProps['children']}
                            </ToastTrigger>
                            :
                            action
                        }
                    >
                        {title}
                    </ToastTitle>
                }

                {content &&
                    <ToastBody subtitle={description}>
                        {content}
                    </ToastBody>
                }

                {actions &&
                    <ToastFooter>
                        {actions}
                    </ToastFooter>
                }

                {children}
            </FluentToast>,
            { toastId, intent, ...args }
        ),
        hide: id => dismissToast(id || toastId),
        hideAll: dismissAllToasts
    }), [children, intent]);

    console.log('TOAST_ID', toastId);

    return (
        <Toaster
            toasterId={toasterId}
            {...props}
        />
    );
});

Toast.displayName = 'Toast';

Toast.Body = ToastBody;
Toast.Footer = ToastFooter;
Toast.Title = ToastTitle;
Toast.Trigger = ToastTrigger;

export {
    Toast as default,
    ToastBody,
    ToastFooter,
    ToastTitle
};