const products = [
  {
    title: 'Blackout Sunglasses',
    description: 'Bold, sleek, and unapologetically cool — the Blackout Sunglasses are the ultimate statement in modern minimalism. Featuring an all-black frame and matching black lenses, this pair delivers a clean, monochrome aesthetic with a touch of mystery.',
    productPrice: 699,
    offerPrice: 499,
    gender: 'Woman',
    category: 'Sunglasses',
    inStock: true,
    product_images: [
      { filename: "product_images", url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ7c7d5FNTWxVPwba0EzlxDxloF5KqzLv2FvtDKNIPHI7zbXn21Bu3WRdLKub6WX5w10u06TFjpnRlTS6rsH0XWtvNQ3eDQdg" },
      { filename: "product_images", url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDIfA2DnRmRctrwIkzGdTXwLkcKhJft07FUPF2n2XH5R-ENUG_UgqGy8ix8zkiN28TCET1_M0GoMbNT_1q6kcKMneYFVMjxe3gjHjhTuA-B0V_HPV-tRS5" }
    ]
  },
  {
    title: 'Crystal Pendant Necklace',
    description: 'A delicate pendant with a crystal charm — this necklace brings a hint of sparkle to any outfit. Ideal for casual to semi-formal wear.',
    productPrice: 999,
    offerPrice: 749,
    gender: 'Woman',
    category: 'Necklaces',
    inStock: true,
    product_images: [
      { filename: "product_images", url: "https://rukminim2.flixcart.com/image/832/832/xif0q/pendant-locket/n/i/d/na-na-blue-glass-healing-crystal-hexagonal-point-prism-pencil-original-imagr7yfhtx2w4hz.jpeg?q=70&crop=false" },
      { filename: "product_images", url: "https://rukminim2.flixcart.com/image/832/832/xif0q/pendant-locket/y/g/m/na-na-blue-glass-healing-crystal-hexagonal-point-prism-pencil-original-imagr7yfavstbzyd.jpeg?q=70&crop=false" },
    ]
  },
  {
    title: 'Classic Leather Watch',
    description: 'Minimal design meets timeless elegance. This unisex leather strap watch is perfect for daily wear and formal occasions alike.',
    productPrice: 1999,
    offerPrice: 1599,
    gender: 'Man',
    category: 'Jewellery Sets',
    inStock: true,
    product_images: [
      { filename: "product_images", url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaSmb1DpA6i54YESGQGhg6e56z0FhGvAIby_GUzuhDgkoNx8fWV4IPck1iYpDCZRL0s7PLe6KvksZSt8kKXlzieJ_NPl28ZKcld4abhPBvYl8pUq_YkCtw0Q" },
      { filename: "product_images", url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTY0FjPPTtuv4cDGqdNBdwXYPZ-VnNuk8YGnvbTusO0-AIbT-4D1nvWn_j3GKsn_lMuBIy0JvWlygIumoZSp8jCI8d-62SDnKLmSH8oG8RU" }
    ]
  },
  {
    title: 'Vintage Round Sunglasses',
    description: 'Retro round frames with tinted lenses that give off serious 70s vibes. Comfortable, lightweight, and endlessly cool.',
    productPrice: 899,
    offerPrice: 599,
    gender: 'Man',
    category: 'Sunglasses',
    inStock: false,
    product_images: [
      { filename: "product_images", url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqWdqgRsIU7M7MVEzrD1cERanVfDJBqPs6acsWIYuiH7mplBVVxBHBwEI0uQ9-mxFidmdLYI00UG7qrD5YpyUB33uTdn3PChgMESCARe2vfp33PCB2bG96tg" },
      { filename: "product_images", url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSX-m9xL2wBdO6ZdcJPBikbvASpowQOq_YbRMzC1iFMsX-8b-a5kUbqKfjUyd186WtD_yQEyaf5vjP4jdcXHhy_ViSnbkIg9uj9Tt1LsiJ6EjjCZqaRBfR2-eg" },
      { filename: "product_images", url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT5WFnCNV7WxJQXV9st6cI7-J0zdRYZxkJukCoEzmFVqqfiqsvuGtY1FHk3lRuezCSyqbTjuiA6zpzhhfX0hYWJLtPaiWACbsbE0jMaZvcWzIElheti_q64wkQ" },
      { filename: "product_images", url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRVgx_cBK_ykIx0kL1cpk0wSW_JR-lEekIbc5UJJ_MT18oeT0YAoAhPkB34q7NzkfU3yNPukvMhHZQbAZAO1Hl6rcdqH0EwlmDcs2vAhtgIfw9PeKaKTJfEbuE" }
    ]
  },
  {
    title: 'Pearl Drop Earrings',
    description: 'Elegant and classy — these pearl drop earrings add grace to any look. A must-have for formal events and date nights.',
    productPrice: 499,
    offerPrice: 349,
    gender: 'Woman',
    category: 'Earrings',
    inStock: true,
    product_images: [
      { filename: "product_images", url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNOt2Bc1x31fvcZHwooovzRQq_u9r_jJBE-ysyhLqNyRXQbi9J4CFW7-ZR8MquGXrV1h_nnCS0IevpE-k6AFSfHogNP8IM" },
      { filename: "product_images", url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSH3isUKUtLHrzsWdcBCat265R5Q8EiXsZSQVbzAjnTHOB0SYGGBNRNB75cq2HQArQcstIWO7zaV_Yiy61Nroa0lMfMSg6n79aHLAoXJKqEBJ1CXFPuM9p8" },
      { filename: "product_images", url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRuJDx7TS5dunUA4_HRlK5mOoePhqSxhH0VqZqtVU1qe3wxTTZ9YOFVDXOZz8LQq45pi6uAcsOdCWfdg9OV0tELq1DCXJAQMu7bKe6Xdp2KcGcKllXMQ2sa9g" }
    ]
  }
];


module.exports = products