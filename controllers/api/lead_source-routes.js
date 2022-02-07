const router = require('express').Router();
const { User, Status, Lead_Source, Contact } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Lead_Source.findAll({
        include: {
            model: Contact,
            attributes: ['id','first_name','last_name','phone','email','notes','status_id','user_id','lead_source_id','createdAt','updatedAt'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Status,
                    attributes: ['status_name']
                }
            ]
        }
    })
    .then(dbLeadSourceData => res.json(dbLeadSourceData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Lead_Source.findOne({
        where: { id: req.params.id },
        include: {
            model: Contact,
            attributes: ['id','first_name','last_name','phone','email','notes','status_id','user_id','lead_source_id','created_at','updated_at'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Status,
                    attributes: ['status_name']
                }
            ]
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