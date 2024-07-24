import { HttpStatusError } from "../../error";
import { IServiceResponse, IWishlistItem } from "../../interfaces";
import { wishlistRepository } from "../../repositories";

export async function getWishlist(): Promise<IServiceResponse<IWishlistItem[]>> {

  try {
    const allItems = await wishlistRepository.findAllItems();

    if (allItems.length === 0) {
      return {
        success: true,
        data: allItems,
        message: "Nenhum item cadastrado."
      }
    }

    return {
      success: true,
      data: allItems,
      message: "Itens capturados com sucesso!"
    }
  } catch (error) {
    throw new HttpStatusError("Erro ao buscar os itens", 500);
  }
}

