import { dataPosts } from "./Data";
import Post from "./Post";

export default function Posts() {
    return(
        <div>
            {dataPosts.map((dataPost, index) =>{
                return <Post key = {index} dataPost = {dataPost}/>
            })};
        </div> 
    );
}