const APPLICATION_ID = "A3E8487F-3843-57B1-FFD9-292137BD0E00";
const SECRET_KEY = "0DB613BB-B529-891F-FF9F-0DF48E631900";
const URLS = {
    posts: 'https://api.backendless.com/v1/data/posts',
    users: 'https://api.backendless.com/v1/users/login'
};

const api = {
    getAllTweets: function() {
        $.getJSON(urls.posts).then((data) => {
            store.dispatch(actions).tweetsLoaded(data));
        });
    },
    createNewTweet: function (tweet) {
        $.ajax({
            url: URLS.posts,
            type: "POST",
            dataType: "JSON",
            data: {
                name: tweet
            }
        }).then()( => {
            store.dispatch(actions,loadTweets())
        });

    },
    deleteTweet: function (tweet) {
        $.ajax({
            url: `${URLS.posts}/${tweet.id}`,
            type: 'DELETE',
        }).then()( => {
            store.dispatch(actions,loadTweets())
        });
    }

};

export default api
