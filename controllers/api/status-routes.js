const router = require('express').Router();
const { User, Status, Lead_Source, Contact } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    Status.findAll({
        include: {
            model: Contact,
            attributes: ['id','first_name','last_name','phone','email','notes','status_id','user_id','lead_source_id','created_at','updated_at'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Lead_Source,
                    attributes: ['lead_source_name']
                }
            ]
        }
    })
    .then(dbStatusData => res.json(dbStatusData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', withAuth, (req, res) => {
    Status.findOne({
        where: { id: req.params.id },
        include: {
            model: Contact,
            attributes: ['id','first_name','last_name','phone','email','notes','status_id','user_id','lead_source_id','createdAt','updatedAt'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Lead_Source,
                    attributes: ['lead_source_name']
                }
            ]
        }
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

router.post('/', withAuth, (req, res) => {
    Status.create({
        status_name: req.body.status_name
    })
    .then(dbStatusData => {res.json(dbStatusData)})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
    Status.update(req.body, {
        where: {
            id: req.params.id
        }
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

router.delete('/:id', withAuth, (req, res) => {
    Status.destroy({
        where: {
            id: req.params.id
        }
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


module.exports = router;