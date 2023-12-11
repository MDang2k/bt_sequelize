import express from "express"
import { getResLikeList, getResRateList, getUserLike, getUserRateList, postResLike, postResRate } from "../controllers/ResController.js"

const resRoute = express.Router()

resRoute.post("/like", postResLike)
resRoute.get("/res-like-list/:resId", getResLikeList)
resRoute.get("/user-like-list/:userId", getUserLike)

resRoute.post("/rate", postResRate)
resRoute.get("/res-rate-list/:resId", getResRateList)
resRoute.get("/user-rate-list/:userId", getUserRateList)


export default resRoute