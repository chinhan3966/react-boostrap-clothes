import { forwardRef } from "react";
import classnames from "classnames";
import { useTable } from "react-table";

import "./table.scss";

const Table = forwardRef(({ className, data, columns, ...props }, ref) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  // console.log("check data table :>>", data);
  return (
    <table
      ref={ref}
      cellSpacing="0"
      cellPadding="0"
      className={classnames([className, "table"])}
      {...getTableProps}
      {...props}
    >
      <thead>
        {headerGroups?.map((headerGroup, index) => (
          <tr key={index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup?.headers?.map((column, key) => (
              <th key={index} {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps}>
        {rows?.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={index} className="table__row">
              {row?.cells?.map((cell, index) => {
                return (
                  <td key={index} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});

export default Table;
