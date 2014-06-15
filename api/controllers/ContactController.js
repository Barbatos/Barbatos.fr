module.exports = {

  index: function(req, res) {
    return res.view('contact/index');
  },

  sendEmail: function(req, res) {
    var name = req.param('name');
    var email = req.param('email');
    var message = req.param('message');
    var mail = require("nodemailer").mail;

    mail({
      from: name + " <" + email + ">",
      to: "barbatos@f1m.fr", 
      subject: "Barbatos.fr - contact message", 
      text: message, 
      html: message
    });
  }
};
