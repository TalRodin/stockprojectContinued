import React,{useState} from 'react'
import {connect} from 'react-redux'
import Button from '../components/UI/Button'
import Modal from '../components/UI/Modal'
import * as actions from '../store/actions'
import Message from '../components/UI/Message'

const DeleteTrans = ({show, close, symbol, deleteTrans, error, loading}) =>{
    console.log(close)
    return (
        <Modal opened={show} close={close}>
            {symbol.symbol}
            <div>
                <Button
                    contain
                    type='submit'
                    onClick={()=>deleteTrans(symbol.id)}
                    disabled={loading}
                    loading={loading ? 'Deleting...': null}>Delete</Button>
                <Button
                        onClick={close}
                        >
                            Cancel
                        </Button>
            </div>
            <div>
                <Message error show={error}>
                    {error}
                </Message>
            </div>
        </Modal>
    )
}

const mapStateToProps = ({symbols}) => ({
    error:symbols.deleteTrans.error,
    loading:symbols.deleteTrans.loading,
    
})
const mapDispatchToProps = {
    deleteTrans: actions.deleteTrans
}

export default connect(mapStateToProps,mapDispatchToProps)(DeleteTrans)