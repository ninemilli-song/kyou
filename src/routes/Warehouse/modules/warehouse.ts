/**
 * Define reducer and action of Warehouse
 */
import * as Immutable from 'immutable';
const Mock = require('mockjs');

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
        // return Object.assign({}, state, {
        //     data: {
        //         warehouseList: action.data,
        //     }
        // })
        return state.set('data', Immutable.fromJS({
            warehouseList: action.data,
        }));
    }
}

// -------------------------------------
// Reducer
// -------------------------------------

const mockWarehouseList = Mock.mock({
    'list|200': [{
        'key': '@increment()',
        // 往来单位编码
        'code': `Inventory-@increment`,
        // 往来单位名称
        'name': '@csentence(3, 18)',
        // 分类
        'category': `@pick(${[2,3,4,6,7,8]})`,
        // 备注
        'comment': `@csentence(30,100)`,
        // 创建时间
        'createDate': `@date()`,
        // 是否停用
        'stop': `@boolean()`,
    }]
}).list;

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
