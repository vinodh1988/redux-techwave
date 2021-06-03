import Second from '../../Second'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { MessageAction} from '../actions/MessageAction'

const mapStateToProps=(store)=>{
    return {data: store.first.message}
}

const mapActionToProps=(dispatch)=>{
    return new bindActionCreators({changeData: MessageAction},dispatch)
}

export const SecondHOC=connect(mapStateToProps,mapActionToProps)(Second);