import * as actions from './authTypes';


export const addSymbol = data => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.BUY_START });
  try {
    const res = await firestore
      .collection('todos')
      .doc(userId)
      .get();
    console.log(res.data())
    const newSymbol = {
      id: new Date().valueOf(),
      symbol: data.symbol,
      quantity:data.quantity,
      price:data.price
    };
    if (!res.data()) {
      firestore
        .collection('todos')
        .doc(userId)
        .set({
          todos: [newSymbol],
        });
    } else {
      firestore
        .collection('todos')
        .doc(userId)
        .update({
          todos: [...res.data().todos, newSymbol],
        });
    }
    dispatch({ type: actions.BUY_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.BUY_FAIL, payload: err.message });
  }
};

export const deleteTrans = id => async(dispatch, getState, {getFirestore}) =>{
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({type:actions.DELETE_TRANS_START})
  try{
    const res = await firestore
      .collection('todos')
      .doc(userId)
      .get();
    
    const previousTrans = res.data().todos
    const newTrans = previousTrans.filter(todo=>todo.id !==id)
    await firestore.collection('todos').doc(userId).update({
      todos: newTrans
    })



    dispatch({type:actions.DELETE_TRANS_SUCCESS})
  }catch(err){
    dispatch({type: actions.DELETE_TRANS_FAIL, payload: err.message})
  }
}