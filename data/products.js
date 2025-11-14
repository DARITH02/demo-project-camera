// products.js
const products = [
  {
    id: "7",
    name: "Canon EOS R6 Mark III Mirrorless Camera",
    description:
      "32.5MP Full-Frame CMOS Sensor, 7K 60p 12-Bit Internal RAW, Dual Pixel CMOS AF II, High-Speed 4K 120p, Movie Servo AF, 8.5-stop image stabilization.",
    price: 2799.0,
    image: "./images/Canon EOS R6 Mark III Mirrorless Camera/p1.jpg",
    subImages: [
      "./images/Canon EOS R6 Mark III Mirrorless Camera/p1.jpg",
      "./images/Canon EOS R6 Mark III Mirrorless Camera/p2.jpg",
      "./images/Canon EOS R6 Mark III Mirrorless Camera/p3.jpg",
    ],
    specs: {
      Sensor: "32.5MP Full-Frame CMOS",
      Video: "7K 60p 12-Bit RAW",
      AF: "Dual Pixel CMOS AF II",
      Stabilization: "8.5-stop",
    },
    category: "Canon",
  },
  {
    id: "8",
    name: "FUJIFILM X100VI Digital Camera (Silver)",
    description:
      "40.2MP APS-C X-Trans CMOS 5 HR Sensor, X-Processor 5, Fujinon 23mm f/2 Lens, 35mm Full-Frame Equivalent.",
    price: 1499.0,
    image: "./images/FUJIFILM X100VI(Silver)/p1.jpg",
    subImages: [
      "./images/FUJIFILM X100VI(Silver)/p1.jpg",
      "./images/FUJIFILM X100VI(Silver)/p2.jpg",
      "./images/FUJIFILM X100VI(Silver)/p3.jpg",
    ],
    specs: {
      Sensor: "40.2MP APS-C X-Trans CMOS 5",
      Lens: "Fujinon 23mm f/2",
      Processor: "X-Processor 5",
      Format: "35mm Equivalent",
    },

    category: "Sony",
  },

  {
    id: "9",
    name: "FUJIFILM X100VI Digital Camera (Black)",
    description:
      "40.2MP APS-C X-Trans CMOS 5 HR Sensor, X-Processor 5, Fujinon 23mm f/2 Lens, 35mm Full-Frame Equivalent.",
    price: 1499.0,
    image: "./images/FUJIFILM X100VI(black)/p1.jpg",
    subImages: [
      "./images/FUJIFILM X100VI(black)/p1.jpg",
      "./images/FUJIFILM X100VI(black)/p2.jpg",
      "./images/FUJIFILM X100VI(black)/p3.jpg",
    ],
    specs: {
      Sensor: "40.2MP APS-C X-Trans CMOS 5",
      Lens: "Fujinon 23mm f/2",
      Processor: "X-Processor 5",
      Format: "35mm Equivalent",
    },

    category: "Sony",
  },

  {
    id: "10",
    name: "FUJIFILM X-M5 Mirrorless Camera with XC 15-45mm f/3.5-5.6 Lens",
    description:
      "26.1MP APS-C X-Trans CMOS 5 HR Sensor, X-Processor 5, XC 15-45mm f/3.5-5.6 Lens included. Compact, lightweight mirrorless camera ideal for photography and video.",
    price: 999.0,
    image:
      "./images/FUJIFILM X-M5 Mirrorless Camera with XC 15-45mm f3.5-5.6 Lens/p1.jpg",
    subImages: [
      "./images/FUJIFILM X-M5 Mirrorless Camera with XC 15-45mm f3.5-5.6 Lens/p1.jpg",
      "./images/FUJIFILM X-M5 Mirrorless Camera with XC 15-45mm f3.5-5.6 Lens/p2.jpg",
      "./images/FUJIFILM X-M5 Mirrorless Camera with XC 15-45mm f3.5-5.6 Lens/p3.jpg",
    ],
    specs: {
      Sensor: "26.1MP APS-C X-Trans CMOS 5",
      Lens: "XC 15-45mm f/3.5-5.6",
      Processor: "X-Processor 5",
      Video: "4K UHD 30p",
    },

    category: "Sony",
  },

  {
    id: "11",
    name: "Canon EOS R50 V Mirrorless Camera with 14-30mm f/4-6.3 Lens",
    description:
      "Bundling the stylish, video-friendly camera body with a versatile lens, the Canon EOS R50 V Mirrorless Camera with 14-30mm Lens pairs the black multimedia mirrorless camera with the RF-S 14-30mm f/4.5-6.3 IS STM PZ lens. Ideal for content creators and vloggers, featuring 24.2MP APS-C CMOS Sensor and DIGIC X Image Processor.",
    price: 849.0,
    image:
      "./images/Canon EOS R50 V Mirrorless Camera with 14-30mm f4-6.3 Lens/p1.jpg",
    subImages: [
      "./images/Canon EOS R50 V Mirrorless Camera with 14-30mm f4-6.3 Lens/p1.jpg",
      "./images/Canon EOS R50 V Mirrorless Camera with 14-30mm f4-6.3 Lens/p2.jpg",
      "./images/Canon EOS R50 V Mirrorless Camera with 14-30mm f4-6.3 Lens/p3.jpg",
    ],
    specs: {
      Sensor: "24.2MP APS-C CMOS",
      Lens: "RF-S 14-30mm f/4.5-6.3 IS STM PZ",
      Processor: "DIGIC X",
      Video: "UHD 4K60p Cropped / 4K30 6K Oversampled",
    },
    category: "Canon",
  },
];
