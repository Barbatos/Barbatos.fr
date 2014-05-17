/**
 * Projects
 *
 * @module      :: Model
 */

module.exports = {

  schema: true,
  tableName: 'projects',

  attributes: {
  	
    name: 'string',
    slug: 'string',
    short_description: 'string',
    description: 'text',
    img_small: 'string',
    img: 'string',
    type: 'int',
    missions: 'text'
  }

};
