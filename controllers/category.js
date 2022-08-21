const Category = require("../models/Category");
const slugify = require("slugify");

exports.list = async (req, res) => {
  try {
    const categories = await Category.find().sort("-createdAt");
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res) => {
  const { title } = req.body;

  try {
    const category = new Category({ title, slug: slugify(title) });
    await category.save();
    res.json(category);
  } catch (error) {
    console.log(error);
  }
};

exports.read = async (req, res) => {
  const { slug } = req.params;

  try {
    const category = await Category.findOne({ slug });
    res.json(category);
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (req, res) => {
  const { slug } = req.params;
  const { title } = req.body;

  try {
    const category = await Category.findOneAndUpdate(
      { slug },
      { title, slug: slugify(title) },
      { new: true }
    );
    res.json(category);
  } catch (error) {
    console.log(error);
  }
};

exports.remove = async (req, res) => {
  const { slug } = req.params;

  try {
    await Category.findOneAndRemove({ slug });
    res.json({ message: "Deleted!" });
  } catch (error) {
    console.log(error);
  }
};
