/**
 * View component
 */
import * as React from 'react';
import { Row, Col } from 'antd';

import WarehouseCategory from './WarehouseCategory';
import WarehouseMainArea from './WarehouseMainArea';

export default class Warehouse extends React.Component<any, any> {

    constructor (props, context) {
        super(props, context);
    }

    render(): JSX.Element {
        const { store, action } = this.props;

        const data = store.get('data');

        const warehouseList = data.get('warehouseList');
        const warehouseCategory = data.get('category');

        return (
            <div>
                <Row gutter={ 16 }>
                    <Col span={ 6 }>
                        <WarehouseCategory category={ warehouseCategory } />
                    </Col>
                    <Col span={ 18 }>
                        <WarehouseMainArea data={ warehouseList.toJS() }/>
                    </Col>
                </Row>
            </div>
        )
    }

    componentDidMount() {
        const { action } = this.props;

        action.getList();
        action.getCategory();
    }
}
