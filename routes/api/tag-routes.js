const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    //find all tags, be sure to include its associated Product data
    const allTags = await Tag.findAll({
      include: [{ model: Product }]
    })
    return res.status(200).json(allTags)
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const singleTag = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    return res.status(200).json(singleTag);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name
    });
    return res.status(200).json({newTag, message: "New Tag has been Created successfully"});
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update({
      tag_name: req.body.tag_name
    }, 
    {
      where: {
        id: req.params.id
      }
    })
    return res.status(200).json({message: "Tag has been Updated successfully"});
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).json({message: "Tag has been Deleted successfully"});
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;