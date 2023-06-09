const { Articles, Author } = require('./models');

const resolvers = {
    Query: {
        getArticle: async (_, { id }) => {
            try {
                const article = await Article.findById(id);
                return article;
            } catch (error) {
                throw new Error('Failed to fectch article.');
            }
        },
        getAllArticles: async () => {
            try {
                const articles = await Article.find();
                return articles;
            } catch (error) {
                throw new Error('Failed to fetch articles.');
            }
        },
        getAuthor: async (_, { id }) => {
            try {
                const author = await Author.findById(id);
                return author;
            } catch (error) {
                throw new Error('Failed to fetch author.');
            }
        },
        getAllAuthors: async () => {
            try {
                const authors = await Author.find();
                return authors;
            } catch (error) {
                throw new Error('Failed to fetch authors.');
                     }
            },
        },
    };




    module.exports = resolvers;
