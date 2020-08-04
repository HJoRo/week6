const website = document.querySelector('#website');

const posts = [
    {title: 'Title #1', body: 'Post body #1'},
    {title: 'Title #2', body: 'Post body #2'},
];

function getPosts() {
    setTimeout(() => {
        let output = "";
    for(const post of posts) {
        output += `<li>${post.title}: ${post.body}</li>`;
    }
    website.innerHTML = output;
    }, 2000)
}

function createPost(title, body) {
    setTimeout(() => {
        posts.push({ title, body });
    }, 2000);
    
};

createPost("title #3", "body #3");
getPosts();
console.log(posts);