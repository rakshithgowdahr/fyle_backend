const express = require("express");
const router = express.Router();
const Branch = require("../model/branchModel");

router.get("", async (req, res) => {
  let q = req.query.q;
  let limit = req.query.limit;
  limit = parseInt(limit);
  let offset = req.query.offset;
  offset = parseInt(offset);
  const branch = await Branch.find()
    .or([
      { branch: new RegExp("^" + q, "i") },
      { address: new RegExp("^" + q, "i") },
      { city: new RegExp("^" + q, "i") },
      { district: new RegExp("^" + q, "i") }
    ])
    .limit(limit)
    .skip(offset)
    .sort({ ifsc: 1 });
  if (!branch) return res.send("No data found").status(400);
  res.send(branch).status(200);
});
router.get("/autocomplete", async (req, res) => {
  let q = req.query.q;
  let limit = req.query.limit;
  limit = parseInt(limit);
  let offset = req.query.offset;
  offset = parseInt(offset);
  const branch = await Branch.find({ branch: new RegExp("^" + q, "i") })
    .limit(limit)
    .skip(offset)
    .sort({ ifsc: 1 });
  if (!branch) return res.send("No data found").status(400);
  res.send(branch).status(200);
});
module.exports = router;
