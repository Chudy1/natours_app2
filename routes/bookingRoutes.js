const express = require('express');
const {
  getCheckoutSession,
  getAllBooking,
  getSingleBooking,
  createBooking,
  updateBooking,
  deleteBooking,
} = require('../controllers/bookingController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router.use(protect);

router.get('/checkout-session/:tourID', getCheckoutSession);

router.use(restrictTo('admin', 'lead-guide'));

router.route('/').get(getAllBooking).post(createBooking);
router
  .route('/:id')
  .get(getSingleBooking)
  .patch(updateBooking)
  .delete(deleteBooking);

module.exports = router;
