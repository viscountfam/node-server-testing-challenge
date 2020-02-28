const router = require('express').Router()
const teams = require('./teams-model.js')
router.get("/", (req, res) => {
    teams
    .find()
    .then(teams => {
      res.json(teams);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Failed to get the teams" });
    });
    
})

router.post("/", (req, res) => {
  const teamInfo = req.body
    teams
    .add(teamInfo)
    .then(id => {
      teams.find()
      .where('id', id[0])
      .then(team => {
        res.status(201).json(team)
      })
    }
      
    )
    .catch(err => {
      console.log(err)
      res.status(500).json({message: "failed to add the team"})
    })

})

router.delete("/:id", (req, res) => {
  const {id} = req.params
  teams.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: "Could not find user with given id" });
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: "Failed to delete user" });
  });

})

module.exports = router