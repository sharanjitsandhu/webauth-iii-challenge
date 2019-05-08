const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
//   if (req.session) {
//     req.session.destroy(err => {
//       if (err) {
//         res.send(
//           "You can check out any time you like, but you can never leave...."
//         );
//       } else {
//         res.send("Bbye");
//       }
//     });
//   } else {
//     res.send("Already logged out!");
//   }
// });

module.exports = router;
