const fs = require('fs');

const newRooms = [
  {
    "id": 1,
    "name": "One Bedroom Water Reserve with Slide",
    "rating": 9.9,
    "size": "555m²",
    "guests": "Two adults and two children/infants or three adults and one child/infant.",
    "bed": "1 King Bed or 1 Twin Bed (configurations available)",
    "view": "Ocean",
    "features": [
      "Private pool",
      "Water slide",
      "Retractable roof",
      "Spacious sleeping, living, and dining areas",
      "Catamaran nets",
      "Outdoor deck"
    ],
    "description": "Perfect for a sunny escape, this overwater villa features a retractable roof, spacious sleeping, living and dining areas, a private freshwater pool and water slide.",
    "images": [
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/wvbsioez4cvis28njcl.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/ckx7jjttzze7ds2og4bpp.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/yl8dis01ilgncbop3duo.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/p90v3q9mnwnyk8f3dqqi.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/vrw5pu7o8ibnoklv4vgt.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/j8pd49es7mpb5tkcckcm.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/d9mmp8o1kc5e6fo0hei.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/kimjjlmsngxvuvr83jn.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/roqu91jumqm16l1rz8s.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/c3xsyx281ul40qvo06y25.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/23eoeyf0l9if7ysrakr5.webp"
    ],
    "roomAmenities": [
      { "category": "Kitchen", "items": ["Coffee machine", "Fridge"] },
      { "category": "Living Space", "items": ["Lounge area"] },
      { "category": "Internet & Office", "items": ["Desk", "Wi-Fi"] },
      { "category": "Bedroom, Bathroom & Laundry", "items": ["Bathtub", "Rain shower"] },
      { "category": "Entertainment", "items": ["TV", "DVD player", "Sound system"] },
      { "category": "General", "items": ["King bed", "Water slide", "Children's sleeping area", "Catamaran nets", "Outdoor deck", "Overhead fans", "Tea and coffee-making facilities", "Private pool", "Ocean views", "Minibar (charges apply)", "Sun loungers", "In-room safe", "Air conditioning", "Dining area"] }
    ]
  },
  {
    "id": 2,
    "name": "Two Bedroom Water Reserve with Slide",
    "rating": 9.8,
    "size": "772m²",
    "guests": "Four adults and two children/infants.",
    "bed": "2 King Beds",
    "view": "Ocean",
    "features": [
      "Private pool",
      "Water slide",
      "Retractable roof",
      "Roof deck",
      "Spacious living and dining areas",
      "Upstairs deck with daybeds",
      "Catamaran nets"
    ],
    "description": "Awaken to clear skies with this two-bedroom overwater villa, with a retractable roof, roof deck, spacious living and dining areas and upstairs deck with daybeds, catamaran nets and a water slide.",
    "images": [
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/0ifcj9v0u8wln5w6ejn.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/nihkz54ev1qjk0i0yo3q.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/bli2u9dw3fvtewo3aqqg.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/govkq9kyx9bjldpakxta.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/6vdfqy4btjs1pnp5z77.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/3lv3o20w2j9le0px8l4n.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/hhquw0ae74102k99m5fi.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/luaq6pq5bfffct4imyx5.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/3tgir6udqam0eugf4v8.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/lpgiw9n3xn36nb7dsul6l.webp"
    ],
    "roomAmenities": [
      { "category": "Kitchen", "items": ["Fridge", "Coffee machine"] },
      { "category": "Living Space", "items": ["Lounge area", "Dining area"] },
      { "category": "Internet & Office", "items": ["Desk", "Wi-Fi"] },
      { "category": "Bedroom, Bathroom & Laundry", "items": ["Bathtub", "Rain shower"] },
      { "category": "Entertainment", "items": ["TV", "DVD player", "Sound system"] },
      { "category": "General", "items": ["Air conditioning", "In-room safe", "Sun loungers", "Minibar (charges apply)", "Private pool", "Tea and coffee-making facilities", "Overhead fans", "Outdoor deck", "Catamaran nets", "Children's sleeping area", "Water slide", "Two king beds", "Ocean views"] }
    ]
  },
  {
    "id": 3,
    "name": "Three Bedroom Island Reserve with Slide",
    "rating": 9.9,
    "size": "1796m²",
    "guests": "Six adults and two children/infants.",
    "bed": "3 King Beds",
    "view": "Beachfront",
    "features": [
      "Private pool",
      "Water slide",
      "Private gym",
      "Sauna",
      "Wine vault",
      "Viewing tower",
      "Spacious living, dining, and kitchen areas"
    ],
    "description": "Enjoy a lofty lunch from the dining table and viewing tower of this colossal three-bedroom beachfront villa, with spacious living, dining and kitchen areas, a wine vault, private gym and sauna as well as a private pool and water slide.",
    "images": [
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/cm2nr7yrxpzl1i2ics.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/m12pvhc7v69r0c4yjqh.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/a1s1ck5isfw3wxeplvb6.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/2wbu7y7cldwiwqg4noj.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/zzx9lmbxkammep4yj9h.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/1bl5ajqzyoae144tgqp.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/unh4y0vrmdut7gb5183.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/tor0bobwwd0y58er4oiy.webp"
    ],
    "roomAmenities": [
      { "category": "Kitchen", "items": ["Coffee machine", "Kitchenette"] },
      { "category": "Living Space", "items": ["Lounge area", "Dining area", "Wine vault", "Library"] },
      { "category": "Internet & Office", "items": ["Desk", "Wi-Fi"] },
      { "category": "Bedroom, Bathroom & Laundry", "items": ["Bathtub", "Rain shower"] },
      { "category": "Health", "items": ["Sauna", "Private gym"] },
      { "category": "Entertainment", "items": ["TV", "DVD player", "Sound system"] },
      { "category": "Outdoors", "items": ["Terrace", "Outdoor deck"] },
      { "category": "General", "items": ["In-room safe", "Air conditioning", "Sun loungers", "Minibar (charges apply)", "Private pool", "Tea and coffee-making facilities", "Overhead fans", "Catamaran nets", "Children's sleeping area", "Water slide", "Three king beds", "Children's treehouse"] }
    ]
  },
  {
    "id": 4,
    "name": "Four Bedroom Island Reserve with Slide",
    "rating": 9.9,
    "size": "1421m²",
    "guests": "Eight adults and two children/infants.",
    "bed": "4 King Beds",
    "view": "Beachfront",
    "features": [
      "Private pool",
      "Water slide",
      "Private gym",
      "Sauna",
      "Wine vault",
      "Spacious living, dining, and kitchen areas"
    ],
    "description": "This luxurious beachfront mansion has it all, boasting exquisite driftwood-themed decor, four expansive bedrooms, living, dining and kitchen areas as well as a sauna, wine vault, swimming pool and waterslide.",
    "images": [
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/ocdil5tagnz1w6muku.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/03jduejkui0wdtvj293g.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/l8j5o2bdvazw7bln2v7.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/u48hi9ezaqna7v1xk2j.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/v6p9wge5yfqd2tlq5yu5.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/i9no3lu7j9lcpvln79a8.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/haqdgussoeeeg7w8k23e.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/8vjdounwnija99ee1848.webp"
    ],
    "roomAmenities": [
      { "category": "Kitchen", "items": ["Coffee machine", "Kitchenette", "Wine fridge"] },
      { "category": "Living Space", "items": ["Lounge area", "Dining area", "Wine vault", "Library"] },
      { "category": "Internet & Office", "items": ["Desk", "Wi-Fi"] },
      { "category": "Bedroom, Bathroom & Laundry", "items": ["Bathtub", "Rain shower"] },
      { "category": "Health", "items": ["Sauna", "Private gym"] },
      { "category": "Entertainment", "items": ["TV", "DVD player", "Sound system"] },
      { "category": "Outdoors", "items": ["Terrace", "Outdoor deck"] },
      { "category": "General", "items": ["Water slide", "Children's sleeping area", "Catamaran nets", "Overhead fans", "Tea and coffee-making facilities", "Private pool", "Minibar (charges apply)", "In-room safe", "Sun loungers", "Four king beds", "Air conditioning"] }
    ]
  },
  {
    "id": 5,
    "name": "Four Bedroom Water Reserve with Slide",
    "rating": 9.9,
    "size": "1421m²",
    "guests": "Eight adults and two children/infants.",
    "bed": "4 King Beds",
    "view": "Ocean",
    "features": [
      "Private pool",
      "Water slide",
      "Two floors",
      "Kitchenette",
      "Living and dining areas",
      "Spacious outdoor deck",
      "Direct access to the atoll"
    ],
    "description": "A floating palace spread across two floors, this residence provides four bedrooms, a kitchenette, living and dining areas with ocean-inspired decor, as well as a spacious outdoor deck, private pool and a water slide with direct access to the atoll.",
    "images": [
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/1xoblf4dmpr82wo7dcgl.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/050q8axd9h6rskry4uh.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/qchfl4jag2b8v252am4x.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/0gg6lu2ci5teihh27k5.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/2n04ts380n5g94ivqh0v.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/z9qopj7qmmlfr90uvm7.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/61s9jrm70lgovsgy5zio.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/ya1zzzftpwd1j40ubat.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/030zzb6rntqn6jauiaf.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/ybr7hzcm3rud2vthwq.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/rubcpa7fp4unhavfvnu.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/7xrjgsxqsk8kc6bobmc8.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/9ke6yimz5jltcvax7osw.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/62uk04q8voqtj0sk7t4.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/stdlpj34enyan99dc7h.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/6uhaoemilwzrkkrxb89.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/b4bptpz58ef3d9kb8tr6.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/lokpx4wnnbg4jkyyucy.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/xn7bz2x7egl1pz5jys9i.webp"
    ],
    "roomAmenities": [
      { "category": "Kitchen", "items": ["Coffee machine", "Kitchenette"] },
      { "category": "Living Space", "items": ["Lounge area", "Dining area", "Library"] },
      { "category": "Internet & Office", "items": ["Desk", "Wi-Fi"] },
      { "category": "Bedroom, Bathroom & Laundry", "items": ["Bathtub", "Rain shower"] },
      { "category": "Health", "items": ["Sauna", "Private gym"] },
      { "category": "Entertainment", "items": ["TV", "DVD player", "Sound system"] },
      { "category": "General", "items": ["Ocean views", "Swing", "Four king beds", "Water slide", "Children's sleeping area", "Catamaran nets", "Outdoor deck", "Overhead fans", "Tea and coffee-making facilities", "Private pool", "Minibar (charges apply)", "Sun loungers", "In-room safe", "Air conditioning"] }
    ]
  },
  {
    "id": 6,
    "name": "Two Bedroom Island Retreat with Slide",
    "rating": 9.7,
    "size": "445m²",
    "guests": "Four adults and two children/infants.",
    "bed": "2 King Beds",
    "view": "Garden / Beach",
    "features": [
      "Private pool",
      "Water slide",
      "Separate living and dining areas",
      "Terrace"
    ],
    "description": "Hide away in this luxurious two-bedroom beachfront retreat complete with its own private pool, water slide, spacious living room, dining area, and all the modern comforts.",
    "images": [
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/no8npqftcpe4lwgkv8kk.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/w4x8nrxvafb76yuc2v9s.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/ndtokl48tqpviy4qge47.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/i6gjtmfkkc8o7nwzq82.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/7g655q0vsddi0ef8xiqy.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/tgnw72mag2rlly2fpgs.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/nj90h6adzalijzzdfqu.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/f4iq5zk9wvgym7jzddcu.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/ga731n0qba0rg3cqbo9t.webp"
    ],
    "roomAmenities": [
      { "category": "Bedroom", "items": ["Air conditioning", "Hypo-allergenic bedding available", "Phone", "Desk", "Premium bedding", "Separate sitting area", "Iron/ironing board (on request)", "Blackout drapes/curtains", "Down comforter", "Pillow menu", "Rollaway/extra beds (free)", "Wardrobe or closet"] },
      { "category": "Bathroom", "items": ["Bathrobes", "Free toiletries", "Hair dryer", "Deep soaking bathtub", "Bathtub or shower", "Towels provided"] },
      { "category": "Entertainment", "items": ["Television", "Pay movies", "Flat-panel TV"] },
      { "category": "Internet", "items": ["Free WiFi", "Free wired internet"] },
      { "category": "Food and drink", "items": ["Refrigerator", "Minibar", "Coffee/tea maker", "Kitchenette", "Room service (24 hours)", "Free bottled water", "Microwave (on request)", "Separate dining area", "Freezer", "Dining table"] },
      { "category": "Family friendly", "items": ["Free cribs/infant beds"] },
      { "category": "More", "items": ["In-room safe", "Ceiling fan", "Turndown service", "Slippers", "Separate living room", "Non-Smoking", "Laptop-friendly workspace"] }
    ]
  },
  {
    "id": 7,
    "name": "Four Bedroom Water Retreat with Slide",
    "rating": 9.9,
    "size": "1226m²",
    "guests": "Eight adults and two children/infants.",
    "bed": "4 King Beds",
    "view": "Ocean",
    "features": [
      "Private pool",
      "Water slide",
      "Separate living and dining areas",
      "Kitchenette",
      "Sauna"
    ],
    "description": "An opulent four-bedroom overwater escape offering sweeping ocean views, luxurious indoor and outdoor living areas, a private sauna, expansive pool, and a water slide plunging into the crystal-clear lagoon.",
    "images": [
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/0dmcpw8cssuelfrvtx8i.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/8d9jfefq3bbwshc47j.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/pn4ge9nwt53i8mb74vqp.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/tkxv1v8waon4lw7fp66m.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/lfwjzom0b7ee0co4m1v.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/5jpogx67jsfmrigu7zvs.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/5uob1aptycjpxk9n2r8.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/11h110hxpsx1psrrc598.webp"
    ],
    "roomAmenities": [
      { "category": "Bedroom", "items": ["Air conditioning", "Premium bedding", "Sofa bed", "Pillow menu"] },
      { "category": "Bathroom", "items": ["Bathrobes", "Deep soaking bathtub", "Towels provided"] },
      { "category": "Entertainment", "items": ["Flat-panel TV"] },
      { "category": "Internet", "items": ["Free WiFi"] },
      { "category": "Food and drink", "items": ["Refrigerator", "Minibar", "Kitchenette", "Room service"] },
      { "category": "More", "items": ["In-room safe", "Ceiling fan", "Turndown service"] }
    ]
  },
  {
    "id": 8,
    "name": "One Bedroom Island Family Retreat",
    "rating": 9.7,
    "size": "479m²",
    "guests": "Three adults and two children/infants.",
    "bed": "1 King Bed",
    "view": "Garden / Beach",
    "features": [
      "Separate living and dining areas",
      "Kitchenette",
      "Terrace"
    ],
    "description": "Perfect for families, this spacious island retreat provides direct beach access, a kitchenette, and separate areas to relax, dine, and reconnect with loved ones.",
    "images": [
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/woe15brdcag49o96e3t.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/mats1yhfg5b07ocy6rw.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/yfv8dy5dcmnduao6k9x9.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/po4n0cl71eautrqdhr2u.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/qrmdiqoomgocpw3om5yp.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/r4fob7clc53x4hqs2zma.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/qfi8nk8pwhfm411ksdlb.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/t4r9decxdak44t2rd4fo.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/z9wqbsoymfsk81yhcsuj.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/70ji3r9qdvjdius684a.webp"
    ],
    "roomAmenities": [
      { "category": "Bedroom", "items": ["Air conditioning", "Hypo-allergenic bedding available", "Premium bedding"] },
      { "category": "Bathroom", "items": ["Bathrobes", "Deep soaking bathtub"] },
      { "category": "Entertainment", "items": ["Flat-panel TV"] },
      { "category": "Internet", "items": ["Free WiFi"] },
      { "category": "Food and drink", "items": ["Minibar", "Kitchenette", "Room service"] },
      { "category": "More", "items": ["In-room safe", "Turndown service", "Separate living room"] }
    ]
  },
  {
    "id": 9,
    "name": "One Bedroom Water Retreat with Slide",
    "rating": 9.8,
    "size": "411m²",
    "guests": "Three adults and two children/infants.",
    "bed": "1 King Bed or 1 Twin Bed (configurations available)",
    "view": "Ocean",
    "features": [
      "Private pool",
      "Water slide",
      "Separate living and dining areas",
      "Kitchenette"
    ],
    "description": "Embrace the beauty of the ocean in this gorgeous water retreat, featuring its own kitchenette, sun-drenched private pool, and a water slide into the sea.",
    "images": [
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/3bjmgsmaew2el4kbhx8.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/xgioqegob1f0fzkgizt.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/ne3xzmmiqfi7iu1zwea4.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/1c6e75jeih7r4xk11mhb.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/i4ln6qyu1ikwpgyidhwe.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/o8gmtr55q8wsohu7v7s9.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/dm24xmjkf0mxyzhzd9s.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/w8yrbc1bpmgj01ir3wqg.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/ryoidjg6yveji4m4n4tc.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/31ntiz0ret6kbjl8tpg.webp"
    ],
    "roomAmenities": [
      { "category": "Bedroom", "items": ["Air conditioning", "Premium bedding"] },
      { "category": "Bathroom", "items": ["Bathrobes", "Deep soaking bathtub"] },
      { "category": "Internet", "items": ["Free WiFi"] },
      { "category": "Food and drink", "items": ["Refrigerator", "Minibar", "Kitchenette"] },
      { "category": "More", "items": ["In-room safe", "Separate living room"] }
    ]
  },
  {
    "id": 10,
    "name": "Three Bedroom Water Retreat with Slide",
    "rating": 9.9,
    "size": "625m²",
    "guests": "Six adults and two children/infants.",
    "bed": "3 King Beds",
    "view": "Ocean",
    "features": [
      "Private pool",
      "Water slide",
      "Separate living and dining areas",
      "Kitchenette",
      "Sauna"
    ],
    "description": "An incredibly spacious three-bedroom retreat perched above the water, complete with a sauna, extended living spaces, multiple decks, and an epic private water slide.",
    "images": [
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/0nst7c4ep3w85cvb16ak.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/qbyqlxgocezljlc1z34k.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/3bjuvzr6zv4w5ln0p3hp.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/7wf7wo7178o70crd7vqi.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/u2r15ibemtw9np2c1s1.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/qeqb15dzib3y72tlmx3b.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/jsvucj61pspecd7m12c.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/v3k1oayuxg2hbl9jqje.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/v7fw20a2kctzy7181stc.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/y78a5i8fz9x5u0trf6a.webp"
    ],
    "roomAmenities": [
      { "category": "Bedroom", "items": ["Air conditioning", "Sofa bed"] },
      { "category": "Bathroom", "items": ["Bathrobes", "Deep soaking bathtub"] },
      { "category": "Internet", "items": ["Free WiFi"] },
      { "category": "Food and drink", "items": ["Minibar", "Kitchenette"] },
      { "category": "More", "items": ["In-room safe", "Separate living room"] }
    ]
  },
  {
    "id": 11,
    "name": "Two Bedroom Water Retreat with Slide",
    "rating": 9.8,
    "size": "520m²",
    "guests": "Four adults and two children/infants.",
    "bed": "2 King Beds",
    "view": "Ocean",
    "features": [
      "Private pool",
      "Water slide",
      "Separate living and dining areas",
      "Kitchenette",
      "Terrace"
    ],
    "description": "With a beautiful outdoor terrace and an exclusive water slide, this two-bedroom retreat is the ultimate getaway for friends or family wanting direct access to the sea.",
    "images": [
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/tzgduvoe1by2ecsuhomv.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/fuuembv1egpzgcv3aboe.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/f1e61rg073l15jk8cln.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/yth8cwwvj6w412kwlqt.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/onsw4rwv41uuvc3d83g.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/hqe19ksrhbsam45dyb38.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/y9xafsjsinwbwwx0q2p.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/rbbbeycnjpoahcsl73f.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/vtgt4kdyuzummazd9yi.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/n809e3nierumfb6t23a.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/uxliq3z9lhh6deomk5u.webp",
      "https://images.luxuryescapes.com/fl_progressive,q_auto:good,c_fill,g_auto,w_1920,ar_16:9/x9mpyx3bnpqp5eu2bs.webp"
    ],
    "roomAmenities": [
      { "category": "Bedroom", "items": ["Air conditioning", "Sofa bed", "Premium bedding"] },
      { "category": "Bathroom", "items": ["Bathrobes", "Deep soaking bathtub"] },
      { "category": "Internet", "items": ["Free WiFi"] },
      { "category": "Food and drink", "items": ["Refrigerator", "Minibar", "Kitchenette"] },
      { "category": "More", "items": ["In-room safe", "Separate living room"] }
    ]
  }
];

const fileContent = fs.readFileSync('src/data/resort.ts', 'utf8');

// The rooms array starts at `"rooms": [` and ends at the closing `],` just before `"rates": [`
// A robust way is to just replace the whole rooms block using a regex or simple string operations.

const startMarker = '"rooms": [';
const endMarker = '  "rates": [';

const startIndex = fileContent.indexOf(startMarker);
const endIndex = fileContent.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  // Find the closing bracket of the rooms array which is before the endMarker
  const contentBefore = fileContent.substring(0, startIndex);
  const contentAfter = fileContent.substring(endIndex);

  const newRoomsStr = '"rooms": ' + JSON.stringify(newRooms, null, 4) + ',\n';

  fs.writeFileSync('src/data/resort.ts', contentBefore + newRoomsStr + contentAfter);
  console.log("Rooms updated successfully!");
} else {
  console.log("Could not find markers.");
}
