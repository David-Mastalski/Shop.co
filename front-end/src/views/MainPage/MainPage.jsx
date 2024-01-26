import { useLoaderData } from "react-router-dom";
import { Bestseller } from "../../components/Bestseller/Bestseller";
import { Brands } from "../../components/Brands/Brands";
import { BrowseByDress } from "../../components/BrowseByDress/BrowseByDress";
import { Hero } from "../../components/Hero/Hero";

export function MainPage() {
  const [menData, womenData] = useLoaderData();

  return (
    <>
      <Hero />
      <Brands />
      <Bestseller category="Men Bestseller" products={menData} path="/men" />
      <Bestseller
        category="Woman Bestseller"
        products={womenData}
        path="/women"
      />
      <BrowseByDress />
    </>
  );
}
