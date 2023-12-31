import { ReactElement, ReactNode } from 'react';
import {
    Table as FluentTable,
    type TableProps,
    TableBody,
    type TableBodyProps,
    TableCell as FluentTableCell,
    type TableCellProps as FluentTableCellProps,
    TableCellActions,
    type TableCellActionsProps,
    TableCellLayout,
    type TableCellLayoutProps,
    TableHeader,
    type TableHeaderProps,
    TableHeaderCell,
    type TableHeaderCellProps,
    TableRow,
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
    type TableProps,
    TableHeader,
    type TableHeaderProps,
    TableHeaderCell,
    type TableHeaderCellProps,
    TableBody,
    type TableBodyProps,
    TableRow,
    type TableRowProps,
    TableCell,
    TableCellActions,
    type TableCellActionsProps,
    TableCellLayout,
    type TableCellLayoutProps
};