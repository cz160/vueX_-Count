
//mutations是用来更改数据的，拥有很多的方法，这些方法都是用来更改state的
const mutations = {
    //键名为type 值为handler（state,payload）在大多数情况下载荷为一个对象
    'increment':  (state,{num=2}) => { // 让count自加
        state.count+=num
    },
    'randomChange':(state,{count})=>{
        state.count = (count===undefined)?state.count : count
    }
}
export default mutations