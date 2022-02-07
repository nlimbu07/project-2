const router = require('express').Router();
const { User, Status } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Status.findAll()
    .then(dbStatusData => res.json(dbStatusData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Status.findOne({
        where: { id: req.params.id }
    })
    .then(dbStatusData => {
        if (!dbStatusData) {
            res.status(404).json({ message: 'Status not found' });
            return;
        }
        res.json(dbStatusData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Status.create({
        status_name: req.body.status_name
    })
    .then(dbStatusData => {res.json(dbStatusData)})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Status.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbStatusData => {
        if (!dbStatusData) {
            res.status(404).json({ message: 'ID not found' });
            return;
        }
        res.json(dbStatusData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Status.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbStatusData => {
        if (!dbStatusData) {
            res.status(404).json({ message: 'ID not found' });
            return;
        }
        res.json(dbStatusData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;