const router = require('express').Router();
const { User, Status, Lead_Source } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Lead_Source.findAll()
    .then(dbLeadSourceData => res.json(dbLeadSourceData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Lead_Source.findOne({
        where: { id: req.params.id }
    })
    .then(dbLeadSourceData => {
        if (!dbLeadSourceData) {
            res.status(404).json({ message: 'Lead source not found' });
            return;
        }
        res.json(dbLeadSourceData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Lead_Source.create({
        lead_source_name: req.body.lead_source_name
    })
    .then(dbLeadSourceData => {res.json(dbLeadSourceData)})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Lead_Source.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbLeadSourceData => {
        if (!dbLeadSourceData) {
            res.status(404).json({ message: 'Lead source not found' });
            return;
        }
        res.json(dbLeadSourceData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Lead_Source.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbLeadSourceData => {
        if (!dbLeadSourceData) {
            res.status(404).json({ message: 'Lead source not found' });
            return;
        }
        res.json(dbLeadSourceData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;