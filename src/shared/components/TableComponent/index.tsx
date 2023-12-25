import { useState } from "react";

import LoadingIndicator from "../LoadingIndicator";
import Pagination from "../PaginationComponent";
const PageSize = 10;

export function TableComponent<T>({
  heads,
  actions = [],
  useQuery,
}: TableProps<T>) {
  const ColumnsKeys = heads.map((item: HeadCell<T>) => item.id);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: rows = [], isLoading } = useQuery(currentPage);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  {heads.map((head, headKey) => {
                    return (
                      <th scope="col" className="px-6 py-2" key={headKey}>
                        {head.label}
                      </th>
                    );
                  })}
                  {actions.length > 0 && (
                    <th scope="col" className="px-6 py-2">
                      Action
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {rows.map((row: T, rowKey: number) => {
                  return (
                    <tr
                      key={rowKey}
                      className="border-b dark:border-neutral-500">
                      {ColumnsKeys.map((column: keyof T, columnKey) => {
                        return (
                          <td
                            className="whitespace-nowrap px-6 py-2"
                            key={columnKey}>
                            {row[column] as string}
                          </td>
                        );
                      })}
                      {actions.length > 0 &&
                        actions.map((item, i) => {
                          if (item.name === "Edit") {
                            return (
                              <td className="px-1 py-2" key={i}>
                                <button
                                  className="rounded-xl bg-green-500 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-green-600 active:bg-green-700"
                                  onClick={() => item.callback(row)}>
                                  {item.name}
                                </button>
                              </td>
                            );
                          }
                          if (item.name === "Delete") {
                            return (
                              <td className="px-1 py-2" key={i}>
                                <button className="rounded-xl bg-red-500 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200">
                                  {item.name}
                                </button>
                              </td>
                            );
                          }
                        })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end ">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={100}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default TableComponent;
