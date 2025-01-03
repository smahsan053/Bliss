import { sanityFetch } from "../lib/live"
import { CATEGORIES_QUERY, PRODUCT_BY_CATEGORY_QUERY, PRODUCT_BY_SLUG, PRODUCT_SEARCH_QUERY, PRODUCTS_QUERY, SALE_QUERY } from "./queries"

export const getSale = async () => {
    try {
        const products = await sanityFetch(
            {
                query: SALE_QUERY
            }
        )
        return products?.data || []
    } catch (error) {
        console.error('Error fetching sale data:', error)
        return
    }
}

export const getAllProducts = async () => {
    try {
        const products = await sanityFetch({
            query: PRODUCTS_QUERY,
        })
        return products.data || []
    } catch (error) {
        console.error('All products fetching Error:', error)
        return []
    }
}

export const getAllCategory = async () => {
    try {
        const categories = await sanityFetch({
            query: CATEGORIES_QUERY,
        })
        return categories.data || []
    } catch (error) {
        console.error("All categories fetching Error:", error)
        return []
    }
}

export const getProductBySlug = async (slug: string) => {
    try {
        const product = await sanityFetch({
            query: PRODUCT_BY_SLUG,
            params: {
                slug
            }
        })
        return product?.data || null
    } catch (error) {
        console.error("Product fetching Error:", error)
        return null
    }
}

export const searchProductsByName = async (searchParam: string) => {
    try {
        const products = await sanityFetch({
            query: PRODUCT_SEARCH_QUERY,
            params: {
                searchParam: searchParam,
            },
        });
        return products?.data || null

    } catch (error) {
        console.error("Fetching product by name Error:", error)
        return []
    }
}

export const getProductsByCategory = async (categorySlug: string) => {
    try {
        const products = await sanityFetch({
            query: PRODUCT_BY_CATEGORY_QUERY,
            params: {
                categorySlug
            }
        })
        return products.data || []

    } catch (error) {
        console.error("Fetching product by name Error:", error)
        return []
    }
}