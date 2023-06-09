const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Article {
    id: ID
    title: String
    content: String
    author: Author
    publicationDate: String
}

type Author {
    id: ID
    name: String
    email: String
    articles: [Article]
}

type Query {
    getArticles(id: ID): Artricle
    getAllArticles: Article
    getAuthor(id: ID): Author
    getAllAuthors: [Author]
}`
    ;

module.exports = typeDefs;