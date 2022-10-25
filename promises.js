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

// const Promise1 = Promise.resolve('hello world');
// const Promise2 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 1000, 'goodbye')
// );




const updateLastUserActivityTime = new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.createdAt = new Date().getTime();
            resolve(posts.createdAt)
        }, 1000);
    })

console.log(updateLastUserActivityTime)


// Promise.all([Promise1, Promise2]).then(values =>
//     console.log(values));

const updateTHIS = Promise.all([getPosts, updateLastUserActivityTime]).then((value1, value2) => {
        console.log(value1, value2)
    })
    .catch(err => console.log());

updateTHIS.then((t) => console.log(t))

createPost({title: 'Post Three', body: 'This is Post Three', createdAt: new Date().getTime()})
createPost({title: 'Post four', body: 'This is Post four', createdAt: new Date().getTime()})
.then(() => {
    (getPosts)
    deletePost().then(()=> {
        (getPosts());
        deletePost().then(()=> {
            (getPosts);
            deletePost().then(() => {
                (getPosts);
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
