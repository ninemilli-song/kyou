/**
 * Main area of Warehouse
 */
import * as React from 'react';

import WarehouseGrid from './WarehouseGrid';

export default class WarehouseMainArea extends React.Component<any, any> {
    render(): JSX.Element {
        return (
            <div>
                <WarehouseGrid />
            </div>
        )
    }
}
