const router = require('express').Router();
const { User, Status, Lead_Source, Contact } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] },
        include: {
            model: Contact,
            attributes: ['id','first_name','last_name','phone','email','notes','status_id','user_id','lead_source_id','created_at','updated_at'],
            include: [
                {
                    model: Status,
                    attributes: ['status_name']
                },
                {
                    model: Lead_Source,
                    attributes: ['lead_source_name']
                }
            ]
        }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ['password'] },
        include: {
            model: Contact,
            attributes: ['id','first_name','last_name','phone','email','notes','status_id','user_id','lead_source_id','createdAt','updatedAt'],
            include: [
                {
                    model: Status,
                    attributes: ['status_name']
                },
                {
                    model: Lead_Source,
                    attributes: ['lead_source_name']
                }
            ]
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'ID not found' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    .then(dbUserData => {
        // req.session.save(() => {
        //   req.session.user_id = dbUserData.id;
        //   req.session.username = dbUserData.username;
        //   req.session.loggedIn = true;
      
        //   res.json(dbUserData);
        // })
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'ID not found' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'ID not found' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;