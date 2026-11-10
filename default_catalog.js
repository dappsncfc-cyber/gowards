const DEFAULT_CATALOG = [
  {
    "id": "pkg-1",
    "category": "Funeral Packages",
    "title": "Direct Unattended Cremation",
    "price": "£1,700.00 including disbursements",
    "description": "The provision of the Funeral Director’s services and attending to all necessary arrangements for the direct unattended cremation without guests permitted at Mintlyn Crematorium, who would choose the date and time of the direct unattended cremation or burial."
  },
  {
    "id": "pkg-2",
    "category": "Funeral Packages",
    "title": "Direct Unattended Burial",
    "price": "£1,970.00 including our fees*",
    "description": "The provision of the Funeral Director's services and attending to all necessary arrangements for the direct unattended burial without guests permitted."
  },
  {
    "id": "pkg-3",
    "category": "Funeral Packages",
    "title": "The Wensum Chapel",
    "price": "£2,200.00 inc. disbursements",
    "description": "The provision of the Funeral Director's services and attending to all necessary arrangements for the direct unattended cremation with a private service in our chapel."
  },
  {
    "id": "pkg-4",
    "category": "Funeral Packages",
    "title": "Supreme Cremation",
    "price": "£3,300.00 inc. disbursements",
    "description": "The provision of the Funeral Director's services and attending to all necessary arrangements for the funeral service at Cedar Hall, Bluebell Wood including a Civil Celebrant and direct unattended cremation."
  },
  {
    "id": "pkg-5",
    "category": "Funeral Packages",
    "title": "Standard Funeral",
    "price": "Cremation from £4,100.00 including disbursements",
    "description": ""
  },
  {
    "id": "pkg-6",
    "category": "Funeral Packages",
    "title": "Service of Remembrance for Military Veterans",
    "price": "From £4,300.00 including disbursements *",
    "description": "A Remembrance funeral is a fitting way to pay tribute to the brave men and women who have served in the armed forces. Providing a dignified farewell and remembering those who have served and defended their country. Providing an opportunity to honour their service, sacrifices and pay our respects."
  },
  {
    "id": "pkg-7",
    "category": "Funeral Packages",
    "title": "Traditional Funeral",
    "price": "* Cremation From £4,500.00 including disbursements",
    "description": ""
  },
  {
    "id": "pkg-8",
    "category": "Funeral Packages",
    "title": "Horse Drawn Carriage",
    "price": "From £5,300.00 inc. disbursements",
    "description": "Standard Funeral Package including a horse and carriage going via a chosen address."
  },
  {
    "id": "pkg-9",
    "category": "Funeral Packages",
    "title": "Motorcycle Funeral",
    "price": "From £5,350.00 including disbursements",
    "description": "Based on our Standard Funeral Package with Elm Coffin, to include a motorcycle hearse going via a chosen address and onto a local Crematorium or Church."
  },
  {
    "id": "coffin-1",
    "category": "Coffins",
    "title": "Lamboard Oak",
    "price": "From £210.00",
    "description": "Built using high-quality lamboard and trimmed with single mouldings. A respectful and simple option for families."
  },
  {
    "id": "coffin-2",
    "category": "Coffins",
    "title": "Oak Veneered",
    "price": "From £275.00",
    "description": "Built using high-quality oak veneer and trimmed with single mouldings. Shown fitted with fleur handles and bell tops."
  },
  {
    "id": "coffin-3",
    "category": "Coffins",
    "title": "Elm Veneered",
    "price": "From £275.00",
    "description": "Built using high-quality elm veneer and trimmed with single mouldings. Shown fitted with yorkcrem handles and bell tops."
  },
  {
    "id": "coffin-4",
    "category": "Coffins",
    "title": "Oak Dark Stained",
    "price": "From £275.00",
    "description": "Built using high-quality oak veneer with a dark stain and trimmed with single mouldings. Shown fitted with no.12 ring handles."
  },
  {
    "id": "coffin-5",
    "category": "Coffins",
    "title": "Cardboard Coffin",
    "price": "From £420.00",
    "description": "An environmentally conscious choice, suitable for both burial and cremation. Lightweight and simple design."
  },
  {
    "id": "coffin-6",
    "category": "Coffins",
    "title": "Wicker",
    "price": "From £450.00",
    "description": "A beautifully natural woven coffin supplied with a soft natural fabric lining, ply name plate and rope handles. Plastic and metal free."
  },
  {
    "id": "coffin-7",
    "category": "Coffins",
    "title": "Rockwood Walnut",
    "price": "From £500.00",
    "description": "Built using simulated Walnut veneer and trimmed with single mouldings. A classic and dignified appearance."
  },
  {
    "id": "coffin-8",
    "category": "Coffins",
    "title": "Sapele Veneered",
    "price": "From £500.00",
    "description": "Built using high-quality Sapele veneer and trimmed with single mouldings shown fitted with 300/7 handles and wreath holders."
  },
  {
    "id": "coffin-9",
    "category": "Coffins",
    "title": "Solid Pine",
    "price": "From £530.00",
    "description": "Built using Scandinavian redwood and trimmed with single mouldings. Shown fitted with rope handles and wooden bell tops."
  },
  {
    "id": "coffin-10",
    "category": "Coffins",
    "title": "Bamboo",
    "price": "From £540.00",
    "description": "Bamboo is the fastest growing plant on earth and is 100% natural and biodegradable. Supplied with a fitted liner."
  },
  {
    "id": "coffin-11",
    "category": "Coffins",
    "title": "Various Colours",
    "price": "From £550.00",
    "description": "MDF coffin sprayed white and trimmed with single mouldings shown fitted with Fleur handles in Nickel Plate. Available in many colours."
  },
  {
    "id": "coffin-12",
    "category": "Coffins",
    "title": "Willow Pod Coffin",
    "price": "From £550.00",
    "description": "A beautifully hand-woven willow pod, offering a softer, more rounded aesthetic for a natural and organic tribute."
  },
  {
    "id": "coffin-13",
    "category": "Coffins",
    "title": "Painted Named Coffins",
    "price": "From £600.00",
    "description": "MDF coffin sprayed pale blue and trimmed with single mouldings and engraved name on the sides. Shown with fleur handles."
  },
  {
    "id": "coffin-14",
    "category": "Coffins",
    "title": "Rookwood Elm",
    "price": "From £650.00",
    "description": "Built using simulated oak veneer and trimmed with single mouldings. A traditional and respectful choice."
  },
  {
    "id": "coffin-15",
    "category": "Coffins",
    "title": "Knotty Oak",
    "price": "From £650.00",
    "description": "Built using high quality knotty oak veneer with a honey stain and trimmed with double half round mouldings."
  },
  {
    "id": "coffin-16",
    "category": "Coffins",
    "title": "Brinkley Oak",
    "price": "From £650.00",
    "description": "High quality oak veneer with routed panels, a raised lid and trimmed with double mouldings."
  },
  {
    "id": "coffin-17",
    "category": "Coffins",
    "title": "Chiltern Oak Named",
    "price": "From £670.00",
    "description": "A personal tribute that can be customized with a loved one's name or relationship on the side panels."
  },
  {
    "id": "coffin-18",
    "category": "Coffins",
    "title": "Seagrass Coffin",
    "price": "From £670.00",
    "description": "Hand-woven from natural seagrass, providing a soft and unique aesthetic for a peaceful and natural farewell."
  },
  {
    "id": "coffin-19",
    "category": "Coffins",
    "title": "Willow Coffin",
    "price": "From £670.00",
    "description": "Expertly hand-woven from natural willow, offering an organic and environmentally friendly tribute."
  },
  {
    "id": "coffin-20",
    "category": "Coffins",
    "title": "Picture Coffins",
    "price": "From £800.00",
    "description": "Available in a range of contemporary designs, celebrating a loved one's unique life and interests."
  },
  {
    "id": "coffin-21",
    "category": "Coffins",
    "title": "Cavendish Oak Solid",
    "price": "From £1,000.00",
    "description": "Built using high quality solid oak with routed panels, a raised lid and trimmed with double mouldings."
  },
  {
    "id": "coffin-22",
    "category": "Coffins",
    "title": "Windsor Oak",
    "price": "From £1,175.00",
    "description": "Built using high-quality solid oak and trimmed with triple mouldings and oak stain."
  },
  {
    "id": "casket-1",
    "category": "Caskets & Urns",
    "title": "Scatter Tubes & Pods",
    "price": "From £10.00",
    "description": "Cardboard scatter tubes available in Adult, Split Ashes/Child, Token, and Keepsake sizes."
  },
  {
    "id": "casket-2",
    "category": "Caskets & Urns",
    "title": "Urn Ring Handle",
    "price": "From £17.00",
    "description": "Cast Urn Ring handle in Electro Brass for wooden ashes caskets. Handles sold separately."
  },
  {
    "id": "casket-3",
    "category": "Caskets & Urns",
    "title": "Drop Pendant Handle",
    "price": "From £17.00",
    "description": "Metal drop handle with an antique brass finish. Handles sold separately."
  },
  {
    "id": "casket-4",
    "category": "Caskets & Urns",
    "title": "Bamboo",
    "price": "From £65.00",
    "description": "Natural ashes casket made from Bamboo, one of the fastest growing plants on earth. 100% natural and biodegradable."
  },
  {
    "id": "casket-5",
    "category": "Caskets & Urns",
    "title": "Vault Box",
    "price": "From £75.00",
    "description": "Solid Oak vault box for ashes, providing a robust and classic resting place."
  },
  {
    "id": "casket-6",
    "category": "Caskets & Urns",
    "title": "Willow",
    "price": "From £75.00",
    "description": "Natural ashes casket expertly hand-woven from sustainable willow. A soft, traditional look."
  },
  {
    "id": "casket-7",
    "category": "Caskets & Urns",
    "title": "Kent Solid Oak",
    "price": "From £80.00",
    "description": "A beautifully crafted solid oak ashes casket with a clean, classic finish."
  },
  {
    "id": "casket-8",
    "category": "Caskets & Urns",
    "title": "Norfolk",
    "price": "From £85.00",
    "description": "Available in Solid Oak, Utile and Oak Stained finishes."
  },
  {
    "id": "casket-9",
    "category": "Caskets & Urns",
    "title": "Surrey",
    "price": "From £85.00",
    "description": "Solid Oak casket available in Veneered Oak, Utile & Sapele finishes."
  },
  {
    "id": "casket-10",
    "category": "Caskets & Urns",
    "title": "Essex",
    "price": "From £85.00",
    "description": "Premium solid casket crafted from Solid Oak & Utile."
  },
  {
    "id": "casket-11",
    "category": "Caskets & Urns",
    "title": "Seagrass",
    "price": "From £90.00",
    "description": "Natural ashes casket hand-woven from seagrass for an environmentally friendly tribute."
  },
  {
    "id": "casket-12",
    "category": "Caskets & Urns",
    "title": "Knotty Oak",
    "price": "From £95.00",
    "description": "Featuring natural characteristics of the wood for a rustic and authentic aesthetic. No two are exactly alike."
  },
  {
    "id": "casket-13",
    "category": "Caskets & Urns",
    "title": "Bronze or Aluminium",
    "price": "From £170.00",
    "description": "Elegant metal urns available in both Bronze or Aluminium finishes. Durable and timeless."
  },
  {
    "id": "casket-14",
    "category": "Caskets & Urns",
    "title": "Althorp Red",
    "price": "From £170.00",
    "description": "A sophisticated urn featuring a deep red finish and intricate silver-toned detailing."
  },
  {
    "id": "casket-15",
    "category": "Caskets & Urns",
    "title": "Devon Gold",
    "price": "From £170.00",
    "description": "A warm and distinguished urn with a gold finish and traditional patterning."
  },
  {
    "id": "casket-16",
    "category": "Caskets & Urns",
    "title": "Banbury Brass",
    "price": "From £170.00",
    "description": "Classic brass urn with an intricate engraved design and a high-polish finish."
  },
  {
    "id": "casket-17",
    "category": "Caskets & Urns",
    "title": "Farnham Flowers",
    "price": "From £170.00",
    "description": "A beautiful urn adorned with delicate floral patterns for a softer, nature-inspired tribute."
  },
  {
    "id": "casket-18",
    "category": "Caskets & Urns",
    "title": "Gloucester Pewter",
    "price": "From £170.00",
    "description": "A timeless urn with a pewter finish and traditional celtic-style engraving around the band."
  },
  {
    "id": "casket-19",
    "category": "Caskets & Urns",
    "title": "Bluebell Wood",
    "price": "From £200.00",
    "description": "Contemporary picture ashes casket featuring a serene bluebell wood scene for a vivid, modern memorial."
  },
  {
    "id": "casket-20",
    "category": "Caskets & Urns",
    "title": "Rose, Iris & Butterfly",
    "price": "From £200.00",
    "description": "Contemporary picture ashes casket with a beautiful, high-definition floral and butterfly design."
  },
  {
    "id": "casket-21",
    "category": "Caskets & Urns",
    "title": "Winter Scene",
    "price": "From £200.00",
    "description": "Contemporary picture ashes casket featuring a tranquil winter landscape and forest imagery."
  },
  {
    "id": "service-1",
    "category": "Services Overview",
    "title": "Funeral Packages",
    "price": "",
    "description": "A comprehensive range of options tailored for your family."
  },
  {
    "id": "service-2",
    "category": "Services Overview",
    "title": "Quality Assurance",
    "price": "",
    "description": "Proud members of SAIF offering trusted independent care."
  },
  {
    "id": "service-3",
    "category": "Services Overview",
    "title": "Coffin Range",
    "price": "",
    "description": "Dignified selection of handcrafted traditional and modern coffins."
  },
  {
    "id": "service-4",
    "category": "Services Overview",
    "title": "Ashes Caskets",
    "price": "",
    "description": "Caskets, Urns and Scatter Tubes"
  },
  {
    "id": "service-5",
    "category": "Services Overview",
    "title": "NAFD Member",
    "price": "",
    "description": "Proud members of the National Association of Funeral Directors, upholding high standards of care and professional service."
  },
  {
    "id": "service-6",
    "category": "Services Overview",
    "title": "Memorial Jewellery",
    "price": "",
    "description": "Beautiful keepsakes to hold cherished memories close."
  }
];
