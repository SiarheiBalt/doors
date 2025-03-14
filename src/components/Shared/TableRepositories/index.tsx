import React from 'react';
import Table from 'rc-table';
import "./table.css"
import {ColumnsType, DefaultRecordType} from "rc-table/lib/interface";
import cs from "classnames";

const EmptyComponent: React.FC = () => {
  return <div className='emptyTable'></div>
}

type TableProps = {
  columns: ColumnsType<DefaultRecordType>,
  data: object[],
  customClass?: string,
  isShowHeader?: boolean
};

const TableRepositories: React.FC<TableProps> = ({
                                                   columns,
                                                   data,
                                                   customClass,
                                                   isShowHeader
                                                 }) => {
  const tableClass = cs( !data.length && 'emptyTable', customClass ? customClass : "table")

  return (
    <Table columns={columns} data={data}
           className={tableClass}
           showHeader={!!isShowHeader}
           emptyText={<EmptyComponent />}/>
  )
};

export default TableRepositories;



