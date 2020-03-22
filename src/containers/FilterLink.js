import { connect} from 'react-redux'
import { setFilter } from '../actions'
import Filter from '../components/Filter'


const mapDispatchToProps = dispatch => ({
    filter : value => dispatch(setFilter(value))
})

export default connect(null, mapDispatchToProps)(Filter)