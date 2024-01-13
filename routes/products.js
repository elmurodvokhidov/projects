import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.render("index", {
        title: "Online Shop"
    });
});

router.get("/products", (req, res) => {
    res.render("products", {
        title: "Products"
    });
});

router.get("/add", (req, res) => {
    res.render("add", {
        title: "Add Product"
    });
});

export default router;