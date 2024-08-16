const router = require('express').Router();
const { Category, Product } = require('../../models');

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
    return res.status(500).json(err);
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
    return res.status(500).json(err);
  }
  
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;