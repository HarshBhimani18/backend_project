const router = require("express").Router();
const Tickets = require("../models/tickets")

router.post("/", async (req, res) => {
  try {
    const user = await Tickets.create(req.body)
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req,res) => {
    try{
        const tickets = Tickets.find();
        res.json(tickets)
    }
    catch(error)
    {
        res.status(500).json({message : error.message})
    }
})

module.exports = router;