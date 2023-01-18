fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(post => {
        const container = document.getElementById('post-container');
        post.forEach(post => {
            const postContainer = document.createElement('div');
            postContainer.classList.add('post');
            postContainer.innerHTML = `
                <h5>Post-${post.id}</h5>
                <h4>Title : ${post.title}</h4>
                <p>Description : ${post.body}</p>
                <h6>Written By : User-${post.userId}</h6>
            `;
            container.appendChild(postContainer);
        });
    })
