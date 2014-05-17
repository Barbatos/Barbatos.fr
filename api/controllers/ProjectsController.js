/**
 * ProjectsController
 *
 * @module      :: Controller
 */

module.exports = {

  index: function(req, res) {
    /*Projects.create({
      name: 'type 3 projecttttt',
      slug: 'type-3-project',
      short_description: 'sdfsdf dsf sdf ',
      description: 'poi oioi poipo iopio pipipoi poipo ioiip oipioi opipo ipoi opip oopipoi <strong>test</strong> lol <i>mdr</i>',
      img_small: 'ptdr.jpg',
      type: 3
    }).done(function(err, project) {

      if (err) {
        return console.log(err);

      // The User was created successfully!
      }else {
        console.log("Project created:", project);
      }
    });
    */

    Projects.find().sort('updatedAt DESC').done(function(err, projs) {
      perso_projects = projs.filter(function(proj) {
        return proj.type == 1
      });

      pro_projects = projs.filter(function(proj) {
        return proj.type == 2
      });

      uni_projects = projs.filter(function(proj) {
        return proj.type == 3
      });

      return res.view({
        perso_projects: perso_projects, 
        pro_projects: pro_projects, 
        uni_projects: uni_projects
      });
    });
  },

  show: function(req, res) {
    var slug = req.param('slug');

    Projects.findOneBySlug(slug).done(function(err, project) {
      if (err) return res.notFound();

      return res.view( {project: project} );
    });
  }

};
