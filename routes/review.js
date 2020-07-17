const {express} = require("./../config");
const router = express.Router();
const Review = require("../models/review");
const auth = require('../auth');

router.post("/reviews",auth.verifyUser, (req, res, next) => {
    Review.create(req.body)
    .then((review) => {
        res.statusCode = 201;
        res.json(review);
    })
    .catch(err => {
              res.status(500).json(err)
          });
      });

    router.get("/reviews", (req, res, next) => {
        Review.find({})
            .then((review) => {
              res.json(review);
            })
            .catch(err=>next(err));
      });

    router.route('/reviews/:id')
      .get((req, res, next) => {
          Review.findById(req.params.id)
              .populate({
                  path: 'review',
                  select: 'message'
              })
              .then((review) => {
                  res.json(review);
              }).catch(err=>next(err));
          })
          .delete(auth.verifyUser, auth.verifyAdmin,(req, res, next) => {
              Review.findOneAndDelete({_id: req.params.id })
                  .then((review) => {
                      if (review == null) throw new Error("review not found!");
                      res.json({message:"review Deleted Successfully!"});
                  }).catch(err=>next(err));
          });

      module.exports = router;