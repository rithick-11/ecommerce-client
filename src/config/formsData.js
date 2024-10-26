export const createUserForm = [
    {
        name:"name",
        type:"text",
        placeholder:"Enter name",
        required: true,
        label:"Name",
        element:"input"
    },
    {
        name:"email",
        type:"email",
        placeholder:"Enter email",
        required: true,
        label:"Email",
        element:"input"
    },
    {
        name:"password",
        type:"password",
        placeholder:"Enter password",
        required: true,
        label:"Password",
        element:"input"
    },
]

export const logInFrom = [
    {
        name:"email",
        type:"email",
        placeholder:"Enter email",
        required: true,
        label:"Email",
        element:"input"
    },
    {
        name:"password",
        type:"password",
        placeholder:"Enter password",
        required: true,
        label:"Password",
        element:"input"
    }
]

export const productFormControls = [
    {
      name: "name",
      element: "input",
      type: "text",
      label: "Product Name",
      placeholder: "Enter product name",
      required: true
    },
    {
      name: "price",
      element: "input",
      type: "number",
      label: "Price",
      placeholder: "Enter price",
      step: 0.01,
      required: true
    },
    {
      name: "description",
      element: "textarea",
      label: "Description",
      placeholder: "Enter product description",
      required: true,
      rows: 4,
      cols: 50
    },
    {
      name: "category",
      element: "select",
      label: "Category",
      options: ["men", "women", "kids", "accessories"],
      required: true
    },
    {
      name: "stock",
      element: "input",
      type: "number",
      label: "Stock Quantity",
      placeholder: "Enter stock quantity",
      min: 0,
      required: true
    },
    {
      name: "size",
      element: "select",
      label: "Size (Optional)",
      options: ["S", "M", "L", "XL"],
      required: false
    },
    {
      name: "color",
      element: "input",
      type: "text",
      label: "Color (Optional)",
      placeholder: "Enter color",
      required: false
    },
    {
      name: "imgUrl",
      element: "input",
      type: "url",
      label: "Image URL",
      placeholder: "Enter image URL",
      required: true
    },
    {
      name: "sku",
      element: "input",
      type: "text",
      label: "SKU (Optional)",
      placeholder: "Enter SKU",
      required: false
    },
    {
      name: "tags",
      element: "input",
      type: "text",
      label: "Tags (Optional)",
      placeholder: "Enter tags, comma-separated",
      required: false
    },
    {
      name: "availability",
      element: "select",
      label: "Availability",
      options: ["inStock", "outOfStock"],
      required: true
    },
    {
      name: "discount",
      element: "input",
      type: "number",
      label: "Discount (Optional)",
      placeholder: "Enter discount (%)",
      min: 0,
      max: 100,
      step: 1,
      required: false
    },
    {
      name: "brand",
      element: "input",
      type: "text",
      label: "Brand (Optional)",
      placeholder: "Enter brand name",
      required: false
    }
  ];




export const initUserForm = {
    name:"",
    email:"",
    password:""
}

export const initLogInFromData = {
    email:"",
    password:""
}

export const initialFormData = {
    name: '',
    price: "0",
    description: '',
    category: 'men',
    stockQuantity: '0',
    size: 'M',
    color: '',
    imgUrl: '',
    sku: '',
    tags: '',
    availability: 'In-stock', 
    discount:0,
    brand: ''
};


