const {express,multer,path} = require("./../config");
const router = express.Router();
const Service = require("../models/service");
const auth = require('../auth');

// router.get('/',(req,res,next)=>{
//     res.status(200).json({'message':'hello from laundry'});
// });
const storage = multer.diskStorage({

    destination: "./public/uploads",
    filename: (req, file, callback) => {
        console.log('herehere>>',req.body);

        let ext = path.extname(file.originalname);
        callback(null, `${file.fieldname}-${Date.now()}${ext}`);
    }
});

const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error("You can upload only image files!"), false);
    }
    cb(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: imageFileFilter
})

router.post("/services",auth.verifyUser, auth.verifyAdmin,upload.single("image"), (req, res, next) => {

    console.log('req>>',req.body)

      Service.create({
        name: req.body.name,
        image:req.file.path
      })
        .then(service => {
          res.json( service );
        })
        .catch(err=>next(err));
    });

    router.get("/services", (req, res, next) => {
        Service.find({})
            .then((service) => {
                res.json(service);
            })
            .catch(err=>next(err));
    });

router.route('/services/:id')
    .get((req, res, next) => {
        Service.findById(req.params.id)
            .populate({
                path: 'service',
                select: 'name'
            })
            .then((service) => {
                res.json(service);
            }).catch(err=>next(err));
        })
    .put(auth.verifyUser, auth.verifyAdmin,(req, res, next) => {
            Service.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
                .then((service) => {
                    res.json({message:"Service Updated Successfully! "});
                }).catch(err=>next(err));
        })        
    .delete(auth.verifyUser, auth.verifyAdmin,(req, res, next) => {
            Service.findOneAndDelete({_id: req.params.id })
                .then((service) => {
                    if (service == null) throw new Error("Service not found!");
                    res.json({message:"Service Deleted Successfully! "});
                }).catch(err=>next(err));
        });
    module.exports = router;

