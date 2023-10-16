import { client } from "../sanity-plugin-client/client";
export default async function getProducts(
  categories,
  orderBy = "asc",
  productType
) {
  // sanity client
  // sanity query
  let _additionalQuery = [];

  let _categories = categories?.filter((item) => item != "") || [];

  if (productType) {
    let _productType = "";
    if (productType === "en-cok-satanlar") {
      _productType = `&& product_options == "1" `;
    } else if (productType === "en-cok-one-cikanlar") {
      _productType = `&& product_options == "2" `;
    } else if (productType === "firsat-urunleri") {
      _productType = `&& product_options == "3" `;
    } else {
      _productType = `&& product_options == "4" `;
    }

    _additionalQuery.push({
      name: "productType",
      value: _productType,
    });
  } else {
    _additionalQuery.filter((item) => item.name !== "productType");
    productType = false;
  }

  if (_categories.length > 0) {
    // if (_additionalQuery) {
    //   _additionalQuery += "&&";
    // }
    // birden fazla olabilir ve array olarak gelir
    _additionalQuery.push({
      name: "categories",
      value: `&& category->slug.current in [${JSON.stringify(_categories)
        .replace(/^\[/, "")
        .replace(/\]$/, "")}]`,
    });
  } else {
    _additionalQuery.filter((item) => item.name !== "categories");
  }

  let _additionalOrder = " ";
  if (orderBy) {
    _additionalOrder = `| order(_createdAt ${orderBy})`;
  }

  const posts = await client.fetch(`
    *[_type == "products"  ${_additionalQuery
      .map((item) => item.value)
      .join(" ")} ] ${_additionalOrder} {
    ...,

    category->{
      slug,
      _id
    },
  }`);

  return posts;
}
