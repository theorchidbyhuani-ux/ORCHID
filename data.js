const globalPromoData = {
  "text": "Enjoy a relaxing Massage or Facial — choose one, only $75 per hour 💆‍♀️",
  "startDate": "2025-09-01",
  "endDate": "2025-09-30",
  "status": "active",
  "color": "pink",
  "lastUpdated": "2025-07-06T20:26:23.192Z"
};
const globalServicesData = {
    eyelash: [
        { name: "Full Glam Classic Set", price: 85, description: "Full glam classic lash extensions", category: "classic", duration: 120 },
        { name: "Natural Hybrid Set", price: 100, description: "Natural hybrid lash extensions", category: "hybrid", duration: 150 },
        { name: "Elegant Hybrid Set", price: 110, description: "Elegant hybrid lash extensions", category: "hybrid", duration: 150 },
        { name: "Glam Hybrid Set", price: 120, description: "Glam hybrid lash extensions", category: "hybrid", duration: 150 },
        { name: "Volume Full Set", price: 130, description: "Volume lash extensions", category: "volume", duration: 180 },
        { name: "Mega Volume Full Set", price: 150, description: "Mega volume lash extensions", category: "volume", duration: 180 },
        { name: "Full Glam Classic Refill", price: 75, description: "2-week refill for Full Glam Classic", category: "refill", duration: 75 },
        { name: "Natural Hybrid Refill", price: 70, description: "2-week refill for Natural Hybrid", category: "refill", duration: 90 },
        { name: "Elegant Hybrid Refill", price: 80, description: "2-week refill for Elegant Hybrid", category: "refill", duration: 90 },
        { name: "Glam Hybrid Refill", price: 90, description: "2-week refill for Glam Hybrid", category: "refill", duration: 90 },
        { name: "Volume Refill", price: 100, description: "2-week refill for Volume", category: "refill", duration: 120 },
        { name: "Mega Volume Refill", price: 120, description: "2-week refill for Mega Volume", category: "refill", duration: 120 },
        { name: "Classic Lash Removal", price: 20, priceWithNewSet: 10, description: "Classic lash extension removal", category: "removal", duration: 30 },
        { name: "Hybrid/Volume Foreign Removal", price: 30, priceWithNewSet: 20, description: "Hybrid/Volume foreign lash removal", category: "removal", duration: 45 }
    ],
    nails: [
        { name: "Manicure + Pedicure", price: 35, description: "Cleaning application", category: "natural", duration: 45 },
        { name: "Shellac Manicure", price: 35, description: "Shellac nail polish application", category: "natural", duration: 45 },
        { name: "Shellac Pedicure", price: 45, description: "Shellac nail polish application", category: "natural", duration: 45 },
        { name: "BIAB (Builder in a Bottle)", price: 60, description: "Builder in a bottle application", category: "natural", duration: 90 },
        { name: "BIAB Refill", price: 55, description: "BIAB refill service", category: "natural", duration: 75, perFingerPrice: 6 },
        { name: "Shellac Removal", price: 8, description: "Shellac removal service", category: "removal", duration: 15 },
        { name: "Bio Gel Extensions - XS/Small", price: 65, refillPrice: 7, description: "Bio gel nail extensions", category: "extensions", duration: 120 },
        { name: "Bio Gel Extensions - Medium", price: 65, refillPrice: 7, description: "Bio gel nail extensions", category: "extensions", duration: 120 },
        { name: "Bio Gel Extensions - Long", price: 70, refillPrice: 8, description: "Bio gel nail extensions", category: "extensions", duration: 120 },
        { name: "Bio Gel Extensions - XL", price: 75, refillPrice: 9, description: "Bio gel nail extensions", category: "extensions", duration: 120 },
        { name: "GelX Extensions - XS/Small", price: 60, description: "GelX nail extensions", category: "extensions", duration: 90 },
        { name: "GelX Extensions - Medium", price: 60, description: "GelX nail extensions", category: "extensions", duration: 90 },
        { name: "GelX Extensions - Long", price: 65, description: "GelX nail extensions", category: "extensions", duration: 90 },
        { name: "GelX Extensions - XL", price: 75, description: "GelX nail extensions", category: "extensions", duration: 90 },
        { name: "French Tip (per set)", price: 15, description: "French tip design for full set", category: "designs", duration: 15 },
        { name: "Ombre/Aura (per set)", price: 20, description: "Ombre or Aura design for full set", category: "designs", duration: 20 },
        { name: "Mirror (per set)", price: 18, description: "Mirror effect design for full set", category: "designs", duration: 15 },
        { name: "Cat Eye (per set)", price: 15, description: "Cat Eye design for full set", category: "designs", duration: 15 },
        { name: "French Tip (per finger)", price: 2, description: "French tip per finger", category: "addons", duration: 0 },
        { name: "Ombre/Aura (per finger)", price: 3, description: "Ombre/Aura per finger", category: "addons", duration: 0 },
        { name: "3D Design (per finger)", price: 3, description: "3D design per finger", category: "addons", duration: 0 },
        { name: "Simple Art (per finger)", price: 2, description: "Simple art per finger", category: "addons", duration: 0 },
        { name: "Chrome (per finger)", price: 2, description: "Chrome per finger", category: "addons", duration: 0 },
        { name: "Stickers (per finger)", price: 0.3, description: "Stickers per finger", category: "addons", duration: 0 },
        { name: "Glitters (per finger)", price: 2, description: "Glitters per finger", category: "addons", duration: 0 },
        { name: "Gems (per stone)", price: 0.3, description: "Gems per stone", category: "addons", duration: 0 },
        { name: "Mirror (per finger)", price: 2, description: "Mirror per finger", category: "addons", duration: 0 },
        { name: "Cat Eye (per finger)", price: 2, description: "Cat Eye per finger", category: "addons", duration: 0 },
        { name: "Extension Removal", price: 15, description: "Extension removal", category: "removal", duration: 30 },
        { name: "Foreign Removal", price: 20, description: "Foreign extension removal", category: "removal", duration: 45 }
    ],
    massage: [
        { name: "Relaxation Massage – 60 min", price: 90, description: "Relaxing full body massage", category: "massage", duration: 60 },
        { name: "Swedish Massage – 60 min", price: 90, description: "Swedish massage technique", category: "massage", duration: 60 },
        { name: "Relaxation Massage – 45 min", price: 70, description: "Relaxing full body massage", category: "massage", duration: 45 },
        { name: "Swedish Massage – 45 min", price: 70, description: "Swedish massage technique", category: "massage", duration: 45 },
        { name: "Back Massage – 30 min", price: 45, description: "Swedish massage technique", category: "massage", duration: 45 },
        { name: "Upper Lip Waxing", price: 10, description: "Upper lip hair removal", category: "waxing", duration: 15 },
        { name: "Brows Waxing", price: 15, description: "Eyebrow shaping and waxing", category: "waxing", duration: 20 },
        { name: "Underarms Waxing", price: 25, description: "Underarm hair removal", category: "waxing", duration: 20 },
        { name: "Chin Waxing", price: 12, description: "Chin hair removal", category: "waxing", duration: 15 },
        { name: "Full Hands Waxing", price: 60, description: "Full leg hair removal", category: "waxing", duration: 45 },
        { name: "Full Legs Waxing", price: 65, description: "Full leg hair removal", category: "waxing", duration: 45 },
        { name: "Aromatherapy", price: 15, description: "Aromatherapy add-on", category: "addons", duration: 10 },
        { name: "Deep Tissue Focus (15 min)", price: 25, description: "Deep tissue focus add-on", category: "addons", duration: 15 }
    ],
    facial: [
        { name: "Relaxation Facial", price: 90, description: "Relaxing facial treatment", category: "basic", duration: 60 },
        { name: "Acne Facial", price: 90, description: "Acne treatment facial", category: "basic", duration: 60 },
        { name: "Diamond Microdermabrasion Facial", price: 90, description: "Diamond microdermabrasion treatment", category: "advanced", duration: 60 },
        { name: "Dermaplaning Facial", price: 120, description: "Dermaplaning treatment", category: "advanced", duration: 75 },
        { name: "Custom Facial", price: 90, description: "Customized facial treatment", category: "basic", duration: 60 },
        { name: "Lymph Mini Facial", price: 60, description: "Microneedling treatment per session", category: "advanced", duration: 90 }
    ]
};
const globalGalleryData = {
    gallery: [
        { name: "Eyelash Extensions 1", path: "gallery/eyelashes1.jpeg", category: "eyelashes", alt: "Eyelash Extensions 1", description: "Beautiful eyelash extensions" },
        { name: "Eyelash Extensions 2", path: "gallery/eyelashes6.jpeg", category: "eyelashes", alt: "Eyelash Extensions 2", description: "Elegant eyelash extensions" },
        { name: "Facial Treatment 1", path: "gallery/facials1.jpeg", category: "facials", alt: "Facial Treatment 1", description: "Relaxing facial treatment" },
        { name: "Facial Treatment 2", path: "gallery/facials2.jpeg", category: "facials", alt: "Facial Treatment 2", description: "Advanced facial treatment" },
        { name: "Nail Art 1", path: "gallery/nails1.jpeg", category: "nails", alt: "Nail Art 1", description: "Beautiful nail design" },
        { name: "Nail Art 2", path: "gallery/nails2.jpeg", category: "nails", alt: "Nail Art 2", description: "Elegant nail design" },
        { name: "Threading Service", path: "gallery/threading1.jpeg", category: "threading", alt: "Threading Service", description: "Professional threading service" },
        { name: "Waxing Service", path: "gallery/waxing1.jpeg", category: "waxing", alt: "Waxing Service", description: "Professional waxing service" }
    ],
    services: [
        { name: "Service Price List 1", path: "services/1.jpeg", category: "pricelist", alt: "Service Price List 1", description: "Price list for services" },
        { name: "Service Price List 2", path: "services/2.jpeg", category: "pricelist", alt: "Service Price List 2", description: "Additional price information" },
        { name: "Service Price List 3", path: "services/3.jpeg", category: "pricelist", alt: "Service Price List 3", description: "Service pricing details" },
        { name: "Service Price List 4", path: "services/4.jpeg", category: "pricelist", alt: "Service Price List 4", description: "Complete service menu" }
    ]
};




