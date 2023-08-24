const TweetComponent = (tweet) => {


    return(`
        <div class="wd-post_container">
            <div class="wd-B__image">
                <img class="wd-B__profile-img" src=${tweet.profileImg}>
            </div>
            <div class="wd-mid-segment-container">
                <div class="wd-C_container">
                    <div class="wd-C__profile-info">
                        <h4 class="wd-C__profile-name">${tweet.profileName} <i class="fas fa-check-circle" aria-hidden="true"></i></h3> 
                        <h4 class="wd-C__handle-name">${tweet.handleName}</h4>
                        <h4 class="wd-C__handle-name">&nbsp;<span class="wd-dot">&#183;</span>&nbsp;${tweet.date}</h4>
                    </div>
                    <div class="wd-C__options">
                        ...
                    </div>
                </div>
                <div class="wd-D__container">
                    <div class="wd-D__text">
                        <p>
                            ${tweet.content}
                        </p>  
                    </div>
                </div>
                <div class="wd-E-F__container" id="image-info">
                    <div class="wd-E__image">
                        <img src=${tweet.postImg} width="100%"/>
                    </div>
                    <div class="wd-F__container">
                            <div class="wd-F__title">
                                ${tweet.postImgContentTitle}
                            </div>
                            <div class="wd-F__text">
                                ${tweet.postImgContent}
                            </div>
                    </div>
                </div>
                <div class="wd-G_container">
                    <div class="wd-post-info">
                            <p class="wd-icons">
                                <a href="#" class="wd-link"><i class="fa-regular fa-comment"></i><p class="wd-numbers">123</p></a>
                            </p>
                    </div>
                    <div class="wd-post-info">
                        <p class="wd-icons">
                            <a href="#" class="wd-link"><i class="fa-solid fa-retweet"></i><p class="wd-numbers">123</p></a>
                        </p>
                    </div>
                    <div class="wd-post-info">
                        <p class="wd-icons">
                            <a href="#" class="wd-link"> <i class="fa-solid fa-heart red"></i><p class="wd-numbers">123</p></a>
                        </p>    
                    </div>
                    <div class="wd-post-info">
                        <p class="wd-icons">
                            <a href="#" class="wd-link"><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
    
    
    `);

};

export default TweetComponent;