const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');

//Update
router.put("/:id", async(req,res)=> {
    
 if(req.body.userId === req.params.id){

    if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password,salt);

        }
    try{

         const updatedUser = await User.findByIdAndUpdate(req.params.id,
            {
             $set: req.body,
            },
            
          )    
       

        res.status(200).json(updatedUser);
    } catch(err){
        res.status(500).json("error");
    }
  } else {
      res.status(401).json("You can update ur account only!");

  }

  
});
module.exports = router;

//Delete
router.delete("/:id",async(req,res)=>{
    
    if(req.body.userid === req.params.id)
    {

        try{
           
            const user = await User.findById(req.params.id)

            try{
                     await Post.deleteMany({username: user.username});
                      await User.findByIdAndDelete(req.params.id);
                     
                      res.status(200).json("deletedUser");

                } catch(err)
                     {
                        res.status(500).json(err);
                     }

            } catch(err)
                    {
                        res.status(404).json("user not found");
                    }
    }

        else 
        {
            res.status(401).json("You can delete ur account only!");

        }

  
});
module.exports = router;

//Get User 
router.get("/:id", async(req,res)=>{

    try{
        const user = await User.findById(req.params.id);
        const {password,...others} =user._doc;
        res.status(500).json(others);

    }catch(err){res.status(500).json(err)
    
    }
});

module.exports = router;