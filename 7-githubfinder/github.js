class Github {
    constructor() {
        this.client_id = '';
        this.client_secret = '';
    }
    async getUser(user) {
        // 2 requests, one to get user and one to get repos
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {
            // profile in ES6+ is the same as profile: profile
            profile
        }
    }
} 
