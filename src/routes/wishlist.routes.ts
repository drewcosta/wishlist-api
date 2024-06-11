import express from 'express';
import { wishlistController } from '../controllers';

const router = express.Router();

router.get('/wishlist', wishlistController.getAllWishlistItems);
router.get('/wishlist/:id', wishlistController.getWishlistById);
router.post('/wishlist', wishlistController.createWishlistItem);
router.put('/wishlist/:id', wishlistController.updateWishlistItem);
router.delete('/wishlist/:id', wishlistController.deleteWishlistItem);

export default router;