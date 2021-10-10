const Doner = require("../models/donerModel");

exports.createDoner = async (req, res) => {
  try {
    console.log(req.body);
    const newDoner = await Doner.create(req.body);
    console.log(newDoner);
    res.status(200).json({
      status: "Success",
      data: {
        newDoner,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.getAllDoners = async (req, res) => {
  try {
    const doners = await Doner.find();
    res.status(200).json({
      status: "success",
      results: doners.length,
      data: {
        doners,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getDoner = async (req, res) => {
  try {
    const doner = await Doner.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        doner,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateDoner = async (req, res) => {
  try {
    const UpdateDoner = await Doner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      // runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        UpdateDoner,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid Data Not Updated!",
    });
  }
};

exports.deleteDoner = async (req, res) => {
  try {
    const doner = await Doner.findByIdAndRemove(req.params.id);
    res.status(204).json({
      status: "success",
      data: {
        doner,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid Data !",
    });
  }
};
