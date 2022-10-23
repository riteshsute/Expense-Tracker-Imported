const posts = [
    {title: 'Post One', body: 'This is Post One', createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is Post Two', createdAt: new Date().getTime()}
]

let intervalId;
function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}- created ${(new Date().getTime() - post.createdAt) / 1000} seconds ago</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject("error")
            }
        }, 1000);
    })
};

function deletePost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop())
            } else {
                reject('Error: Something Went Wrong');
            }
        }, 1000);
    })
}


function updateLastUserActivityTime(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            post.lastActivityTime = new Date().getTime();
            resolve(post.lastActivityTime)
        }, 1000);
    })
}

// function userUpdateThePost(updateLastUserActivityTime) {
//     Promise.all([createPost,updateLastUserActivityTime])
//     .then(([createPost, updateLastUserActivity]) => {
//         console.log(updateLastUserActivityTimeresolves)
//     });
// }


createPost({title: 'Post Three', body: 'This is Post Three', createdAt: new Date().getTime()})
.then(() => {
    getPosts
    deletePost().then(()=> {
        getPosts;
        deletePost().then(()=> {
            getPosts;
            deletePost().then(() => {
                getPosts()
                deletePost().then(() => {
                    console.log(posts)
                })
                .catch((err) => {
                    console.log('Inside catch block', err)
                })
            })
        })
    })
})
.catch(err => console.log(err))


