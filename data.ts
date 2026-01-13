export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  ingredients: string[];
  color: string; // Tailwind color class for shadow
  accentColor: string; // Hex for inline styles
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wild Apricot & Nomade Set",
    category: "Soap & Perfume",
    price: 24.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXp6GjXgE3_rcbktkYLlL-PjgrIh0FfrRj7ZoqjXk-NiMCxgNOuYAn8pY983WY7n_IqdtbfIrlA8-9o5RUNqxrRSMQFasMaqzpFQoH1fWA-OtZaQuWW0F5E3MpEyup7mN5TS41ab-0ybbdqaOcUiq6TpqvtwNj9ZE6uQDticcPe7qwbVv6H0fOdc21T7Wxm_b6DuiH3qyGeIR-h1AMOm08jIqtb7dRv7FMUyY6fR8170oVJNBUA4KJ_gDeFBnNTgdb9Jv6T35K0muC",
    description: "A revitalizing duo featuring Wild Apricot handmade soap and the adventurous Nomade solid cologne. Fruity, fresh, and grounding.",
    ingredients: ["Apricot Kernel Oil", "Glycerine", "Nomade Fragrance", "Shea Butter", "Vitamin E"],
    color: "shadow-orange-300",
    accentColor: "#FDBA74"
  },
  {
    id: 2,
    name: "Exfoliating Orange & Choir",
    category: "Soap & Perfume",
    price: 24.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKi_b2qp4o8ERsovZYExIgK6Gz91dJ0ON7j6WJtJWgykUSdtFy44wkHfTUQPFlovYmZOAh0BLbToVbf2ct4Auhw-VIJmkTkfcuRm15H7GiSq4X_18FgqohUdkTP3W0hukPcyKEg3pdOUq61DP35kNi8r2hPb0tYY6v2ElSabyqsqN70Xno0fWGA8zdX9E11T6FKKjeKfDDFDkkeOJRpmdCLNM5gPjKat6On3d8o5tbpNzDhVovRTnOjvvoF-CkT493KQ2BSgYRevmX",
    description: "Invigorate your senses with zesty Orange Peel soap and the harmonious notes of Choir solid perfume. A bright, uplifting combination.",
    ingredients: ["Orange Peel Extract", "Citrus Oils", "Choir Fragrance Blend", "Coconut Oil"],
    color: "shadow-amber-400",
    accentColor: "#FBBF24"
  },
  {
    id: 3,
    name: "Soothing Sandalwood & Nomade",
    category: "Soap & Perfume",
    price: 26.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCT-MlZAelv5zC0w_2d38KBodqn_rgf3Om_jHfz8pz4BDS4EGVz4-kPsKRreJm9m6RufZzW79WoYW901b5O6qgCgofH1TgmJ9bOpLPObpTcylcTVAlm8fI3daVi0oe870V2nLyM9CskAWWWaV5eACGh1q_32ySDQ659wgeqMQ_EW8BeZ-XaI3BgJxx9G48h2Dq_qoNWblG8NfCvg99Wik23xnC1-FaquMqNYQGUy6gRZlLvo74Zm7j1QS7TZOoVHDt9HSPT1DRULpV5",
    description: "Calm the mind and skin with creamy Sandalwood soap, paired with the grounding scent of Nomade. Ideal for sensitive skin.",
    ingredients: ["Sandalwood Oil", "Milk Protein", "Jojoba Oil", "Nomade Essence"],
    color: "shadow-stone-400",
    accentColor: "#A8A29E"
  },
  {
    id: 4,
    name: "Detox Charcoal & Woody Oud",
    category: "Soap & Perfume",
    price: 25.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDckcqjvdI9MwO39Zet7iX96hv09jn2XmTWLcgrpyUsk_BRdHs4ZQHQ5uOh7UGyopTkIy2-ulFABaR2uNHFuqKYRvHFFwYhKVZrnk0lp1Ty47c2VEqtxVRI3zvYvlk5jyFrR4UtNz3z1YI9XAaVoAmiOkpB9CjGYst_AA4W5oqKbeFg5OxSEExNLJIZoMNMDg-B3buc6jYq4P7K6qXL-UIhHOondIcvw2yiEED09HVsjB6tt4T2TGkXOOMh7fkWCmtT7RbD53RLBU1P",
    description: "Deep cleanse with Activated Charcoal and finish with the sophisticated, deep notes of Woody Oud. A powerful detox ritual.",
    ingredients: ["Activated Charcoal", "Oud Wood Extract", "Tea Tree Oil", "Vitamin E"],
    color: "shadow-gray-600",
    accentColor: "#4B5563"
  },
  {
    id: 5,
    name: "Healing Turmeric & Nomade",
    category: "Soap & Perfume",
    price: 24.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAURECO1reQ6h34WDDq22tyutlkPyN9QcxEzbJWCdmcGIjPAYzdVov1utaS8EFJtuuaPVlU_yzSeR3Qr-ewKKbbbiDesuTmZHWWt8742PF8icL0qLgvmqNzBq9dTcyGXqYjEYA_WjmMWEkNzkceqcN9I1tFefanKS_AKB0Xt1IXh2WkOkHt2zYw7mutHXKXSdtNRWKWFeuRqiY9OX4-qGLERNn8deihpzPoF0chcZB5QBfrv2XFS59neNcgMtsETL6pYD0BWl-UrZGa",
    description: "Harness the anti-inflammatory power of Turmeric alongside the signature Nomade scent. Restores glow and vitality.",
    ingredients: ["Turmeric Root Extract", "Coconut Oil", "Nomade Fragrance", "Honey"],
    color: "shadow-yellow-500",
    accentColor: "#EAB308"
  },
  {
    id: 6,
    name: "Brightening Milk Rose & Choir",
    category: "Soap & Perfume",
    price: 26.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGo-ONj0wHzfiiPfzJ6lujZ25U_OvQ3Dj0yXPl1GR6XNFx1O67JRAKUTtqeqHEZMWzImphSDdaWr5apY8sxvk7Nl51sGz8MuNaZgREpoxb-D6TT_mPPfjbZjrJkVLbTOD44YfxRvzu4rX5Lthp3MiJiUs_Xm94D9Is_i0rtxLP3Nbu8p2yTUS7X6rhNeagrV2qn-5fvE7V02JCrRG2Lak8wvA_eTy929KWBYBoaKHh4E5M0I9LxDacCwBsceK5hysOt3kOeuAwC6PL",
    description: "Luxurious Milk Rose soap meets the ethereal Choir perfume. Softens skin while leaving a delicate, lingering floral trail.",
    ingredients: ["Rose Extract", "Milk Protein", "Choir Scent Profile", "Almond Oil"],
    color: "shadow-pink-400",
    accentColor: "#F472B6"
  }
];