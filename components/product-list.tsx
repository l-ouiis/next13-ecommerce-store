import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";

interface ProductListProps {
  items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({
  items
}) => {
  return (
    <div className="space-y-4">
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
   );
}
 
export default ProductList;
