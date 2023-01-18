fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => {
        const commentContainer = document.getElementById('comment-container');
        data.forEach(commentData => {
            const comment = document.createElement('div');
            comment.classList.add('comment');
            comment.innerHTML = `
                <h3>Post : ${commentData.postId}</h3>
                <h2>${commentData.name} : ${commentData.body}</h2>
                <h5>
                <span>Comment No. ${commentData.id}</span>
                <span class="right">User Email : ${commentData.email}</span>
                </h5>
            `;
            commentContainer.appendChild(comment);
        });
    })