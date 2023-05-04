import { dataPosts } from "./Data"

import Post from "./Post"


export default function Posts() {
    return(
        <div>
            {dataPosts.map(i =>{
                return <Post props = {i}/>
            })}
        </div> 
    )
}