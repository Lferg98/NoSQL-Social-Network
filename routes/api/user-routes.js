const router = require('express').Router();

const {
    getAllUser,
    getSingleUser,
    createUser,
    updateUser,
   
  
} = require('../../controllers/userController');


// Set up get all and post at api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// set up get one, put and delete at /api/users/:id
router
    .route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    

// set up add and delete friend
router
    .route('/:userId/friends/:friendId')
    
    

module.exports = router;




