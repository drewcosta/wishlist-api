import express from 'express';
import { wishlistController } from '../controllers';

const router = express.Router();

router.get('/wishlist', wishlistController.getWishlist);
router.get('/wishlist/:id', wishlistController.getWishlistItemById);
router.post('/wishlist', wishlistController.createWishlistItem);
router.put('/wishlist/:id', wishlistController.updateWishlistItemById);
router.delete('/wishlist/:id', wishlistController.deleteWishlistItemById);

export default router;