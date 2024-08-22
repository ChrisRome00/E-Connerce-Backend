const router = require('express').Router();
const { Category, Product } = require('../../models');
const { update } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try { 
    // find all categories
    const allCats = await Category.findAll({
      // be sure to include its associated Products
      include: [{model: Product}]
    });
    return res.status(200).json(allCats);
  } catch (err) {
    return res.status(400).json(err);
  }
  
});

router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value    
    const oneCat = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{model: Product}]
    })
    return res.status(200).json(oneCat);
  } catch (err) {
    return res.status(400).json(err);
  }
  
});

router.post('/', async (req, res) => {
  try {
    // create a new category
    const newCategory = await Category.create(req.body);
    return res.status(200).json(newCategory);
  } catch (err) {
    return res.status(400).json(err)
  }
  

});

router.put('/:id', async (req, res) => {
  try {
    // update a category by its `id` value
    updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    return res.status(200).json(updatedCategory);
  } catch (err) {
    return res.status(400).json()
  }
  
});

router.delete('/:id', async (req, res) => {
  try {
    // delete a category by its `id` value
    deletedCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    return res.status(200).json(deletedCategory);
  } catch (err) {
    return res.status(400).json()
  }
});

module.exports = router;