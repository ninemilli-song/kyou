/**
 * Main area of Warehouse
 */
import * as React from 'react';

import WarehouseGrid from './WarehouseGrid';

interface WarehouseMainAreaProps {
    data: any,
}

export default class WarehouseMainArea extends React.Component<WarehouseMainAreaProps, any> {

    static defaultProps = {
        prefix: 'warehouseMainArea',
        data: [],
    }

    render(): JSX.Element {
        const { data } = this.props;

        return (
            <div>
                <WarehouseGrid data={ data } />
            </div>
        )
    }
}
