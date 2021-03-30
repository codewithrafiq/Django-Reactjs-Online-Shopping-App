export const initialState={
    profile:null
}

const reducer = (state,action)=>{
    console.log(action.type);
    switch(action.type){
        case 'PRO':
            return{
                ...state,
                profile:action.value
            }
    }
}


export default reducer;