const axios = require('axios');
import { response } from 'express';

const sendData = () => {
    axios.post('http://localhost:5000/api/review',{
        name:'test',
        number: '08739',
        email: 'email@hotmail.com'
    })
    .then(res=> {
        console.log(re);
    });
    };


    let data = response.data;
    //         this.useState({post: data});
    //         console.log('Review has been recieved');
    //     }) 
    //     .catch(() => {
    //         console.log('Review has not been recieved');
    //     });
    // }
    
    //     reviewComment = (post) => {
    //     if (!post.length) return null;
    //    return post.map((posts, index) => (
    //         <div key={index}>
    //             <h2>{post.name}</h2>
    //             <p>{post.body}</p>
    //         </div>
    //     ));
    // };

    