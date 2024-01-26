import { PathsNavigation } from "../../components/PathsNavigation/PathsNavigation";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CentredContainer } from "../../components/CentredContainer/CentredContainer";
import { Photos } from "../../components/Photos/Photos";
import { Details } from "../../components/Details/Details";

import { CATEGORIES, GENDERS } from "../../constants/categories";
import { useLoaderData, useParams } from "react-router-dom";

export function ProductDetails() {
  const product = useLoaderData();
  const { gender, category, subcategory } = useParams();
  const foundGender = GENDERS.find((g) => g.path === gender);
  const breadcrumbs = [
    {
      path: `/${foundGender.path}`,
      categoryName: foundGender.name,
    },
  ];
  if (category) {
    const foundCategory = CATEGORIES.find((c) => c.path === category);

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
          <Photos photos={product.photos} />
          <Details product={product} />
        </FlexContainer>
      </CentredContainer>
    </>
  );
}
