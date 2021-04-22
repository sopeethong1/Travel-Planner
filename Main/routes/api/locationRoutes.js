const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

//TODO: GET all locations
router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: GET a single location
router.get('/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      // TODO: JOIN with travellers, using the Trip through table
      include: [{ model: Traveller, through: Trip, as: 'location_travellers' }]
    });

    if (!locationData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: CREATE a location
router.post('/', async (req, res) => {
  try {
    const locationData = await Location.create(req.body);
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: DELETE a location
router.delete('/:id', async (req, res) => {
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!locationData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
