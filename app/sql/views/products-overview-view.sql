CREATE OR REPLACE VIEW products_overview_view AS
SELECT  
    product_id,
    name,
    tagline,
    description,
    how_it_works,
    icon,
    url,
    stats->>'upvotes' as upvotes,
    stats->>'reviews' as reviews,
    stats->>'views' as views,
    AVG(product_reviews.rating) as average_rating
FROM public.products
LEFT JOIN public.reviews AS product_reviews USING (product_id)
GROUP BY product_id;