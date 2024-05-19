export const addProduct = () => {
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
};
export const updateProduct = () => {
  fetch("https://fakestoreapi.com/products/7", {
    method: "PUT",
    body: JSON.stringify({
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
};

export const deleteProduct = () => {
  fetch("https://fakestoreapi.com/products/6", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
};
