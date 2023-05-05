import { dataPosts } from "./Data";
import Post from "./Post";

export default function Posts() {
    return(
        <div>
            {dataPosts.map(dataPost =>{
                return <Post dataPost = {dataPost}/>
            })}
        </div> 
    );
}