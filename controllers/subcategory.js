const Subcategory = require("../models/Subcategory");
const slugify = require("slugify");

exports.list = async (req, res) => {
  try {
    const subcategories = await Subcategory.find().sort("-createdAt");
    res.json(subcategories);
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res) => {
  const { title, category } = req.body;

  try {
    const subcategory = new Subcategory({
      title,
      slug: slugify(title),
      category,
    });
    await subcategory.save();
    res.json(subcategory);
  } catch (error) {
    console.log(error);
  }
};

exports.read = async (req, res) => {
  const { slug } = req.params;

  try {
    const subcategory = await Subcategory.findOne({ slug });
    res.json(subcategory);
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (req, res) => {
  const { slug } = req.params;
  const { title, category } = req.body;

  try {
    const subcategory = await Subcategory.findOneAndUpdate(
      { slug },
      { title, slug: slugify(title), category },
      { new: true }
    );
    res.json(subcategory);
  } catch (error) {
    console.log(error);
  }
};

exports.remove = async (req, res) => {
  const { slug } = req.params;

  try {
    await Subcategory.findOneAndRemove({ slug });
    res.json({ message: "Deleted!" });
  } catch (error) {
    console.log(error);
  }
};
