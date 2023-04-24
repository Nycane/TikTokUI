import * as request from '~/utils/request.js'
export  const searchService = async (debounce,type="less") =>{
let kq =  await request.get('users/search',{
    q:debounce,
    type
})
try {
  return kq.data
} catch (error) {
    console.log(error)
}
}
