var expess = require('express');
var router = expess.Router();
var mongojs = require('mongojs');
var mongoClient = require('mongoose');

var db = mongojs('mongodb://abhi:abhi901@ds255309.mlab.com:55309/test901',['tasks']);

router.get('/tasks',(req,res,next)=>{
  db.tasks.find(function(err,task){
      if(err){
          res.send(err);
      }
      res.json(task);
  }); 
});

router.get('/tasks/:id',(req,res,next)=>{
    db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    }); 
});

router.post('/tasks',function(req,res,next){
    var task  = req.body;
    if(!task.title || (task.isDone + '')){
        res.status(400);
        res.json({
            "error":"Bad data"
        });
    }else{
        db.tasks.save(task,function(err,task){
          if(err){
              res.send(err);
          }
          res.json(task);
        });
    }

});

router.delete('/tasks/:id',function(req,res,next){
    db.tasks.delete({_id:mongojs.ObjectId(req.params.id)},function(err,task){
           if(err){
               res.send(err);
           }
           res.json(task);
    })
})


router.put('tasks/:id',function(req,res,next){
    var task = req.body;
    var upDtask = {};
    if(task.isDone){
        upDtask.isDone = task.isDone;
    }
    if(task.title){
       upDtask.title = task.title;
    }

    if(!upDtask){
        res.status(400);
        res.json({"error":"Bad data"});

    }else{
        db.tasks.update({_id:mongojs.ObjectId(res.params.id)},upDtask,{},function(err,task){
            if(err){
                res.send(err);
            }
            res.json(task);
        })
    }

})
module.exports = router;
