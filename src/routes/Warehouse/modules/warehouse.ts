/**
 * Define reducer and action of Warehouse
 */
import * as Immutable from 'immutable';

// ------------------------------------
// Constants
// ------------------------------------
export const WAREHOUSE_LIST = 'WAREHOUSE_LIST';

// ------------------------------------
// Action
// ------------------------------------
export const getList = () => {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch({
                    type: WAREHOUSE_LIST,
                    data: mockWarehouseList,
                })
            }, 200)
        })
    }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [WAREHOUSE_LIST]: (state, action) => {
        return Object.assign({}, state, {
            data: {
                warehouse: action.data,
            }
        })
    }
}

// -------------------------------------
// Reducer
// -------------------------------------
const mockWarehouseList = [];
for (let i = 0; i < 100; i++) {
  mockWarehouseList.push({
    key: i,
    name: `李大嘴${i}`,
    age: 32,
    address: `西湖区湖底公园${i}号`,
  });
}

const initialState = Immutable.fromJS({
    ui: {

    },
    data: {
        warehouseList: [],
    },
});

export default function warehouseReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
