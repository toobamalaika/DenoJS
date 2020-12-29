import $,{render} from 'https://deno.land/x/a1@1.0/server.ts'
const client = await render('./api.html')
$({
   port:8080,
   rest:{
            '/':{
                    method:'GET',
                    code:async(req:any)=>{
                        return {body:client}
                        }
                }
        }
})