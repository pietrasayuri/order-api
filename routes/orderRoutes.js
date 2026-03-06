import express from "express";

import {
  createOrder,
  listOrders,
  getOrder,
  updateOrder,
  deleteOrder
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/order", createOrder);
router.get("/orders", listOrders);
router.get("/order/:orderId", getOrder);
router.put("/order/:orderId", updateOrder);
router.delete("/order/:orderId", deleteOrder);

export default router;