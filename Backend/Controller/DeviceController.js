const { request } = require("express");
const device = require()

modules.export = async (req, res) => {
  try {
      const devices = await Device.find();
      res.json(devices);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
}