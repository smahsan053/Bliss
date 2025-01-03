import React from "react";
import { Category } from "../../sanity.types";
import CategorySelector from "./CategorySelector";

interface Props {
  categories: Category[];
}
const Categories = ({ categories }: Props) => {
  return (
    <div className="py-5">
      <CategorySelector categories={categories} />
    </div>
  );
};

export default Categories;
