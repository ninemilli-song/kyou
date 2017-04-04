/**
 * The grid to show Warehouse list
 */
 import * as React from 'react';
 import { Table, Column } from 'antd';

 interface WarehouseGridProps {
     data: any,
 }

 export default class WarehouseGrid extends React.Component<WarehouseGridProps, any> {

     static defaultProps = {
         data: [],
     }

     render(): JSX.Element {
         const { data } = this.props;

         const columns = [{
            key: '1',
            title: '姓名',
            dataIndex: 'name',
            width: 150,
         }, {
            key: '2',
            title: '年龄',
            dataIndex: 'age',
            width: 150,
         }, {
            key: '3',
            title: '住址',
            dataIndex: 'address',
         }];

        //  const data = [];
        //  for (let i = 0; i < 100; i++) {
        //    data.push({
        //      key: i,
        //      name: `李大嘴${i}`,
        //      age: 32,
        //      address: `西湖区湖底公园${i}号`,
        //    });
        //  }

         return (
             <div>
                <Table
                    columns={ columns }
                    dataSource={ data }
                    pagination={{ pageSize: 50 }}
                    scroll={{ y: 300 }}
                />
             </div>
         )
     }
 }
