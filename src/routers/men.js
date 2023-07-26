const express = require("express")
const router = new express.Router()
const MensRanking = require("../models/mens")


// posting data
router.post("/mens", async (req, res) => {
    try {
        const addingMensRanking = new MensRanking(req.body)
        const response = await addingMensRanking.save();
        console.log(response)
        res.status(200).send(response)
    } catch (err) {
        res.send(err)
    }
})

//get data
router.get("/mens", async (req, res) => {
    try {
        const getMen = await MensRanking.find({}).sort({"Ranking" : 1});
        console.log(getMen)
        res.send(getMen);
    } catch (err) {
        res.send(err);
    }
});

//get data by id
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id);
        console.log(getMen)
        res.send(getMen);
    } catch (err) {
        res.send(err);
    }
});

//updated object
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateMen);
    } catch (err) {
        res.send(err);
    }
});

//delete object
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateMen = await MensRanking.findByIdAndDelete(_id);
        res.send(updateMen);
    } catch (err) {
        res.send(err);
    }
});
module.exports = router