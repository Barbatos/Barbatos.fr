/**
 * BlogController
 *
 * @module      :: Controller
 */

module.exports = {
    
  index: function(req, res) {

    Blog.find().sort('createdAt DESC').done(function(err, posts) {
      return res.view({ posts: posts });
    });
  },

  show: function(req, res) {
    var slug = req.param('slug');

    Blog.findOneBySlug(slug).done(function(err, post) {
      if (err) return res.notFound();

      return res.view( {post: post} );
    });
  }
  
};
