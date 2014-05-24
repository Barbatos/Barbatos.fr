/**
 * Blog
 *
 * @module      :: Model
 */

module.exports = {

  schema: true,
  tableName: 'blog',

  attributes: {
    
    title: 'string',
    slug: 'string',
    post: 'text',
    author: 'string',
    status: 'int'
  }

};
