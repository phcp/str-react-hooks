module.exports = {
    async listAll(req, res) {
        
        const posts = [{
            description: "Description 1",
            imageUrl: "https://www.pedegoelectricbikes.com/wp-content/uploads/2018/08/pedego-trail-tracker-5.jpg",
        },
        {
            description: "Description 2",
            imageUrl: "https://www.pedegoelectricbikes.com/wp-content/uploads/2018/08/pedego-trail-tracker-5.jpg",
        },
        {
            description: "Description 3",
            imageUrl: "https://www.pedegoelectricbikes.com/wp-content/uploads/2018/08/pedego-trail-tracker-5.jpg",
        },
        {
            description: "Description 4",
            imageUrl: "https://www.pedegoelectricbikes.com/wp-content/uploads/2018/08/pedego-trail-tracker-5.jpg",
        }];

        return res.json(posts);
    },
};