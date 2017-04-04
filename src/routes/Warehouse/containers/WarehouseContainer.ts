/**
 * Wrap view component with state and action.
 */
 import { connect } from 'react-redux';

 import Warehouse from '../components/Warehouse';
 import { getList } from '../modules/warehouse';

 const mapActionCreators = (dispatch) => {
     return {
         action: {
             getList: () => {
                 dispatch(getList());
             },
         },
     }
 }

 const mapStateToProps = (state) => ({
     store: state.warehouse,
 })

 export default connect(mapStateToProps, mapActionCreators)(Warehouse);
