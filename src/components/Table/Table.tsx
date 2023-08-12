import { ReactElement, ReactNode } from 'react';
import {
    Table as FluentTable,
    TableBody,
    TableCell as FluentTableCell,
    TableCellActions,
    TableCellLayout,
    TableHeader,
    TableHeaderCell,
    TableRow,
    type TableProps,
    type TableBodyProps,
    type TableCellProps as FluentTableCellProps,
    type TableCellActionsProps,
    type TableCellLayoutProps,
    type TableHeaderProps,
    type TableHeaderCellProps,
    type TableRowProps
} from '@fluentui/react-components';
import classnames from 'classnames';

function Table({ className, ...props }: TableProps) {
    return (
        <FluentTable
            className={classnames(className, 'ui-Table')}
            {...props}
        />
    );
}

export type TableCellProps = Omit<FluentTableCellProps, 'content'> & {
    media?: TableCellLayoutProps['media'];
    content?: ReactNode;
    actions?: ReactElement | ReactElement[];
};

function TableCell({
    media,
    content,
    actions,

    children = content,
    ...props
}: TableCellProps) {
    return (
        <FluentTableCell {...props}>
            <TableCellLayout media={media}>{children}</TableCellLayout>

            {actions &&
                <TableCellActions>
                    {actions}
                </TableCellActions>
            }
        </FluentTableCell>
    );
}

Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.CellLayout = TableCellLayout;

export {
    Table as default,
    Table,
    TableProps,
    TableHeader,
    TableHeaderProps,
    TableHeaderCell,
    TableHeaderCellProps,
    TableBody,
    TableBodyProps,
    TableRow,
    TableRowProps,
    TableCell,
    TableCellActions,
    TableCellActionsProps,
    TableCellLayout,
    TableCellLayoutProps
};