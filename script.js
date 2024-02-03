
const username = "Joanne Graham";
const userhandle = "@joanne123";

const submitPostBtn = document.querySelector('.submit-post-btn');



submitPostBtn.addEventListener('click',() => {
    console.log("ok");
    const textarea = document.querySelector('.write-post textarea');
    if(textarea.value!=''){
        const content = textarea.value;
        textarea.value = '';
        let feed = document.createElement('div');
        feed.className = 'feed';
        feed.innerHTML = `
                    <div class="profile-img-cont">
                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="" class="profile-pic">
                    </div>
                    <div class="feed-detail">
                        <div class="feed-heading">
                            <div class="user">
                                <h4 class="username">${username}</h4>
                                <p class="userhandle">${userhandle}</p>
                            </div>
                            <div class="options">
                                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="delete" class="delete-btn">
                                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="edit" class="edit-btn">
                            </div>
                        </div>
                        <div class="feed-content">
                            <p>${content}</p>
                        </div>
                        <div class="feature">
                            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="comment" class="comment-btn">
                            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="like" class="like-btn">
                        </div>
                        <div class="edit-options">
                            <button class="cancel-btn">
                                Cancel
                            </button>
                            <button class="post-btn">
                                Post
                            </button>
                        </div>
                        <div class="feed-cont">
                        <div class="feed-comments-cont">
                            <div class="comment-prompt">
                                <div class="feed-heading">
                                    <div class="comment-post-cont">
                                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="" class="profile-pic">
                                        <textarea name="post" id="post" cols="30" rows="5" class="comment-post-text" placeholder="Type your thoughts here..."></textarea>
                                    </div>
                                </div>
                                <div class="comment-options">
                                    <button class="comment-post-btn">
                                        Post
                                    </button>
                                </div>      
                            </div>
                        </div>        
                    </div>
        `
        
        const editPostBtn = feed.querySelector('.edit-btn');
        editPostBtn.addEventListener('click', (e)=>{
            console.log("okme");
            feed.querySelector('.feed-content p').contentEditable = 'true';
            feed.querySelector('.feature').style.display = 'none';
            feed.querySelector('.edit-options').style.display = 'block';       
            
            let content = feed.querySelector('.feed-content p').innerText;
            console.log(content);
            const cancelBtn = feed.querySelector('.cancel-btn');
            cancelBtn.addEventListener('click', (e)=>{
                feed.querySelector('.feed-content p').innerText = content;
                feed.querySelector('.feed-content p').contentEditable = 'false';
                feed.querySelector('.feature').style.display = 'block';
                feed.querySelector('.edit-options').style.display = 'none';   
            });

            const postBtn = feed.querySelector('.post-btn');
            postBtn.addEventListener('click', (e)=>{
                feed.querySelector('.feed-content p').contentEditable = 'false';
                feed.querySelector('.feature').style.display = 'block';
                feed.querySelector('.edit-options').style.display = 'none'; 
            }); 
        });

        const deleteBtn = feed.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', (e)=>{
            document.querySelector('.feed-cont').removeChild(feed);
        });

        const commentBtn = feed.querySelector('.comment-btn');
        const commentPrompt = feed.querySelector('.comment-prompt');
        commentBtn.addEventListener('click',(e)=>{
            if (commentPrompt.style.display ==='none')
                commentPrompt.style.display = 'block';
            else 
                commentPrompt.style.display = 'none';
        });

        const commentPost = feed.querySelector('.comment-post-btn');
        commentPost.addEventListener('click', (e)=>{
            const commentContent = feed.querySelector('.comment-post-text');
            if (commentContent.value != ''){
                let feedComment = document.createElement('div');
                feedComment.className = 'feed-comments';
                feedComment.innerHTML = `
                    <div class="feed-detail">
                        <div class="feed-heading">
                            <div class="user">
                                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="" class="profile-pic">
                                <p class="userhandle">${userhandle}</p>
                            </div>
                            <div class="options">
                                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="delete" class="delete-btn">
                                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="edit" class="edit-btn">
                            </div>
                        </div>
                        <div class="feed-content">
                            <p>${commentContent.value}</p>
                        </div>
                        <div class="feature">
                            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="like" class="like-btn">
                        </div>
                        <div class="edit-options">
                            <button class="cancel-btn">
                                Cancel
                            </button>
                            <button class="post-btn">
                                Post
                            </button>
                        </div>
                    </div>
                `
                feed.querySelector('.feed-comments-cont').appendChild(feedComment);
                commentContent.value = "";
            }
        });

        const likeBtn = feed.querySelector('.like-btn');
        likeBtn.addEventListener('click',(e)=>{
            if (likeBtn.classList.contains('active')){
                likeBtn.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
            }
            else{
                likeBtn.src= "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
            }
            likeBtn.classList.toggle('active');
        });


        document.querySelector('.feed-cont').appendChild(feed);
    }
});