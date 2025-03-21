


import Cart from "../models/cart.model.js";

// ✅ Add Item to Cart
export const addItemToCart = async (req, res) => {
  try {
    let { userID, itemName, quantity, rate } = req.body;

    quantity = Number(quantity);
    rate = Number(rate);

    if (quantity <= 0 || rate < 0) {
      return res.status(400).json({ message: "Invalid quantity or rate" });
    }

    let cart = await Cart.findOne({ userID });

    if (!cart) {
      cart = new Cart({ userID, items: [], totalAmount: 0 });
    }

    let existingItem = cart.items.find((item) => item.itemName === itemName);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ itemName, quantity, rate });
    }

    cart.totalAmount = cart.items.reduce(
      (acc, item) => acc + item.quantity * item.rate,
      0
    );

    await cart.save();
    res.status(201).json({ message: "Item added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Error adding item to cart", error });
  }
};

// ✅ Remove Item from Cart
export const removeItemFromCart = async (req, res) => {
  try {
    const { userID, itemName } = req.body;

    let cart = await Cart.findOne({ userID });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    let itemIndex = cart.items.findIndex((item) => item.itemName === itemName);

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    cart.items.splice(itemIndex, 1);

    cart.totalAmount = cart.items.reduce(
      (acc, item) => acc + item.quantity * item.rate,
      0
    );

    await cart.save();
    res.status(200).json({ message: "Item removed from cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Error removing item from cart", error });
  }
};

// ✅ Get Cart Items
export const getCart = async (req, res) => {
  try {
    const { userID } = req.params;
    const cart = await Cart.findOne({ userID });

    if (!cart || cart.items.length === 0) {
      return res.status(404).json({ message: "Cart is empty" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error });
  }
};

