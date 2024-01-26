import styles from "./ProductsList.module.css";

import { useEffect } from "react";
import { CentredContainer } from "../../components/CentredContainer/CentredContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { Pagination } from "../../components/Pagination/Pagination";
import { PathsNavigation } from "../../components/PathsNavigation/PathsNavigation";
import { Products } from "../../components/Products/Products";
import { useLoaderData, useParams } from "react-router-dom";
import { CATEGORIES, DRESS_STYLE, GENDERS } from "../../constants/categories";

export function ProductsList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { products, numberOfPages } = useLoaderData();
  const { gender, category, subcategory } = useParams();
  const foundGender = GENDERS.find((g) => g.path === gender);
  const breadcrumbs = [
    {
      path: `/${foundGender.path}`,
      categoryName: foundGender.name,
    },
  ];
  if (category) {
    const foundCategory =
      CATEGORIES.find((c) => c.path === category) ||
      DRESS_STYLE.find((c) => c.path === category);

    breadcrumbs.push({
      path: `/${foundGender.path}/${foundCategory.path}`,
      categoryName: foundCategory.categoryName,
    });

    if (subcategory) {
      const foundSubcategory = foundCategory.subCategories.find(
        (sc) => sc.path === subcategory
      );
      breadcrumbs.push({
        path: `/${foundGender.path}/${foundCategory.path}/${foundSubcategory.path}`,
        categoryName: foundSubcategory.categoryName,
      });
    }
  }

  return (
    <>
      <PathsNavigation paths={breadcrumbs} />
      <CentredContainer>
        <FlexContainer>
          <ExpandableMenu />
          <div className={styles.fullWidth}>
            <Products products={products} />
            <Pagination numberOfPages={numberOfPages} />
          </div>
        </FlexContainer>
      </CentredContainer>
    </>
  );
}
