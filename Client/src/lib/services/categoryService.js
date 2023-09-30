import api from "../api";
const CategoryService = {
  getAll: () => {
    return api.getAsync("/categories");
  },

  create: (category) => {
    return api.postAsync("/categories", category);
  },

  update: (category) => {
    return api.putAsync(`/categories/${category.id}`, category);
  },

  getOne: (id) => {
    return api.getAsync(`/categories/${id}`);
  },

  delete: (id) => {
    return api.deleteAsync(`/categories/${id}`);
  },
};
export default CategoryService;
