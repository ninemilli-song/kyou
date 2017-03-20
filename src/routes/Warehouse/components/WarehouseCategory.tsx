/**
 * The Category of Warehouse
 */
import * as React from 'react';

import WarehouseCategoryTree from './WarehouseCategoryTree';

export default class WarehouseCategory extends React.Component<any, any> {
    render(): JSX.Element {
        return (
            <div>
                <WarehouseCategoryTree />
            </div>
        )
    }
}
