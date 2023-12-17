import  express  from "express";
import cors from "cors";
import axios from "axios";

const app = express();

//middlewares
// app.use(express.json());
// app.use(cors());

// 1. Fetch all the posts using https://jsonplaceholder.typicode.com/posts/
const fetchData = async () => {
    try {
        const postsResponse = await axios.get("https://jsonplaceholder.typicode.com/posts/");
        const allPosts = postsResponse.data;
        console.log("Posts", allPosts);


        // 2. Show the posts which has an userld of 8.
        const user8Posts = allPosts.filter(post => post.userId === 8);
        console.log("Posts with user ID is:", user8Posts);

        
        // 3. Fetch count for emails for postId 8.
        const post8CommentsResponse = await axios.get("https://jsonplaceholder.typicode.com/comments", {
            params: {
                postId: 8,
            },
        });

        const post8Comments = post8CommentsResponse.data;
        const emailCountForPost8 = post8Comments.reduce((count, comment) => {
            if(comment.email) {
                count++;
            }
            return count;
        }, 0);
    } catch (error) {
        console.log(error);
    }
};

fetchData();
  
app.listen(8000, () => {
    console.log("Server started");
});



// Simplest way to fetch API by using node-fetch=================================================================

// import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/posts/")
// .then((res) => res.json())
// .then((res) => console.log(res));









 

