import Order from "../models/orderModel.js";

export const createOrder = async (req, res) => {
    try {

        const body = req.body;

        const order = {
            orderId: body.numeroPedido.split("-")[0],
            value: body.valorTotal,
            creationDate: new Date(body.dataCriacao),
            items: body.items.map(item => ({
                productId: Number(item.idItem),
                quantity: item.quantidadeItem,
                price: item.valorItem
            }))
        };

        const newOrder = new Order(order);

        await newOrder.save();

        res.status(201).json(newOrder);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const listOrders = async (req, res) => {
    try {

        const orders = await Order.find();

        res.json(orders);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getOrder = async (req, res) => {
    try {

        const order = await Order.findOne({ orderId: req.params.orderId });

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.json(order);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateOrder = async (req, res) => {
    try {

        const order = await Order.findOneAndUpdate(
            { orderId: req.params.orderId },
            req.body,
            { new: true }
        );

        res.json(order);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteOrder = async (req, res) => {
    try {

        await Order.findOneAndDelete({ orderId: req.params.orderId });

        res.json({ message: "Order deleted" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};