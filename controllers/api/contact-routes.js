const router = require('express').Router();
const { status } = require('express/lib/response');
const { User, Status, Lead_Source, Contact } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
  Contact.findAll({
    include: [
      {
        model: Status,
        attributes: ['status_name'],
      },
      {
        model: Lead_Source,
        attributes: ['lead_source_name'],
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbContactData) => res.json(dbContactData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', withAuth, (req, res) => {
  Contact.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Status,
        attributes: ['status_name'],
      },
      {
        model: Lead_Source,
        attributes: ['lead_source_name'],
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbContactData) => {
      if (!dbContactData) {
        res.status(404).json({ message: 'Contact not found' });
        return;
      }
      res.json(dbContactData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Contact.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
    email: req.body.email,
    notes: req.body.notes,
    status_id: req.body.status_id,
    user_id: req.body.user_id,
    lead_source_id: req.body.lead_source_id,
  })
    .then((dbContactData) => {
      res.json(dbContactData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  const contact = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
    email: req.body.email,
    notes: req.body.notes,
    status_id: req.body.status_id,
    lead_source_id: parseInt(req.body.lead_source_id, 'username'),
    user_id: req.body.user_id,
  };
  Contact.update(contact, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbContactData) => {
      if (!dbContactData) {
        res.status(404).json({ message: 'Contact not found' });
        return;
      }
      res.json(dbContactData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Contact.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbContactData) => {
      if (!dbContactData) {
        res.status(404).json({ message: 'Contact not found' });
        return;
      }
      res.json(dbContactData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
