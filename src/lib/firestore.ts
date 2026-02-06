import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import type { HeroSlide, Category, SubCategory, SubSubCategory, Product } from "./types";

export async function getHeroSlides(): Promise<HeroSlide[]> {
  const snapshot = await getDocs(collection(db, "hero_slider"));
  return snapshot.docs.map((doc) => doc.data() as HeroSlide);
}

export async function getCategories(): Promise<Category[]> {
  const snapshot = await getDocs(collection(db, "category"));
  return snapshot.docs.map((doc) => doc.data() as Category);
}

export async function getSubCategories(): Promise<SubCategory[]> {
  const snapshot = await getDocs(collection(db, "subCategory"));
  return snapshot.docs.map((doc) => doc.data() as SubCategory);
}

export async function getSubSubCategories(): Promise<SubSubCategory[]> {
  const snapshot = await getDocs(collection(db, "subSubCategory"));
  const data = snapshot.docs.map((doc) => doc.data() as SubSubCategory);
  return data.sort((a, b) => {
    if (a.name === "Others") return 1;
    if (b.name === "Others") return -1;
    return 0;
  });
}

export async function getAllProducts(): Promise<Product[]> {
  const snapshot = await getDocs(collection(db, "products"));
  return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Product));
}

export async function getProductById(productId: string): Promise<Product | null> {
  const docRef = doc(db, "products", productId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id } as Product;
  }
  return null;
}

export async function getProductsByCategory(categoryName: string): Promise<Product[]> {
  const allProducts = await getAllProducts();
  if (categoryName === "All Products") {
    return allProducts;
  }
  return allProducts.filter(
    (product) =>
      product.subCategory === categoryName ||
      product.category === categoryName ||
      product.subSubCategory === categoryName
  );
}
