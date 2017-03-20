/**
 * View component
 */
import * as React from 'react';
import { Row, Col } from 'antd';

import WarehouseCategory from './WarehouseCategory';
import WarehouseMainArea from './WarehouseMainArea';

export default class Warehouse extends React.Component<any, any> {
    render(): JSX.Element {
        const props = this.props;

        console.log('Warehouse props: ', this.props);

        return (
            <div>
                <Row>
                    <Col span={ 6 }>
                        <WarehouseCategory />
                    </Col>
                    <Col span={ 18 }>
                        <WarehouseMainArea />
                    </Col>
                </Row>
            </div>
        )
    }

    componentDidMount() {
        const { getList } = this.props;

        getList();
    }
}
