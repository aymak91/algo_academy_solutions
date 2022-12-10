// https://leetcode.com/problems/design-twitter/

class Twitter {
    constructor() {
        this.time = 0;
        this.users = {};
        this.tweets = [];
    }

    createGetUser(userId) {
        if (!this.users[userId]) {
            this.users[userId] = {
                following: new Set()
            }
        }
        
        return this.users[userId];
    }

    postTweet(userId, tweetId) {
        this.tweets.push({user: userId,
                        tweetId,
                        time: this.time++})
    }

    getNewsFeed(userId) {
        const user = this.createGetUser(userId);
        const tweets = this.tweets.filter(t => t.user === userId || user.following.has(t.user));
        return tweets.sort((a,b) => b.time - a.time).slice(0,10).map((d) => d.tweetId);
    }

    follow(followerId, followeeId) {
        const {following} = this.createGetUser(followerId);
        following.add(followeeId);
    }

    unfollow(followerId, followeeId) {
        const {following} = this.createGetUser(followerId);
        following.delete(followeeId);
    }
}