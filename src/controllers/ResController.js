import initModels from "../models/init-models.js";
import { sequelize } from "../models/connect.js";

let model = initModels(sequelize);

export const postResLike = async (req, res) => {
  try {
    res.status(200).send("Success");
  } catch {
    res.status(400).send("Error");
  }
};

export const getResLikeList = async (req, res) => {
  try {
    let { resId } = req.params;

    let data = await model.like_res.sequelize.query(
      `select user_id, date_like from like_res 
      where res_id = ${resId}`
    );

    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const getUserLike = async (req, res) => {
  try {
    let { userId } = req.params;

    let data = await model.like_res.sequelize.query(
      `select res_id, date_like from like_res 
      where user_id = ${userId}`
    );

    res.send(data);
  } catch {
    res.status(400).send("Error");
  }
};

export const postResRate = async (req, res) => {
  try {
    res.send("Post restaurant Rates");
  } catch {
    res.status(400).send("Error");
  }
};

export const getResRateList = async (req, res) => {
  try {
    let { resId } = req.params;

    let data = await model.rate_res.sequelize.query(
      `select user_id, amount, date_rate from rate_res 
      where res_id = ${resId}`
    );

    res.send(data);
  } catch {
    res.status(400).send("Error");
  }
};

export const getUserRateList = async (req, res) => {
  try {
    let { userId } = req.params;

    let data = await model.rate_res.sequelize.query(
      `select res_id, amount, date_rate from rate_res 
      where user_id = ${userId}`
    );

    res.send(data);
  } catch {
    res.status(400).send("Error");
  }
};
