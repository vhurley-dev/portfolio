const Task = require('../models/task');

exports.getTasks = (req, res, next) => {
    Task.find()
    .then(documents => {
        res.status(200).json({
            message: 'tasks fetched succesfully!',
            tasks: documents
        });
    });
}

exports.newTask = (req, res, next) => {
    const task = new Task({
        completed: req.body.completed,
        title: req.body.title
    });
    task.save();
    res.status(201).json({
        message: 'post added succesfully!'
    });
}

exports.updateTask = (req, res, next) => {
    const task = new Task({
        _id: req.body.id,
        completed: req.body.completed,
        title: req.body.title
    }); 
    Task.updateOne({ _id: req.params.id }, task).then(result => {
        res.status(200).json({ message: "Update successful!" });
      })
      .catch(error => {
        res.status(500).json({
          message: "Couldn't update post"
        });
    });
}

exports.deleteTask = (req, res, next) => {
    Task.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
    })
};
