import axios from "axios"
        export const request=axios.create({
            baseURL:"https://tiktok.fullstack.edu.vn/api/"
        })
        export   const get= async (path,option)=>{
                console.log(path,option)
                const kq = await request.get(path,{params:{
                    ...option
                }})
                return kq.data
        }