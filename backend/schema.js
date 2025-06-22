const Joi = require("joi");

const validCategories = ["Earrings",
    "Necklaces",
    "Rings",
    "Jewellery Sets",
    "Bracelets",
    "Gift Boxes",
    "Couple Sets",
    "Sunglasses",
    "Hats & Caps",
    "Hair Accessories"]

module.exports.productValidationSchema = Joi.object({
    title: Joi.string().required(),
    category: Joi.string().valid(...validCategories).required(),
    description: Joi.string().required(),
    gender: Joi.string().valid("Man", "Woman").required(),
    inStock: Joi.boolean().valid(true, false).default(true).required(),
    productPrice: Joi.number().required(),
    offerPrice: Joi.number().required(),
}).required();