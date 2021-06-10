export const initialState = {
    user: null,
    playlists: [],
    playing : false,
    item : null,
    token: "BQDJpxKOYjuAEo8DuXeYJy6GQOMwG7DebvL_BSO739Wk0_fHvvpY5nWaBkzcT3E24Vn9AUezkgSsz2DqfJTmR9Gp_u2WGgM-Yg5CgLU3U7V0OH42rah0fdFJfshnTIV2Q8VmCBg6esXglA5tLt3CAfQzRh0EfrtMuev3mLNS3VQ3pfpq"
}
const reducer = (state, action) => {
console.log(action);

switch(action.type) {
    case 'SET_USER':
        return{
            ...state,
            user:action.user
        }
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        } 
    case 'SET_PLAYLISTS':{
        return{
            ...state,
            playlists:action.playlists
        }
    }
    case 'SET_DISCOVER_wEEKLY':{
        return{
        ...state,
        discover_weekly: action.discover_weekly
        }
    }    
        default: return state;

}
}


export default reducer;