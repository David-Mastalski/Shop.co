import { redirect } from "react-router-dom";
import { BACK_END_URL } from "../constants/api";
import { CATEGORIES, DRESS_STYLE } from "../constants/categories";
import { GENDERS } from "../constants/categories";

export function productsListLoader({
  params: { gender, category, subcategory },
  request,
}) {
  const pageURL = new URL(request.url);
  const page = pageURL.searchParams.get("page") || 1;

  const foundGender = GENDERS.find((g) => g.path === gender);

  let url = `${BACK_END_URL}/products/`;

  if (foundGender) {
    url = `${url}?gender=${gender}`;
    if (category) {
      const foundCategory =
        CATEGORIES.find((c) => c.path === category) ||
        DRESS_STYLE.find((c) => c.path === category);

      if (foundCategory) {
        if (foundCategory === DRESS_STYLE.find((c) => c.path === category)) {
          url = `${url}&dress-style=${category}`;
        } else {
          url = `${url}&category=${category}`;

          if (subcategory) {
            const foundSubCategory = foundCategory.subCategories.find(
              (sc) => sc.path === subcategory
            );

            if (foundSubCategory) {
              url = `${url}&subcategory=${subcategory}`;
            } else {
              redirect("/men");
            }
          }
        }
      } else {
        redirect("/men");
      }
    }
    url = `${url}&_limit=12&_page=${page}`;
    return fetch(url).then((res) => {
      const numberOfPages = Math.ceil(
        Number(res.headers.get("X-Total-Count")) / 12
      );
      return res.json().then((products) => {
        return {
          products,
          numberOfPages,
        };
      });
    });
  } else {
    redirect("/");
  }
}
