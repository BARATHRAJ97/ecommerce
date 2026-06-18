const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const cartCount = document.querySelector("#cartCount");
const forms = document.querySelectorAll("form");
const productGrid = document.querySelector("#productGrid");
const productCount = document.querySelector("#productCount");

const products = [
  { type: "Footwear", name: "AeroRun Pro Sneakers", price: 98, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80", description: "Breathable performance sneakers for work, travel, and training." },
  { type: "Electronics", name: "Pulse Max Headphones", price: 129, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80", description: "Wireless audio with soft cushions and powerful battery life." },
  { type: "Accessories", name: "Nordic Time Watch", price: 89, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80", description: "Minimal watch with a stainless case and clean everyday dial." },
  { type: "Beauty", name: "Luna Bloom Perfume", price: 59, image: "https://images.unsplash.com/photo-1585386959984-a41552231658?auto=format&fit=crop&w=800&q=80", description: "Soft floral fragrance with amber base notes and premium bottle." },
  { type: "Skincare", name: "Glow Care Set", price: 46, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80", description: "Cleanser, toner, and moisturizer for a balanced daily routine." },
  { type: "Fashion", name: "Velvet Step Heels", price: 74, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80", description: "Elegant heels with a supportive insole for evening looks." },
  { type: "Home", name: "CloudRest Accent Chair", price: 210, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80", description: "Comfortable lounge seating with durable fabric and clean lines." },
  { type: "Workspace", name: "DeskFlow Organizer", price: 39, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", description: "Smart desktop storage for cables, tools, notes, and devices." },
  { type: "Bags", name: "Metro Carry Tote", price: 64, image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80", description: "Roomy everyday tote with structured shape and secure pockets." },
  { type: "Kitchen", name: "BrewMate Coffee Maker", price: 118, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80", description: "Compact brewer for smooth morning coffee and easy cleanup." },
  { type: "Lighting", name: "Halo Desk Lamp", price: 52, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80", description: "Adjustable lamp with warm light modes for reading and work." },
  { type: "Fitness", name: "CoreFlex Yoga Mat", price: 35, image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=80", description: "Non-slip mat with cushioned support for daily movement." },
  { type: "Travel", name: "Voyage Weekender Bag", price: 84, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80", description: "Durable travel bag with shoe pocket and cabin-friendly size." },
  { type: "Fashion", name: "Everyday Denim Jacket", price: 92, image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80", description: "Classic denim layer with relaxed fit and sturdy stitching." },
  { type: "Electronics", name: "Mini Bluetooth Speaker", price: 48, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80", description: "Portable speaker with clear sound for rooms, trips, and picnics." },
  { type: "Home", name: "SoftWeave Throw Blanket", price: 42, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80", description: "Cozy woven throw for sofas, beds, and reading corners." },
  { type: "Beauty", name: "Rose Quartz Roller", price: 24, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80", description: "Cooling facial roller for a calm, refreshed skincare routine." },
  { type: "Accessories", name: "Aviator Sunglasses", price: 57, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80", description: "UV-protective lenses with a timeless metal frame." },
  { type: "Kitchen", name: "Ceramic Dinner Set", price: 76, image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=800&q=80", description: "Matte ceramic plates and bowls for elegant everyday dining." },
  { type: "Tech", name: "ChargeHub Wireless Pad", price: 32, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80", description: "Slim wireless charging pad for phones and compact accessories." },
  { type: "Footwear", name: "Urban White Trainers", price: 86, image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80", description: "Clean white trainers with cushioned comfort and daily versatility." },
  { type: "Fashion", name: "Linen Summer Shirt", price: 49, image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80", description: "Breathable linen blend shirt with a relaxed warm-weather fit." },
  { type: "Home", name: "Marble Side Table", price: 145, image: "https://images.unsplash.com/photo-1532372320572-cda25653a694?auto=format&fit=crop&w=800&q=80", description: "Compact accent table with a polished top and metal base." },
  { type: "Skincare", name: "Hydra Calm Serum", price: 38, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80", description: "Lightweight hydrating serum for smooth daily skin comfort." },
  { type: "Electronics", name: "SmartFit Band", price: 69, image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=800&q=80", description: "Fitness tracker with heart rate, step count, and sleep insights." },
  { type: "Decor", name: "Terra Ceramic Vase", price: 44, image: "https://images.unsplash.com/photo-1612196808214-b40b9f60436f?auto=format&fit=crop&w=800&q=80", description: "Sculptural vase that adds warmth to shelves and tabletops." },
  { type: "Bags", name: "CityLine Backpack", price: 79, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80", description: "Daily backpack with laptop sleeve and water-resistant finish." },
  { type: "Beauty", name: "Matte Lip Color Trio", price: 29, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80", description: "Three rich lip shades with comfortable matte wear." },
  { type: "Kitchen", name: "Oak Cutting Board", price: 31, image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80", description: "Durable wooden prep board for chopping, serving, and styling." },
  { type: "Workspace", name: "Ergo Laptop Stand", price: 58, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80", description: "Aluminum stand that improves screen height and desk airflow." },
  { type: "Fitness", name: "Steel Water Bottle", price: 27, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80", description: "Insulated bottle that keeps drinks cold through long days." },
  { type: "Fashion", name: "Classic Leather Belt", price: 36, image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80", description: "Full-grain look belt with a clean buckle and daily durability." },
  { type: "Home", name: "Cotton Sheet Set", price: 68, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80", description: "Soft breathable sheets with a smooth hotel-style finish." },
  { type: "Electronics", name: "StreamCam Mini", price: 95, image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80", description: "Compact webcam for crisp video calls, classes, and streams." },
  { type: "Accessories", name: "Pearl Drop Earrings", price: 41, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80", description: "Elegant earrings with a polished finish for day or evening." },
  { type: "Travel", name: "Packing Cube Set", price: 26, image: "https://images.unsplash.com/photo-1553531889-56cc480ac5cb?auto=format&fit=crop&w=800&q=80", description: "Lightweight organizers that keep luggage neat and easy to unpack." },
  { type: "Beauty", name: "Daily Brush Collection", price: 34, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80", description: "Soft makeup brushes for blending, detail work, and travel." },
  { type: "Footwear", name: "TrailGrip Runners", price: 112, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80", description: "Supportive outdoor runners with strong grip and padded heel." },
  { type: "Home", name: "Aroma Diffuser", price: 55, image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80", description: "Quiet diffuser with soft mist and calming ambient light." },
  { type: "Tech", name: "Compact Power Bank", price: 43, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80", description: "Pocket-friendly backup power for travel, work, and school." },
  { type: "Fashion", name: "Ribbed Knit Dress", price: 72, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80", description: "Soft ribbed dress with an easy silhouette and polished texture." },
  { type: "Kitchen", name: "Glass Storage Jars", price: 33, image: "https://images.unsplash.com/photo-1584473457409-cef688773c38?auto=format&fit=crop&w=800&q=80", description: "Airtight jars for pantry organization and clean countertop storage." },
  { type: "Workspace", name: "Focus Noise Earbuds", price: 119, image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80", description: "Compact earbuds with clear calls and active noise reduction." },
  { type: "Decor", name: "Gallery Frame Set", price: 62, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80", description: "Matching frames for photos, art prints, and wall styling." },
  { type: "Skincare", name: "Mineral Sunscreen SPF 40", price: 30, image: "https://images.unsplash.com/photo-1620756236308-65c3ef5d25f3?auto=format&fit=crop&w=800&q=80", description: "Light daily sunscreen with a comfortable non-greasy feel." },
  { type: "Accessories", name: "Canvas Bucket Hat", price: 28, image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80", description: "Casual sun hat with a soft brim and easy packable shape." },
  { type: "Fitness", name: "Adjustable Dumbbell Pair", price: 155, image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80", description: "Space-saving adjustable weights for strength training at home." },
  { type: "Home", name: "Minimal Wall Clock", price: 47, image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80", description: "Quiet wall clock with simple markers and modern styling." },
  { type: "Travel", name: "Neck Comfort Pillow", price: 25, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80", description: "Supportive travel pillow for flights, buses, and long commutes." },
  { type: "Electronics", name: "Tablet Sketch Pen", price: 66, image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80", description: "Responsive stylus for notes, sketches, signatures, and planning." }
];

let cartItems = Number(localStorage.getItem("urbanCartItems") || 0);

if (cartCount) {
  cartCount.textContent = cartItems;
}

if (productGrid) {
  productGrid.innerHTML = products.map((product) => `
    <article class="product-card">
      <a href="product.html">
        <img src="${product.image}" alt="${product.name}">
      </a>
      <div class="product-info">
        <span class="product-type">${product.type}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-footer">
          <strong>$${product.price}</strong>
          <button class="add-cart">Add</button>
        </div>
      </div>
    </article>
  `).join("");
}

if (productCount) {
  productCount.textContent = `Showing ${products.length} popular products`;
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll(".add-cart").forEach((button) => {
  button.addEventListener("click", () => {
    cartItems += 1;
    localStorage.setItem("urbanCartItems", String(cartItems));

    if (cartCount) {
      cartCount.textContent = cartItems;
    }

    button.textContent = "Added";
    button.classList.add("added");

    window.setTimeout(() => {
      button.textContent = "Add";
      button.classList.remove("added");
    }, 1200);
  });
});

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = form.querySelector("button[type='submit']");

    if (!submitButton) return;

    const originalText = submitButton.textContent;
    submitButton.textContent = "Sent";

    window.setTimeout(() => {
      submitButton.textContent = originalText;
      form.reset();
    }, 1400);
  });
});
