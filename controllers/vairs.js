const { read } = require("fs");
const users = require("./../models/vairs");

const UserModel = require("./../models/vairs");







exports.getPost = async(req,res)=>{


try{


    const saveData =  await UserModel(req.body).save();
    res.json(saveData);
}

catch(err){  

res.json({err});

}


}

exports.getData = async(req, res)=>{

try{

    const ears = await UserModel.find();

    res.json(ears);
}

catch(err){

 res.json({err});

}



}

exports.getAlldata = async(req, res)=>{

try{
   

    const useful = await UserModel.find({_id : req.params.vairsId})

    res.json(useful);
}

catch(err){


    res.json({err});
}

}


exports.deleteUser = async (req, res)=>{


UserModel.findOneAndDelete({_id : req.params.vairsId},(err, data)=>{


if(err){

    res.json({err})
}

else{

    res.json(data);
}




})




}

exports.Updateuser = async (req, res)=>{


UserModel.findOneAndUpdate({_id : req.params.vairsId}, req.body, (err, data)=>{

if(err){

    res.json({err})
}

else{

    res.json(data)
}




})


}