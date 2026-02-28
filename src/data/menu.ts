export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags?: string[];
  recommended?: boolean;
  isNew?: boolean;
  popular?: boolean;
  pairsWith?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  items: MenuItem[];
}

const UNSPLASH = "https://images.unsplash.com";

// Categories with unique items (no duplicates)
const realCategories: MenuCategory[] = [
  {
    id: "burgers",
    name: "Burgers & Chivitos",
    emoji: "🍔",
    items: [
      {
        id: "burger-clasica",
        name: "Burger Clásica",
        description:
          "Carne 100% magra, lechuga, tomate, cebolla y salsa especial de la casa",
        price: 380,
        image: `${UNSPLASH}/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop`,
        category: "burgers",
      },
      {
        id: "burger-nueva-bomba",
        name: "Burger Nueva Bomba",
        description:
          "Hamburguesa MUY CASERA, carne 100% magra, cheddar, panceta crocante, morrón grillé, cebolla caramelizada",
        price: 480,
        image: `${UNSPLASH}/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop`,
        category: "burgers",
        tags: ["Popular"],
        recommended: true,
        popular: true,
        pairsWith: "Papas rústicas o una cerveza artesanal bien fría",
      },
      {
        id: "burger-doble",
        name: "Burger Doble Smash",
        description:
          "Doble carne smash, doble cheddar, cebolla crocante, pepinillos y salsa BBQ ahumada",
        price: 560,
        image: `${UNSPLASH}/photo-1586816001966-79b736744398?w=600&h=400&fit=crop`,
        category: "burgers",
        tags: ["Popular"],
        isNew: true,
      },
      {
        id: "burger-vegetariana",
        name: "Hamburguesa Vegetariana",
        description:
          "Doble hamburguesa de espinaca o coliflor, tomate, lechuga y cebolla colorada con salsa especial",
        price: 480,
        image: `${UNSPLASH}/photo-1520072959219-c595e6cdc07a?w=600&h=400&fit=crop`,
        category: "burgers",
        tags: ["Vegetariano"],
        recommended: true,
        pairsWith: "Limonada casera o jugo natural",
      },
      {
        id: "chivito-completo",
        name: "Chivito Completo",
        description:
          "Pan, lechuga, tomate, churrasco, muzzarella, panceta, jamón, huevo, con papas fritas",
        price: 550,
        image: `${UNSPLASH}/photo-1550547660-d9450f859349?w=600&h=400&fit=crop`,
        category: "burgers",
      },
      {
        id: "chivito-para-2",
        name: "Chivito para 2 c/ Guarnición",
        description:
          "Pan blando, lechuga, tomate, churrasco, muzzarella, panceta crocante, cebollita gourmet y huevo, con guarnición",
        price: 780,
        image: `${UNSPLASH}/photo-1550547660-d9450f859349?w=600&h=400&fit=crop`,
        category: "burgers",
        tags: ["Compartir"],
        recommended: true,
        pairsWith: "Ideal para compartir con una tabla de cervezas",
      },
    ],
  },
  {
    id: "parrilla",
    name: "Parrilla & Platos",
    emoji: "🥩",
    items: [
      {
        id: "churrasco-gourmet",
        name: "Churrasco Gourmet con Guarnición",
        description:
          "Tierno churrasco de cuadril con cebolla caramelizada, morrón, muzzarella y panceta. Guarniciones a elección",
        price: 680,
        image: `${UNSPLASH}/photo-1558030006-450675393462?w=600&h=400&fit=crop`,
        category: "parrilla",
        popular: true,
        recommended: true,
        pairsWith: "Ensalada fresca y un buen Tannat",
      },
      {
        id: "colita-cuadril",
        name: "Colita de Cuadril c/Guarnición",
        description:
          "Rodajones de colita de cuadril Angus con guarnición a elección",
        price: 650,
        image: `${UNSPLASH}/photo-1546833998-877b37c2e5c6?w=600&h=400&fit=crop`,
        category: "parrilla",
        recommended: true,
        pairsWith: "Ensalada mixta y vino tinto reserva",
      },
      {
        id: "milanesa-napo",
        name: "Milanesa Napolitana",
        description:
          "Tierno bife de milanesa cubierto con cheddar, salsa, jamón, muzzarella, panceta crocante y huevo, acompañado completo",
        price: 680,
        image: `${UNSPLASH}/photo-1632778149955-e80f8ceca2e8?w=600&h=400&fit=crop`,
        category: "parrilla",
        popular: true,
        recommended: true,
        pairsWith: "Papas fritas y una limonada bien helada",
      },
      {
        id: "super-gramajo",
        name: "Super Gramajo",
        description:
          "Gramajo tradicional con papas, huevo, cebolla, jamón premium, muzzarella, morrón y panceta",
        price: 520,
        image: `${UNSPLASH}/photo-1482049016688-2d3e1b311543?w=600&h=400&fit=crop`,
        category: "parrilla",
        recommended: true,
        pairsWith: "Pan casero tostado y cerveza rubia",
      },
      {
        id: "super-omelette",
        name: "Super Omelette",
        description:
          "Huevos de campo, jamón en trozos, queso gouda, morrón grillado, cebolla caramelizada, panceta, tomate y perejil",
        price: 520,
        image: `${UNSPLASH}/photo-1510693206972-df098062cb71?w=600&h=400&fit=crop`,
        category: "parrilla",
        recommended: true,
        pairsWith: "Café cortado y tostadas integrales",
      },
    ],
  },
  {
    id: "wraps",
    name: "Wraps & Tacos",
    emoji: "🌮",
    items: [
      {
        id: "tacos-mexicanos",
        name: "Tacos Mexicanos",
        description:
          "Tacos mexicanos de carne, pollo o con vegetales salteados",
        price: 480,
        image: `${UNSPLASH}/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop`,
        category: "wraps",
        tags: ["Opción Veggie"],
        recommended: true,
        pairsWith: "Nachos con guacamole y una Corona",
      },
      {
        id: "pan-de-pita",
        name: "Pan de Pita",
        description:
          "Pan árabe de pita relleno de cuadril, vegetales frescos y queso fundido. Opción pollo o vegetariana",
        price: 480,
        image: `${UNSPLASH}/photo-1529006557810-274b9b2fc783?w=600&h=400&fit=crop`,
        category: "wraps",
        tags: ["Opción Veggie"],
        recommended: true,
        pairsWith: "Salsa de yogur casera y papas rústicas",
      },
      {
        id: "wrap-pollo",
        name: "Wrap de Pollo Grillado",
        description:
          "Tortilla de trigo, pollo grillado, vegetales frescos, queso cheddar y salsa ranch",
        price: 450,
        image: `${UNSPLASH}/photo-1626700051175-6818013e1d4f?w=600&h=400&fit=crop`,
        category: "wraps",
      },
    ],
  },
  {
    id: "pizzas",
    name: "Pizzas a la Piedra",
    emoji: "🍕",
    items: [
      {
        id: "pizza-muzza",
        name: "Pizza Muzzarella",
        description:
          "Masa a la piedra, salsa de tomate casera y muzzarella gratinada",
        price: 420,
        image: `${UNSPLASH}/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop`,
        category: "pizzas",
        tags: ["Vegetariano"],
      },
      {
        id: "pizza-napolitana",
        name: "Pizza Napolitana",
        description:
          "Masa a la piedra, salsa, muzzarella, tomate en rodajas, ajo y albahaca fresca",
        price: 460,
        image: `${UNSPLASH}/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop`,
        category: "pizzas",
        tags: ["Vegetariano"],
      },
      {
        id: "pizza-especial",
        name: "Pizza Especial 3-11",
        description:
          "Masa a la piedra, salsa, muzzarella, panceta, morrón, cebolla caramelizada y huevo",
        price: 520,
        image: `${UNSPLASH}/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop`,
        category: "pizzas",
        popular: true,
      },
    ],
  },
  {
    id: "cafeteria",
    name: "Cafetería & Postres",
    emoji: "☕",
    items: [
      {
        id: "bagel-premium",
        name: "Bagel Premium",
        description:
          "Jamón serrano, cream cheese, panceta crocante, lomito canadiense, cheddar, cebolla caramelizada. Opción vegetariana disponible",
        price: 450,
        image: `${UNSPLASH}/photo-1627308595229-7830a5c91f9f?w=600&h=400&fit=crop`,
        category: "cafeteria",
        tags: ["Opción Veggie"],
        isNew: true,
        recommended: true,
        pairsWith: "Café de especialidad con leche de almendras",
      },
      {
        id: "merienda-compartir",
        name: "Merienda para Compartir",
        description:
          "Café, Cortado, Cappuccino, Té o Chocolate, Jugo de Naranja. Consultar resto de ingredientes",
        price: 1390,
        image: `${UNSPLASH}/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop`,
        category: "cafeteria",
        tags: ["Compartir"],
        recommended: true,
        pairsWith: "Perfecta para una pausa en la ruta",
      },
      {
        id: "cafe-especialidad",
        name: "Café de Especialidad",
        description:
          "Espresso, cortado, cappuccino o latte. Granos seleccionados tostados artesanalmente",
        price: 180,
        image: `${UNSPLASH}/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop`,
        category: "cafeteria",
        tags: ["Sin TACC"],
      },
      {
        id: "tostado-jyq",
        name: "Tostado Jamón y Queso",
        description:
          "Pan casero tostado con jamón premium y queso derretido",
        price: 280,
        image: `${UNSPLASH}/photo-1528735602780-2552fd46c7af?w=600&h=400&fit=crop`,
        category: "cafeteria",
      },
      {
        id: "super-bauru",
        name: "Super Bauru c/ Frit. o Rústicas",
        description:
          "Pan casero, salsa golf, choclo, arvejas, lechuga morada, tomate, carne picada premium, jamón, cheddar",
        price: 830,
        image: `${UNSPLASH}/photo-1509722747041-616f39b57569?w=600&h=400&fit=crop`,
        category: "cafeteria",
        recommended: true,
        pairsWith: "Papas rústicas con salsa cheddar",
      },
    ],
  },
  {
    id: "ensaladas",
    name: "Ensaladas",
    emoji: "🥗",
    items: [
      {
        id: "ensalada-caesar",
        name: "Ensalada Caesar",
        description:
          "Lechuga romana, pollo grillado, croutones, parmesano y aderezo Caesar casero",
        price: 420,
        image: `${UNSPLASH}/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop`,
        category: "ensaladas",
        tags: ["Sin TACC"],
      },
      {
        id: "ensalada-mixta",
        name: "Ensalada Mixta",
        description:
          "Lechuga, tomate, zanahoria rallada, choclo, huevo y aceitunas",
        price: 320,
        image: `${UNSPLASH}/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop`,
        category: "ensaladas",
        tags: ["Vegetariano", "Sin TACC"],
      },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    emoji: "🍺",
    items: [
      {
        id: "cerveza-artesanal",
        name: "Cerveza Artesanal",
        description:
          "Selección de cervezas artesanales uruguayas. Consultar variedades disponibles",
        price: 220,
        image: `${UNSPLASH}/photo-1535958636474-b021ee887b13?w=600&h=400&fit=crop`,
        category: "bebidas",
        tags: ["Sin TACC"],
      },
      {
        id: "limonada-casera",
        name: "Limonada Casera",
        description: "Limonada exprimida al momento con menta y jengibre",
        price: 180,
        image: `${UNSPLASH}/photo-1621263764928-df1444c5e859?w=600&h=400&fit=crop`,
        category: "bebidas",
        tags: ["Sin TACC"],
      },
      {
        id: "jugo-naranja",
        name: "Jugo de Naranja Natural",
        description: "Naranja recién exprimida, 100% natural",
        price: 160,
        image: `${UNSPLASH}/photo-1613478223719-2ab802602d23?w=600&h=400&fit=crop`,
        category: "bebidas",
        tags: ["Sin TACC"],
      },
      {
        id: "agua-saborizada",
        name: "Agua Saborizada",
        description: "Agua con frutas frescas de estación",
        price: 140,
        image: `${UNSPLASH}/photo-1560023907-5f339617ea30?w=600&h=400&fit=crop`,
        category: "bebidas",
        tags: ["Sin TACC"],
      },
    ],
  },
  {
    id: "infantil",
    name: "Menú Infantil",
    emoji: "👶",
    items: [
      {
        id: "mini-burger",
        name: "Mini Burger",
        description:
          "Hamburguesa pequeña con queso, ketchup y papas fritas",
        price: 320,
        image: `${UNSPLASH}/photo-1572802419224-296b0aeee0d9?w=600&h=400&fit=crop`,
        category: "infantil",
      },
      {
        id: "nuggets",
        name: "Nuggets de Pollo",
        description:
          "Nuggets caseros de pollo con papas fritas y salsa a elección",
        price: 300,
        image: `${UNSPLASH}/photo-1562967914-608f82629710?w=600&h=400&fit=crop`,
        category: "infantil",
      },
      {
        id: "milanesa-infantil",
        name: "Milanesita con Papas",
        description: "Milanesa de pollo cortada en tiritas con papas fritas",
        price: 320,
        image: `${UNSPLASH}/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop`,
        category: "infantil",
      },
    ],
  },
];

// "Recomendados" is a virtual category built from recommended items across all categories
const recommendedItems = realCategories
  .flatMap((c) => c.items)
  .filter((item) => item.recommended);

export const menuCategories: MenuCategory[] = [
  {
    id: "recomendados",
    name: "Recomendados",
    emoji: "🔥",
    items: recommendedItems,
  },
  ...realCategories,
];

// Also add the "Pincho Tresonce" as a recommended item in a logical category
// It's a sharing platter, fits in parrilla
const pinchoItem: MenuItem = {
  id: "pincho-tresonce",
  name: "Pincho Tresonce para 3",
  description:
    "Tapas agridulces, arrolladitos primavera, brochettes de pollo con vegetales y empanaditas tucumanas",
  price: 1300,
  image: `${UNSPLASH}/photo-1544025162-d76694265947?w=600&h=400&fit=crop`,
  category: "parrilla",
  tags: ["Compartir"],
  recommended: true,
  pairsWith: "Cervezas artesanales variadas para la mesa",
};

// Insert pincho into parrilla category
realCategories
  .find((c) => c.id === "parrilla")!
  .items.push(pinchoItem);

export const allMenuItems: MenuItem[] = realCategories.flatMap((c) => c.items);

export const featuredItem: MenuItem = {
  id: "plato-del-dia",
  name: "Pincho Tresonce para 3",
  description:
    "Tapas agridulces, arrolladitos primavera, brochettes de pollo con vegetales y empanaditas tucumanas. Ideal para compartir en la ruta.",
  price: 1300,
  image: `${UNSPLASH}/photo-1544025162-d76694265947?w=600&h=400&fit=crop`,
  category: "recomendados",
  tags: ["Compartir"],
  recommended: true,
  pairsWith: "Cervezas artesanales variadas para la mesa",
};
