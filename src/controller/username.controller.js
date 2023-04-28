const db = require("../config/db.config");
const { user: User } = db;

exports.register = (req, res) => {

    let data = req.body;

    User.create({
        name: data.name,
        email: data.email,
        message: data.message
      })
        .then(user => {
            res.status(200).send("Record Saved")
        })
        .catch(err => {
            res.status(400).send(err)
        });
  
}