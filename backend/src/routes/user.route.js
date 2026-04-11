import express from "express";
import { proctectRoute } from "../middleware/auth.middleware.js";
import { getMyFriends, getRecommendedUsers, sendFriendRequest,  acceptFriendRequest,  
  getFriendRequests, getOutgoingFriendReqs} from "../controllers/user.controller.js";


const router = express.Router();

router.get("/", proctectRoute, getRecommendedUsers);
// apply auth middleware to all routes
router.use(proctectRoute);

router.get("/", getMyFriends);
router.get("/friends", getMyFriends);

router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);


router.get("/friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);




export default router;