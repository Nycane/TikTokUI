import axios from "axios"
        console.log(process.env)
        export const request=axios.create({
            baseURL:process.env.REACT_APP_BASE_URL

        })
        export   const get= async (path,option)=>{
                console.log(path,option)
                const kq = await request.get(path,{params:{
                    ...option
                }})
                return kq.data
        }