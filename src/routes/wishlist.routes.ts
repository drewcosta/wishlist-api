import express from 'express';
import { wishlistController } from '../controllers';
import { wishlistMiddlewares } from '../middlewares';

const router = express.Router();

router.get(
  '/wishlist',
  wishlistController.getWishlist
);

router.get(
  '/wishlist/:id',
  wishlistController.getWishlistItemById
);

router.post(
  '/wishlist',
  wishlistMiddlewares.verifyItemBody,
  wishlistController.createWishlistItem
);

router.put(
  '/wishlist/:id',
  wishlistMiddlewares.verifyItemBody,
  wishlistController.updateWishlistItemById
);

router.delete(
  '/wishlist/:id',
  wishlistController.deleteWishlistItemById

);

export default router;