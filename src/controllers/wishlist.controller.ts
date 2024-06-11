import express from 'express';
import { wishlistService } from '../services';

async function getAllWishlistItems(req: express.Request, res: express.Response) {
  try {
    console.log('Recebendo solicitação para obter todos os itens da wishlist');
    const wishlist = await wishlistService.getAllWishlistItems();
    console.log('Itens da wishlist:', wishlist);
  } catch (error) {
    res.status(500).json({ error: "Falha na requisição" });
  }
}

async function getWishlistById(req: express.Request, res: express.Response) {
  try {
    const query = req.params.id;
    const wishlistItem = await wishlistService.getWishlistById(query);

    if (!wishlistItem) {
      return res.status(404).json({ error: "Esse item não existe" });
    }
    res.status(200).json(wishlistItem);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar item da wishlist" });
  }
}

async function createWishlistItem(req: express.Request, res: express.Response) {
  try {
    const newItem = req.body;
    const wishlist = await wishlistService.createWishlistItem(newItem);

    res.status(201).json(wishlist);
  } catch (error) {
    res.status(500).json({ error: "Erro adicionar item na wishlist" })
  }
}

async function updateWishlistItem(req: express.Request, res: express.Response) {
  try {
    const updatedItem = req.body;
    const query = req.params.id;

    const wishlist = await wishlistService.updateWishlistItem(query, updatedItem);

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o item da wishlist" });
  }
}

async function deleteWishlistItem(req: express.Request, res: express.Response) {
  try {
    const query = req.params.id;

    const wishlist = await wishlistService.deleteWishlistItem(query);

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar o item da wishlist" });
  }
}

export default {
  getAllWishlistItems,
  getWishlistById,
  createWishlistItem,
  updateWishlistItem,
  deleteWishlistItem
}