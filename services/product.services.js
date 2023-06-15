const Brand = require("../models/Brand");
const Product = require("../models/Product");

exports.createProductService = async (data) => {
  const result = await Product.create(data);
  const { _id: productId, brand } = result;
  const res = await Brand.updateOne(
    { _id: brand.id },
    { $push: { products: productId } }
  );
  console.log(res);
  return result;
};

exports.getProductsService = async (sort, query) => {
  const products = await Product.find(sort)
    .skip(query.skip)
    .limit(query.limit)
    .select(query.fields)
    .sort(query.sortBy);
  const totalProduct = await Product.countDocuments(sort);
  const pageCount = Math.ceil(totalProduct / query.limit);

  return { totalProduct, pageCount, products };
};

exports.updateProductService = async (id, data) => {
  const result = await Product.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  return result;
};

exports.bulkUpdateProductsService = async (data) => {
  const products = [];
  data.forEach((product) => {
    products.push(Product.updateOne({ _id: product.id }, product.data));
  });
  const result = await Promise.all(products);
  return result;
};

exports.deleteProductService = async (id) => {
  const result = await Product.deleteOne({ _id: id.id });
  return result;
};

exports.bulkDeleteProductService = async (ids) => {
  const result = await Product.deleteMany({ _id: ids });
  return result;
};
