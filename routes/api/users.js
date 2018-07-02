const express = require('express');
const router = express.Router();

// @route Get api/posts/users
// @desc Tests users route
// @access private

router.get('/test', (req, res) => res.json({msg: "Users works"}));

module.exports = router;
