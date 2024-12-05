import { BodyType } from "../src/types";

type CarModel = {
  name: string;
  brand: string;
  slug: string;
  bodyType: BodyType;
  website: string;
  imageUrl: string;
};

export const models: CarModel[] = [
  {
    name: "Octavia Combi",
    brand: "skoda",
    slug: "octavia",
    bodyType: BodyType.WAGON,
    website: "https://www.skoda.se/modeller/octavia/nya-octavia-combi",
    imageUrl:
      "https://cdn.skoda-auto.com/images/sites/encom-v2/42d75df7-28d9-4884-80a5-ffd443ab4d95/b6cff1adbe10b16b045ab54798583602/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp576_1.webp",
  },
  {
    name: "Superb Combi",
    brand: "skoda",
    slug: "superb",
    bodyType: BodyType.WAGON,
    website: "https://www.skoda.se/modeller/nya-superb-combi/nya-superb-combi",
    imageUrl:
      "https://cdn.skoda-auto.com/images/sites/enmaster-v2/c6c58763-79fe-4209-b95c-644b91259ea9/502dcea7a725fe57859ead84e962187b/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp576_1.webp",
  },
  {
    name: "Kodiaq",
    brand: "skoda",
    slug: "kodiaq",
    bodyType: BodyType.SUV,
    website: "https://www.skoda.se/modeller/nya-kodiaq/kodiaq",
    imageUrl:
      "https://cdn.skoda-auto.com/images/sites/enmaster-v2/e28af9f6-fbc7-4d6f-8813-aae9ce4cd138/c46ae914fc602fc54d78c332dec6499f/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp576_1.webp",
  },
  {
    name: "Karoq",
    brand: "skoda",
    slug: "karoq",
    bodyType: BodyType.SUV,
    website: "https://www.skoda.se/modeller/karoq/karoq",
    imageUrl:
      "https://cdn.skoda-auto.com/images/sites/enmaster-v2/e8ff7356-43dc-406c-965e-b3b6c0b30640/40989e08fb302136d47b196d6ff89c5d/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp576_1.webp",
  },
  {
    name: "Kamiq",
    brand: "skoda",
    slug: "kamiq",
    bodyType: BodyType.HATCHBACK,
    website: "https://www.skoda.se/modeller/kamiq/nya-kamiq",
    imageUrl:
      "https://cdn.skoda-auto.com/images/sites/enmaster-v2/605d109c-4d23-4276-ad58-f0e0f1fa4605/e020abbcef2c73bbae1b304659470ac6/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp576_1.webp",
  },
  {
    name: "Enyaq",
    brand: "skoda",
    slug: "enyaq",
    bodyType: BodyType.HATCHBACK,
    website: "https://www.skoda.se/modeller/enyaq/enyaq",
    imageUrl:
      "https://cdn.skoda-auto.com/images/sites/enmaster-v2/82c9931e-e89b-4c8f-be00-4b9bb4620bf2/6bc654810239f88259cda4cfd7d68dfa/HighlightsModule/685106d543825796f9f55d44fec7a4b2/dc644d7dcc87568712479736f3d9616116a47d60f725f03bd4a66359b5358ab7/Default_bp576_1.webp",
  },
  {
    name: "Fabia",
    brand: "skoda",
    slug: "fabia",
    bodyType: BodyType.HATCHBACK,
    website: "https://www.skoda.se/modeller/nya-fabia/fabia",
    imageUrl:
      "https://cdn.skoda-auto.com/images/sites/enmaster-v2/5124113b-085e-48a6-a682-72770bfdad77/fa109e33ed7ec5c49978887246bca8de/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp576_1.webp",
  },
  {
    name: "Enyaq Coupé",
    brand: "skoda",
    slug: "enyaq-coupe",
    bodyType: BodyType.COUPE,
    website: "https://www.skoda.se/modeller/enyaq/enyaq-coupe",
    imageUrl:
      "https://cdn.skoda-auto.com/images/sites/enmaster-v2/c3da4de4-4c6f-42d7-8fb0-f4bb6e4836cb/1e06e112399a4914297f3e945b02f61c/ModelCharacterGalleryModule/7632a1f0aa516594d6a0e94356eefae7250acf63669750b30971a08237c5496b/Default_bp576_1.webp",
  },
  {
    name: "EC40",
    brand: "volvo",
    slug: "ec40",
    bodyType: BodyType.CROSSOVER,
    website: "https://www.volvocars.com/se/cars/ec40-electric",
    imageUrl:
      "https://cas.volvocars.com/image/dynamic/MY25_2417/539/exterior-aligned-v2/RB/74000/R78000/R190/FN02/TC06/2G03/_/_/JT02/GR08/T101/TJ02/NP02/TM04/JG02/CB04/EV05/JB0A/T201/LF05/_/VP07/FH01/_/_/_/default.jpg?market=se&client=gox-graph%7Cpdps&angle=4&w=1600&bg=descriptive-studio",
  },
  {
    name: "EX90",
    brand: "volvo",
    slug: "ex90",
    bodyType: BodyType.SUV,
    website: "https://www.volvocars.com/se/cars/ex90-electric/",
    imageUrl:
      "https://wizz.volvocars.com/images/2025/356/v2/exterior/studioProportional/threeQuartersFrontLeft/exterior-studioProportional-threeQuartersFrontLeft_0ec43f10602bfb67ca751e291c726fcd3f960508.png?client=pdps&w=1600",
  },
  {
    name: "EX40",
    brand: "volvo",
    slug: "ex40",
    bodyType: BodyType.SUV,
    website: "https://www.volvocars.com/se/cars/ex40-electric",
    imageUrl:
      "https://cas.volvocars.com/image/dynamic/MY25_2417/536/exterior-aligned-v1/RB/74000/R78000/R190/FN02/TC06/2G03/_/TP05/_/JT02/GR08/T101/TJ02/NP02/TM04/JG02/CB04/EV02/JB0A/T201/LF05/_/VP07/FH01/_/_/_/_/_/default.jpg?market=se&client=gox-graph%7Cpdps&angle=4&w=1600&bg=descriptive-studio",
  },
  {
    name: "EX30",
    brand: "volvo",
    slug: "ex30",
    bodyType: BodyType.SUV,
    website: "https://www.volvocars.com/se/cars/ex30-electric/",
    imageUrl:
      "https://wizz.volvocars.com/images/2025/416/v1/exterior/studioProportional/threeQuartersFrontLeft/exterior-studioProportional-threeQuartersFrontLeft_bcf624f41ce52ef5d339522f7aca5e0c3b9dfd82.png?client=pdps&w=1600",
  },
  {
    name: "XC40",
    brand: "volvo",
    slug: "xc40",
    bodyType: BodyType.SUV,
    website: "https://www.volvocars.com/se/cars/xc40/",
    imageUrl:
      "https://cas.volvocars.com/image/dynamic/MY25_2417/536/exterior-aligned-v1/RA/74000/R7C000/R153/FN01/TC06/_/_/TP05/_/JT02/GR02/T101/TJ02/NP02/TM04/JG02/_/EV02/JB0A/T21E/LF05/_/VP09/FH01/_/_/_/_/_/default.jpg?market=se&client=gox-graph%7Cpdps&angle=4&w=1600&bg=descriptive-studio",
  },
  {
    name: "XC60",
    brand: "volvo",
    slug: "xc60",
    bodyType: BodyType.SUV,
    website: "https://www.volvocars.com/se/cars/xc60-hybrid/",
    imageUrl:
      "https://cas.volvocars.com/image/dynamic/MY25_2417/246/exterior-aligned-v2/P5/74000/RG0R00/R16A/TC05/_/2G03/TP05/_/_/GR09/T101/TJ06/NP02/TM04/JG02/CB03/EV02/JB0C/T201/LF05/_/VP07/UF08/FH01/T006/_/_/_/default.jpg?market=se&client=gox-graph%7Cpdps&angle=4&w=1600&bg=descriptive-studio",
  },
  {
    name: "XC90",
    brand: "volvo",
    slug: "xc90",
    bodyType: BodyType.SUV,
    website: "https://www.volvocars.com/se/cars/xc90-hybrid/",
    imageUrl:
      "https://wizz.volvocars.com/images/2025/256/exterior/studioProportional/threeQuartersFrontLeft/exterior-studioProportional-threeQuartersFrontLeft_324CEE7FB7F7972B44AC8EEF5DD39548B2269331.png?client=car-config&w=1600",
  },
  {
    name: "S90 Recharge",
    brand: "volvo",
    slug: "s90-recharge",
    bodyType: BodyType.SEDAN,
    website: "https://www.volvocars.com/se/cars/s90-hybrid/",
    imageUrl:
      "https://www.volvocars.com/images/v/-/media/applications/pdpspecificationpage/my24/s90-hybrid/pdp/grid-gallery/s90-hybrid-grid-gallery-2-16x9.jpg?iar=0&w=1600",
  },
  {
    name: "S60 Recharge",
    brand: "volvo",
    slug: "s60-recharge",
    bodyType: BodyType.SEDAN,
    website: "https://www.volvocars.com/se/cars/s60-hybrid/",
    imageUrl:
      "https://www.volvocars.com/images/v/-/media/applications/pdpspecificationpage/my24/s60-hybrid/pdp/s60-hybrid-gallery-10-16x9.jpg?iar=0&w=3840&imdensity=1",
  },
  {
    name: "V90",
    brand: "volvo",
    slug: "v90",
    bodyType: BodyType.WAGON,
    website: "https://www.volvocars.com/se/cars/v90-hybrid/",
    imageUrl:
      "https://cas.volvocars.com/image/dynamic/MY25_2417/235/exterior-aligned-v1/G8/74000/RA0000/R186/TC05/_/2G03/TP02/_/_/GR03/T103/TJ01/NP02/TM02/JG02/CB03/EV02/JB0C/T212/LF01/_/VP07/FH02/_/_/_/_/default.jpg?market=se&client=gox-graph%7Cpdps&angle=4&w=1600&bg=descriptive-studio",
  },
  {
    name: "V90 Cross Country",
    brand: "volvo",
    slug: "v90-cross-country",
    bodyType: BodyType.WAGON,
    website: "https://www.volvocars.com/se/cars/v90-cross-country/",
    imageUrl:
      "https://www.volvocars.com/images/v/-/media/applications/pdpspecificationpage/my24/v90-cc/pdp/overview-gallery/v90cc_overview_gallery_7_16x9.jpg?iar=0&w=3840&imdensity=1",
  },
  {
    name: "V60",
    brand: "volvo",
    slug: "v60",
    bodyType: BodyType.WAGON,
    website: "https://www.volvocars.com/se/cars/v60-hybrid/",
    imageUrl:
      "https://cas.volvocars.com/image/dynamic/MY25_2417/225/exterior-aligned-v1/G8/1/74000/RA0000/R185/TC06/2G03/TP02/_/_/GR03/T103/TJ01/NP02/TM02/JG02/CB03/EV02/JB0C/T212/LF01/VP07/FH02/_/_/_/_/default.jpg?market=se&client=gox-graph%7Cpdps&angle=4&w=1600&bg=descriptive-studio",
  },
  {
    name: "V60 Cross Country",
    brand: "volvo",
    slug: "v60-cross-country",
    bodyType: BodyType.WAGON,
    website: "https://www.volvocars.com/se/cars/v60-cross-country/",
    imageUrl:
      "https://www.volvocars.com/images/v/-/media/applications/pdpspecificationpage/my24/v60-cc/pdp/v60-cc-gallery-10-16x9.jpg?iar=0&w=3840&imdensity=1",
  },
  {
    name: "ID.3",
    brand: "volkswagen",
    slug: "id3",
    bodyType: BodyType.HATCHBACK,
    website: "https://www.volkswagen.se/sv/elbilar/vara-elbilar/id3.html",
    imageUrl:
      "https://assets.volkswagen.com/is/image/volkswagenag/IN0276-ID3-exterior-front?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmaGVpPTExNTImYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmNDU5OQ==",
  },
  {
    name: "ID.4",
    brand: "volkswagen",
    slug: "id4",
    bodyType: BodyType.SUV,
    website: "https://www.volkswagen.se/sv/elbilar/vara-elbilar/id4.html",
    imageUrl:
      "https://assets.volkswagen.com/is/image/volkswagenag/IC0357_ID4_Stage_16_9?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmaGVpPTEwODAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmM2E1Nw==",
  },
  {
    name: "ID.5",
    brand: "volkswagen",
    slug: "id5",
    bodyType: BodyType.SUV,
    website: "https://www.volkswagen.se/sv/elbilar/vara-elbilar/id5.html",
    imageUrl:
      "https://assets.volkswagen.com/is/image/volkswagenag/IC0370-id5-gtx-beauty-rear-side-charging-house-man-10-6-5?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmaGVpPTExNTImYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmNDU5OQ==",
  },
  {
    name: "ID.7",
    brand: "volkswagen",
    slug: "id7",
    bodyType: BodyType.COUPE,
    website: "https://www.volkswagen.se/sv/elbilar/vara-elbilar/id7.html",
    imageUrl: "",
  },
  {
    name: "ID.7 Tourer",
    brand: "volkswagen",
    slug: "id7-tourer",
    bodyType: BodyType.WAGON,
    website:
      "https://www.volkswagen.se/sv/elbilar/vara-elbilar/id7-tourer.html",
    imageUrl: "",
  },
  {
    name: "ID. Buzz",
    brand: "volkswagen",
    slug: "id-buzz",
    bodyType: BodyType.VAN,
    website:
      "https://www.volkswagen-transportbilar.se/sv/modeller/id-buzz.html",
    imageUrl: "",
  },
  {
    name: "Golf",
    brand: "volkswagen",
    slug: "golf",
    bodyType: BodyType.HATCHBACK,
    website: "https://www.volkswagen.se/sv/modeller/golf.html",
    imageUrl: "",
  },
  {
    name: "Golf Sportcombi",
    brand: "volkswagen",
    slug: "golf-sportcombi",
    bodyType: BodyType.WAGON,
    website: "https://www.volkswagen.se/sv/modeller/golf-sportscombi.html",
    imageUrl: "",
  },
  {
    name: "Passat",
    brand: "volkswagen",
    slug: "passat",
    bodyType: BodyType.WAGON,
    website: "https://www.volkswagen.se/sv/modeller/passat-sportscombi.html",
    imageUrl: "",
  },
  {
    name: "Arteon Shooting Brake",
    brand: "volkswagen",
    slug: "arteon-shooting-brake",
    bodyType: BodyType.WAGON,
    website: "https://www.volkswagen.se/sv/modeller/arteon-shooting-brake.html",
    imageUrl: "",
  },
  {
    name: "Touareg",
    brand: "volkswagen",
    slug: "touareg",
    bodyType: BodyType.SUV,
    website: "https://www.volkswagen.se/sv/modeller/touareg.html",
    imageUrl: "",
  },
  {
    name: "T-Roc",
    brand: "volkswagen",
    slug: "t-roc",
    bodyType: BodyType.SUV,
    website: "https://www.volkswagen.se/sv/modeller/t-roc.html",
    imageUrl: "",
  },
  {
    name: "T-Cross",
    brand: "volkswagen",
    slug: "t-cross",
    bodyType: BodyType.SUV,
    website: "https://www.volkswagen.se/sv/modeller/t-cross.html",
    imageUrl: "",
  },
  {
    name: "Taigo",
    brand: "volkswagen",
    slug: "taigo",
    bodyType: BodyType.SUV,
    website: "https://www.volkswagen.se/sv/modeller/taigo.html",
    imageUrl: "",
  },
  {
    name: "Tiguan",
    brand: "volkswagen",
    slug: "tiguan",
    bodyType: BodyType.SUV,
    website: "https://www.volkswagen.se/sv/modeller/tiguan.html",
    imageUrl: "",
  },
  {
    name: "Tiguan Allspace",
    brand: "volkswagen",
    slug: "tiguan-allspace",
    bodyType: BodyType.SUV,
    website: "https://www.volkswagen.se/sv/modeller/tiguan-allspace.html",
    imageUrl: "",
  },
  {
    name: "Touran",
    brand: "volkswagen",
    slug: "touran",
    bodyType: BodyType.VAN,
    website: "https://www.volkswagen.se/sv/modeller/touran.html",
    imageUrl: "",
  },
  {
    name: "XM",
    brand: "bmw",
    slug: "xm",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/xm/2023/overblick.html",
    imageUrl: "",
  },
  {
    name: "X7",
    brand: "bmw",
    slug: "x7",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/x-serie/x7/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "X7 M60i xDrive",
    brand: "bmw",
    slug: "x7-m60i-xdrive",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/x7-m60i/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "X6",
    brand: "bmw",
    slug: "x6",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/x-serie/x6/2023/overblick.html",
    imageUrl: "",
  },
  {
    name: "X6 M",
    brand: "bmw",
    slug: "x6-m",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/x6-m/2023/overblick.html",
    imageUrl: "",
  },
  {
    name: "X5",
    brand: "bmw",
    slug: "x5",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/x-serie/x5/2023/overblick.html",
    imageUrl: "",
  },
  {
    name: "X5 M",
    brand: "bmw",
    slug: "x5-m",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/x5-m/2023/overblick.html",
    imageUrl: "",
  },
  {
    name: "X4",
    brand: "bmw",
    slug: "x4",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/x-serie/x4/2021/bmw-x4-oversikt.html",
    imageUrl: "",
  },
  {
    name: "X4 M",
    brand: "bmw",
    slug: "x4-m",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/x4-m/2021/bmw-x4m-oversikt.html",
    imageUrl: "",
  },
  {
    name: "X3 (2024)",
    brand: "bmw",
    slug: "x3-2024",
    bodyType: BodyType.SUV,
    website: "https://www.bmw.se/sv/alla-modeller/x-serie/x3/bmw-x3.html",
    imageUrl: "",
  },
  {
    name: "X3",
    brand: "bmw",
    slug: "x3",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/x-serie/X3/2021/bmw-x3-oversikt.html",
    imageUrl: "",
  },
  {
    name: "X3 M",
    brand: "bmw",
    slug: "x3-m",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/x3-m/2021/bmw-x3m-oversikt.html",
    imageUrl: "",
  },
  {
    name: "X3 M50 xDrive",
    brand: "bmw",
    slug: "x3-m50-xdrive",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/x3-m50/bmw-x3-m50.html",
    imageUrl: "",
  },
  {
    name: "X2 M35i xDrive",
    brand: "bmw",
    slug: "x2-m35i-xdrive",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/x2-m35i/bmw-x2-m35ixdrive-oversikt.html",
    imageUrl: "",
  },
  {
    name: "X1",
    brand: "bmw",
    slug: "x1",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/x-serie/x1/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "X1 M35i xDrive",
    brand: "bmw",
    slug: "x1-m35i-xdrive",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/bmw-x1-m35i/2023/bmw-x1-m35i-oeversikt.html",
    imageUrl: "",
  },
  {
    name: "iX",
    brand: "bmw",
    slug: "ix",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/bmw-i/bmw-ix/2021/bmw-ix.html",
    imageUrl: "",
  },
  {
    name: "iX3",
    brand: "bmw",
    slug: "ix3",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/x-serie/iX3/2021/bmw-ix3-oeversikt.html",
    imageUrl: "",
  },
  {
    name: "iX M60 xDrive",
    brand: "bmw",
    slug: "ix-m60-xdrive",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/bmw-ix-m60/2021/overblick.html",
    imageUrl: "",
  },
  {
    name: "iX2",
    brand: "bmw",
    slug: "ix2",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/i-series/ix2/bmw-ix2-oversikt.html",
    imageUrl: "",
  },
  {
    name: "iX1",
    brand: "bmw",
    slug: "ix1",
    bodyType: BodyType.SUV,
    website:
      "https://www.bmw.se/sv/alla-modeller/bmw-i/iX1/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "M5 Touring",
    brand: "bmw",
    slug: "m5-touring",
    bodyType: BodyType.WAGON,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/m5-series/bmw-m5-touring.html",
    imageUrl: "",
  },
  {
    name: "5-serie Touring (2024)",
    brand: "bmw",
    slug: "5-serie-touring-2024",
    bodyType: BodyType.WAGON,
    website:
      "https://www.bmw.se/sv/alla-modeller/5-serie/5-series-touring/bmw-5-serie-touring.html",
    imageUrl: "",
  },
  {
    name: "530e Touring (2024)",
    brand: "bmw",
    slug: "530e-touring-2024",
    bodyType: BodyType.WAGON,
    website:
      "https://www.bmw.se/sv/alla-modeller/5-serie/5-series-touring/bmw-5-serie-touring-phev.html",
    imageUrl: "",
  },
  {
    name: "5-serie Touring",
    brand: "bmw",
    slug: "5-serie-touring",
    bodyType: BodyType.WAGON,
    website:
      "https://www.bmw.se/sv/alla-modeller/5-serie/touring/2021/overblick.html",
    imageUrl: "",
  },
  {
    name: "3-serie Touring (2024)",
    brand: "bmw",
    slug: "3-serie-touring-2024",
    bodyType: BodyType.WAGON,
    website:
      "https://www.bmw.se/sv/alla-modeller/3-serie/bmw-3-serie-touring/bmw-3-serie-touring.html",
    imageUrl: "",
  },
  {
    name: "3-serie Touring",
    brand: "bmw",
    slug: "3-serie-touring",
    bodyType: BodyType.WAGON,
    website:
      "https://www.bmw.se/sv/alla-modeller/3-serie/touring/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "M3 Touring (2024)",
    brand: "bmw",
    slug: "m3-touring-2024",
    bodyType: BodyType.WAGON,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/bmw-3er-m-modelle/bmw-m3-touring.html",
    imageUrl: "",
  },
  {
    name: "M3 Competition Touring",
    brand: "bmw",
    slug: "m3-competition-touring",
    bodyType: BodyType.WAGON,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/m3-touring/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "7-serie",
    brand: "bmw",
    slug: "7-serie",
    bodyType: BodyType.SEDAN,
    website:
      "https://www.bmw.se/sv/alla-modeller/7-serie/sedan/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "M760e xDrive",
    brand: "bmw",
    slug: "m760e-xdrive",
    bodyType: BodyType.SEDAN,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/bmw-m760e-xdrive/2023/overblick.html#laddhybrid",
    imageUrl: "",
  },
  {
    name: "5-serie Sedan (2023)",
    brand: "bmw",
    slug: "5-serie-sedan-2023",
    bodyType: BodyType.SEDAN,
    website:
      "https://www.bmw.se/sv/alla-modeller/5-serie/sedan/bmw-5-serie-Sedan-overblick.html",
    imageUrl: "",
  },
  {
    name: "5-serie Sedan",
    brand: "bmw",
    slug: "5-serie-sedan",
    bodyType: BodyType.SEDAN,
    website:
      "https://www.bmw.se/sv/alla-modeller/5-serie/sedan/2021/overblick.html",
    imageUrl: "",
  },
  {
    name: "M5 Sedan",
    brand: "bmw",
    slug: "m5-sedan",
    bodyType: BodyType.SEDAN,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/m5-sedan/2021/bmw-5-serien-sedan-m-oeversikt.html",
    imageUrl: "",
  },
  {
    name: "M5 Sedan (2024)",
    brand: "bmw",
    slug: "m5-sedan-2024",
    bodyType: BodyType.SEDAN,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/m5-series/bmw-m5-sedan.html",
    imageUrl: "",
  },
  {
    name: "3-serie Sedan (2024)",
    brand: "bmw",
    slug: "3-serie-sedan-2024",
    bodyType: BodyType.SEDAN,
    website:
      "https://www.bmw.se/sv/alla-modeller/3-serie/bmw-3-serie-sedan/bmw-3-serie-sedan.html",
    imageUrl: "",
  },
  {
    name: "3-serie Sedan",
    brand: "bmw",
    slug: "3-serie-sedan",
    bodyType: BodyType.SEDAN,
    website:
      "https://www.bmw.se/sv/alla-modeller/3-serie/sedan/2022/bmw-3-serie-sedan-oversikt.html",
    imageUrl: "",
  },
  {
    name: "M3 Sedan (2024)",
    brand: "bmw",
    slug: "m3-sedan-2024",
    bodyType: BodyType.SEDAN,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/bmw-3er-m-modelle/bmw-m3-limousine.html",
    imageUrl: "",
  },
  {
    name: "M3 Sedan",
    brand: "bmw",
    slug: "m3-sedan",
    bodyType: BodyType.SEDAN,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/m3-sedan/2023/overblick.html",
    imageUrl: "",
  },
  {
    name: "i7",
    brand: "bmw",
    slug: "i7",
    bodyType: BodyType.SEDAN,
    website: "https://www.bmw.se/sv/alla-modeller/bmw-i/i7/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "i7 M70 xDrive",
    brand: "bmw",
    slug: "i7-m70-xdrive",
    bodyType: BodyType.SEDAN,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/bmw-m760e-xdrive/2023/overblick.html",
    imageUrl: "",
  },
  {
    name: "i5 sedan",
    brand: "bmw",
    slug: "i5-sedan",
    bodyType: BodyType.SEDAN,
    website:
      "https://www.bmw.se/sv/alla-modeller/bmw-i/i5/bmw-i5-oeversikt.html",
    imageUrl: "",
  },
  {
    name: "8-serie Cabriolet",
    brand: "bmw",
    slug: "8-serie-cabriolet",
    bodyType: BodyType.CABRIOLET,
    website:
      "https://www.bmw.se/sv/alla-modeller/8-serie/cabriolet/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "M8 Cabriolet",
    brand: "bmw",
    slug: "m8-cabriolet",
    bodyType: BodyType.CABRIOLET,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/m8-convertible/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "4-serie Cabriolet",
    brand: "bmw",
    slug: "4-serie-cabriolet",
    bodyType: BodyType.CABRIOLET,
    website:
      "https://www.bmw.se/sv/alla-modeller/4-serie/cabriolet/2020/overblick.html",
    imageUrl: "",
  },
  {
    name: "M440i xDrive Cabriolet",
    brand: "bmw",
    slug: "m440i-xdrive-cabriolet",
    bodyType: BodyType.CABRIOLET,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/bmw-m4/bmw-m4-cabriolet.html#m440i-cabriolet",
    imageUrl: "",
  },
  {
    name: "M4 Competition M xDrive Cabriolet",
    brand: "bmw",
    slug: "m4-competition-m-xdrive-cabriolet",
    bodyType: BodyType.CABRIOLET,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/bmw-m4/bmw-m4-cabriolet.html",
    imageUrl: "",
  },
  {
    name: "Z4",
    brand: "bmw",
    slug: "z4",
    bodyType: BodyType.CABRIOLET,
    website:
      "https://www.bmw.se/sv/alla-modeller/z-series/roadster/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "Z4 M40i",
    brand: "bmw",
    slug: "z4-m40i",
    bodyType: BodyType.CABRIOLET,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/bmw-z4-m40i/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "8-serie Coupé",
    brand: "bmw",
    slug: "8-serie-coupe",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/8-serie/coupe/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "M8 Coupé",
    brand: "bmw",
    slug: "m8-coupe",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/m8-coupe/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "4-serie Coupé",
    brand: "bmw",
    slug: "4-serie-coupe",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/4-serie/coupe/2021/overblick.html",
    imageUrl: "",
  },
  {
    name: "M4 CS",
    brand: "bmw",
    slug: "m4-cs",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/bmw-m4/bmw-m4-coupe.html",
    imageUrl: "",
  },
  {
    name: "M440i xDrive Coupé",
    brand: "bmw",
    slug: "m440i-xdrive-coupe",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/bmw-m4/bmw-m4-coupe.html#m440i-coupe",
    imageUrl: "",
  },
  {
    name: "M2 Coupe (2024)",
    brand: "bmw",
    slug: "m2-coupe-2024",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/bmw-2-serie-m-modeller/bmw-m2-coupe.html",
    imageUrl: "",
  },
  {
    name: "M240i xDrive Coupe",
    brand: "bmw",
    slug: "m240i-xdrive-coupe",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/bmw-2-serie-m-modeller/bmw-m2-coupe.html#bmw-m240i-xdrive",
    imageUrl: "",
  },
  {
    name: "M2 Coupe",
    brand: "bmw",
    slug: "m2-coupe",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/m2-coupe/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "8-serie Gran Coupé",
    brand: "bmw",
    slug: "8-serie-gran-coupe",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/8-serie/gran-coupe/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "M8 Gran Coupé",
    brand: "bmw",
    slug: "m8-gran-coupe",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/m8-gran-coupe/2022/overblick.html",
    imageUrl: "",
  },
  {
    name: "4-serie Gran Coupé",
    brand: "bmw",
    slug: "4-serie-gran-coupe",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/4-serie/gran-coupe/2021/bmw-4-serie-gran-coupe-oeversikt.html",
    imageUrl: "",
  },
  {
    name: "M440i xDrive Gran Coupé",
    brand: "bmw",
    slug: "m440i-xdrive-gran-coupe",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/4-series-m440i/bmw-m440i-xdrive-gran-coupe.html",
    imageUrl: "",
  },
  {
    name: "i4 (2024)",
    brand: "bmw",
    slug: "i4-2024",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/i-series/i4/bmw-i4-gran-coupe.html",
    imageUrl: "",
  },
  {
    name: "i4",
    brand: "bmw",
    slug: "i4",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/bmw-i/i4/2021/bmw-i4-oversikt.html",
    imageUrl: "",
  },
  {
    name: "i4 M50 xDrive",
    brand: "bmw",
    slug: "i4-m50-xdrive",
    bodyType: BodyType.COUPE,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/i4-m50/bmw-i4-m50-xdrive-gran-coupe.html",
    imageUrl: "",
  },
  {
    name: "2-serie Active Tourer",
    brand: "bmw",
    slug: "2-serie-active-tourer",
    bodyType: BodyType.HATCHBACK,
    website:
      "https://www.bmw.se/sv/alla-modeller/2-serie/active-tourer/2021/bmw-2-serie-active-tourer-oversikt.html",
    imageUrl: "",
  },
  {
    name: "1-serie",
    brand: "bmw",
    slug: "1-serie",
    bodyType: BodyType.HATCHBACK,
    website:
      "https://www.bmw.se/sv/alla-modeller/1-serie/hatch/2021/overblick.html",
    imageUrl: "",
  },
  {
    name: "1-serie (2024)",
    brand: "bmw",
    slug: "1-serie-2024",
    bodyType: BodyType.HATCHBACK,
    website:
      "https://www.bmw.se/sv/alla-modeller/1-serie/bmw-1-serie/bmw-1-serie.html",
    imageUrl: "",
  },
  {
    name: "M135i xDrive",
    brand: "bmw",
    slug: "m135i-xdrive",
    bodyType: BodyType.HATCHBACK,
    website:
      "https://www.bmw.se/sv/alla-modeller/1-serie/m135i/2021/overblick.html",
    imageUrl: "",
  },
  {
    name: "M135i xDrive (2024)",
    brand: "bmw",
    slug: "m135i-xdrive-2024",
    bodyType: BodyType.HATCHBACK,
    website:
      "https://www.bmw.se/sv/alla-modeller/m-serie/bmw-m-135/bmw-m135.html",
    imageUrl: "",
  },
  {
    name: "Capri",
    brand: "ford",
    slug: "capri",
    bodyType: BodyType.SUV,
    website: "https://ford.se/personbilar/capri",
    imageUrl: "https://cms.ford-edm.com/87ho9dpfd0qvbt69r5dmhzeaxw75",
  },
  {
    name: "Explorer",
    brand: "ford",
    slug: "explorer",
    bodyType: BodyType.SUV,
    website: "https://ford.se/personbilar/elektriska-explorer",
    imageUrl: "https://cms.ford-edm.com/446p21pghmnsqdtrxhfsm5i7kwpn",
  },
  {
    name: "Kuga",
    brand: "ford",
    slug: "kuga",
    bodyType: BodyType.SUV,
    website: "https://ford.se/personbilar/nya-kuga",
    imageUrl: "https://cms.ford-edm.com/y9v4yylabsngp4o6fni7u10q2ac6",
  },
  {
    name: "Puma",
    brand: "ford",
    slug: "puma",
    bodyType: BodyType.CROSSOVER,
    website: "https://ford.se/personbilar/nya-puma",
    imageUrl: "https://cms.ford-edm.com/w0e7z2biiydsu8iu5i48ii138vpg",
  },
  {
    name: "Mustang Mach-E",
    brand: "ford",
    slug: "mustang-mach-e",
    bodyType: BodyType.SUV,
    website: "https://ford.se/personbilar/mustang-mach-e",
    imageUrl: "https://cms.ford-edm.com/00hlvy9f80bx2e56xnqiatza3ekf",
  },
  {
    name: "Mustang Mach-E GT",
    brand: "ford",
    slug: "mustang-mach-e-gt",
    bodyType: BodyType.SUV,
    website: "https://ford.se/personbilar/mustang-mach-e-gt",
    imageUrl: "https://cms.ford-edm.com/3i6gv2p333t1ubqkm6g073rviqeh",
  },
  {
    name: "Focus",
    brand: "ford",
    slug: "focus",
    bodyType: BodyType.HATCHBACK,
    website: "https://ford.se/personbilar/focus",
    imageUrl: "https://cms.ford-edm.com/rzvf5jxq1iaf74p6f73gze2f0ut7",
  },
  {
    name: "Tourneo Connect",
    brand: "ford",
    slug: "tourneo-connect",
    bodyType: BodyType.VAN,
    website: "https://ford.se/personbilar/tourneo-connect",
    imageUrl: "https://cms.ford-edm.com/c02wbbm0dr1jkoew01qkrgddd3lr",
  },
  {
    name: "Mustang",
    brand: "ford",
    slug: "mustang",
    bodyType: BodyType.COUPE,
    website: "https://ford.se/personbilar/nya-mustang",
    imageUrl: "https://cms.ford-edm.com/w4ltth9jx1kdjr8m304tioi6236l",
  },
  {
    name: "Bronco",
    brand: "ford",
    slug: "bronco",
    bodyType: BodyType.SUV,
    website: "https://ford.se/personbilar/bronco",
    imageUrl: "https://cms.ford-edm.com/jbrka8d7bzsui39dl0902e877u0q",
  },
  {
    name: "Tourneo Custom",
    brand: "ford",
    slug: "tourneo-custom",
    bodyType: BodyType.VAN,
    website: "https://ford.se/personbilar/nya-tourneo-custom",
    imageUrl: "https://cms.ford-edm.com/gchktum5bfiqgs2092n8ipkppw74",
  },
  {
    name: "Tourneo Courier",
    brand: "ford",
    slug: "tourneo-courier",
    bodyType: BodyType.VAN,
    website: "https://ford.se/personbilar/nya-tourneo-courier",
    imageUrl:
      "https://ford.se/media_assets/2b18f604-a3a0-4d07-a970-cf623eab9a4d",
  },
  {
    name: "208",
    brand: "peugeot",
    slug: "208",
    bodyType: BodyType.HATCHBACK,
    website: "https://www.peugeot.se/modeller/208.html",
    imageUrl:
      "https://www.peugeot.se/content/dam/peugeot/master/b2c/our-range/showroom/208/2023-10-new-208/desktop/D_SR_208_Allure_1.jpg?imwidth=1920",
  },
  {
    name: "308",
    brand: "peugeot",
    slug: "308",
    bodyType: BodyType.HATCHBACK,
    website: "https://www.peugeot.se/modeller/308.html",
    imageUrl:
      "https://www.peugeot.se/content/dam/peugeot/sweden/modeller/308/l-m/308_1920x1080.jpg?imwidth=1920",
  },
  {
    name: "308 SW",
    brand: "peugeot",
    slug: "308-sw",
    bodyType: BodyType.WAGON,
    website: "https://www.peugeot.se/modeller/308-sw.html",
    imageUrl:
      "https://www.peugeot.se/content/dam/peugeot/sweden/modeller/308-sw/308SW_1920x1080.jpg?imwidth=1920",
  },
  {
    name: "408",
    brand: "peugeot",
    slug: "408",
    bodyType: BodyType.SEDAN,
    website: "https://www.peugeot.se/modeller/408.html",
    imageUrl:
      "https://www.peugeot.se/content/dam/peugeot/sweden/modeller/408/l-m/408nya_2880x1620.jpg?imwidth=1920",
  },
  {
    name: "508",
    brand: "peugeot",
    slug: "508",
    bodyType: BodyType.SEDAN,
    website: "https://www.peugeot.se/modeller/508.html",
    imageUrl:
      "https://www.peugeot.se/content/dam/peugeot/master/b2c/our-range/showroom/new-508/desktop/Showroom_508_D_Allure_1.jpg?imwidth=1920",
  },
  {
    name: "508 Sport Engineered",
    brand: "peugeot",
    slug: "508-sport-engineered",
    bodyType: BodyType.SEDAN,
    website:
      "https://www.peugeot.se/modeller/508-peugeot-sport-engineered.html",
    imageUrl:
      "https://www.peugeot.se/content/dam/peugeot/master/b2c/our-range/showroom/new-508-pse/desktop/PEUGEOT_508PERFO_2302AD_003_FR.jpg?imwidth=1920",
  },
  {
    name: "508 SW",
    brand: "peugeot",
    slug: "508-sw",
    bodyType: BodyType.WAGON,
    website: "https://www.peugeot.se/modeller/508-sw.html",
    imageUrl:
      "https://www.peugeot.se/content/dam/peugeot/master/b2c/our-range/showroom/new-508-sw/desktop/Showroom_508SW_D_Header.jpg?imwidth=1920",
  },
  {
    name: "508 SW Sport Engineered",
    brand: "peugeot",
    slug: "508-sw-sport-engineered",
    bodyType: BodyType.WAGON,
    website:
      "https://www.peugeot.se/modeller/508-sw-peugeot-sport-engineered.html",
    imageUrl:
      "https://www.peugeot.se/content/dam/peugeot/master/b2c/our-range/showroom/new-508-sw-pse/desktop/Showroom_508SW_PSE_D_Allure_1.jpg?imwidth=1920",
  },
  {
    name: "2008",
    brand: "peugeot",
    slug: "2008",
    bodyType: BodyType.SUV,
    website: "https://www.peugeot.se/modeller/2008.html",
    imageUrl:
      "https://www.peugeot.se/content/dam/peugeot/sweden/modeller/2008/E-2008_fram_2030x1146.jpg?imwidth=1920",
  },
  {
    name: "3008",
    brand: "peugeot",
    slug: "3008",
    bodyType: BodyType.SUV,
    website: "https://www.peugeot.se/modeller/3008.html",
    imageUrl:
      "https://www.peugeot.se/content/dam/peugeot/master/b2c/our-range/showroom/3008/2023-new-e-3008-/desktop/D_Showroom_3008_5_1.jpg?imwidth=1920",
  },
  {
    name: "5008",
    brand: "peugeot",
    slug: "5008",
    bodyType: BodyType.SUV,
    website: "https://www.peugeot.se/modeller/5008.html",
    imageUrl:
      "https://www.peugeot.se/content/dam/peugeot/master/b2c/our-range/new-5008-suv/l-m/PEUGEOT_5008_2020_018_FR_1214_1020.jpg?imwidth=1920",
  },
  {
    name: "E-5008",
    brand: "peugeot",
    slug: "e-5008",
    bodyType: BodyType.SUV,
    website: "https://www.peugeot.se/modeller/e-5008.html",
    imageUrl:
      "https://www.peugeot.se/content/dam/peugeot/master/b2c/our-range/showroom/5008/2024-03/new-e-5008-desktop/PEUGEOT_E_5008_SHOWROOM_MASTHEAD_D_2880x1620.jpg?imwidth=1920",
  },
  {
    name: "E-Rifter",
    brand: "peugeot",
    slug: "e-rifter",
    bodyType: BodyType.VAN,
    website: "https://www.peugeot.se/modeller/rifter.html",
    imageUrl:
      "https://www.peugeot.se/content/dam/peugeot/master/b2c/our-range/showroom/rifter/new-e-rifter---2023-11/desktop/NEW_E_RIFTER_EXCELLENCE_1_DESKTOP_2030x1146.jpg?imwidth=1920",
  },
  {
    name: "E-Traveller",
    brand: "peugeot",
    slug: "e-traveller",
    bodyType: BodyType.VAN,
    website: "https://www.peugeot.se/modeller/traveller.html",
    imageUrl:
      "https://www.peugeot.se/content/dam/peugeot/master/b2c/our-range/showroom/e-traveller/2023-10--new-e-traveller/desktop/NEW_E_TRAVELLER_ALLURE_1_DESKTOP_2880x1206.jpg?imwidth=1920",
  },
  {
    name: "Captur",
    brand: "renault",
    slug: "captur",
    bodyType: BodyType.SUV,
    website: "https://www.renault.se/bilar/personbilar/nya-captur",
    imageUrl:
      "https://www.renault.se/_next/image?url=%2F-%2Fmedia%2Fproject%2Fhedin%2Fnavigo%2Frenault%2Fmodels%2Fhybrids%2Fcaptur-ph2%2Fcarousel-herobanner%2Fcaptur-hjb-overview-001-desktop.jpg%3Fh%3D1440%26iar%3D0%26w%3D2560%26rev%3D442c297d98a5456f834f7e8d72c9f39e&w=828&q=75",
  },
  {
    name: "Scenic",
    brand: "renault",
    slug: "scenic",
    bodyType: BodyType.SUV,
    website: "https://www.renault.se/bilar/elbilar/scenic-e-tech-electric",
    imageUrl:
      "https://www.renault.se/_next/image?url=%2F-%2Fmedia%2Fproject%2Fhedin%2Fnavigo%2Frenault%2Fmodels%2Felectric-cars%2Fscenic-e-tech-electric%2Fcarousels%2Fscenic-hcb-ph1-overview-002-desktop.jpg%3Fh%3D961%26iar%3D0%26w%3D1708%26rev%3D369bb71554e74ec0bedff3dc5efc50e8&w=3840&q=75",
  },
  {
    name: "Escape",
    brand: "renault",
    slug: "escape",
    bodyType: BodyType.SUV,
    website: "https://www.renault.se/bilar/hybrid/espace",
    imageUrl:
      "https://www.renault.se/_next/image?url=%2F-%2Fmedia%2Fproject%2Fhedin%2Fnavigo%2Frenault%2Fmodels%2Fhybrids%2Fespace%2Fcarousels%2Fr-dam_1468672.jpg%3Fh%3D961%26iar%3D0%26w%3D1708%26rev%3Deb1f0b1beeea4a5ca6c66636ad60b208&w=3840&q=75",
  },
  {
    name: "Clio",
    brand: "renault",
    slug: "clio",
    bodyType: BodyType.HATCHBACK,
    website: "https://www.renault.se/bilar/personbilar/clio",
    imageUrl: "",
  },
  {
    name: "Megane",
    brand: "renault",
    slug: "megane",
    bodyType: BodyType.HATCHBACK,
    website: "https://www.renault.se/bilar/elbilar/megane-e-tech-electric",
    imageUrl:
      "https://www.renault.se/_next/image?url=%2F-%2Fmedia%2Fproject%2Fhedin%2Fnavigo%2Frenault%2Fmodels%2Felectric-cars%2Fmegane-e-tech-electric%2Fblurb-stagerow%2Frenault-megane-e-tech-electric-012.jpg%3Fh%3D576%26iar%3D0%26w%3D1024%26rev%3D5a226f68be31458ea46d40e94d72aa67&w=2048&q=75",
  },
  {
    name: "Austral",
    brand: "renault",
    slug: "austral",
    bodyType: BodyType.SUV,
    website: "https://www.renault.se/bilar/personbilar/austral",
    imageUrl:
      "https://www.renault.se/_next/image?url=%2F-%2Fmedia%2Fproject%2Fhedin%2Fnavigo%2Frenault%2Fmodels%2Fpersonal-cars%2Faustral%2Fcarousels%2Faustral-hhn-hero-006.jpg%3Fh%3D961%26iar%3D0%26w%3D1708%26rev%3D8be978161c5a42278a5ef2ecca35a8f2&w=3840&q=75",
  },
  {
    name: "Kangoo Family",
    brand: "renault",

    slug: "kangoo-family",
    bodyType: BodyType.VAN,
    website: "https://www.renault.se/bilar/personbilar/kangoo-family",
    imageUrl:
      "https://www.renault.se/_next/image?url=%2F-%2Fmedia%2Fproject%2Fhedin%2Fnavigo%2Frenault%2Fmodels%2Felectric-cars%2Fkangoo-family-e-tech-electric%2Fcarousels%2Fkangoo-family-e-tech-electric-banner.jpg%3Fh%3D961%26iar%3D0%26w%3D1708%26rev%3D317f2f9558a4473283d3618033be1060&w=3840&q=75",
  },
  {
    name: "Trafic Passenger",
    brand: "renault",
    slug: "trafic-passenger",
    bodyType: BodyType.VAN,
    website: "https://www.renault.se/bilar/personbilar/trafic-passenger",
    imageUrl:
      "https://www.renault.se/_next/image?url=%2F-%2Fmedia%2Fproject%2Fhedin%2Fnavigo%2Frenault%2Fmodels%2Fpersonal-cars%2Ftrafic-passenger%2Fstage-rows%2Frenault-trafic-spaceclass-engine-2.jpg%3Fh%3D576%26iar%3D0%26w%3D1024%26rev%3Da21e3941f9ab4e1881cac4c3f991d193&w=2048&q=75",
  },
  {
    name: "Aygo X",
    brand: "toyota",
    slug: "aygo-x",
    bodyType: BodyType.HATCHBACK,
    website: "https://www.toyota.se/bilar/aygo-x",
    imageUrl:
      "https://scene7.toyota.eu/is/image/toyotaeurope/AYX0003a_22-2:Large-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0",
  },
  {
    name: "Yaris",
    brand: "toyota",
    slug: "yaris",
    bodyType: BodyType.HATCHBACK,
    website: "https://www.toyota.se/bilar/yaris",
    imageUrl:
      "https://scene7.toyota.eu/is/image/toyotaeurope/YAR0003_24_WEB:Large-Landscape?ts=1707223928068&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=png-alpha",
  },
  {
    name: "Yaris Cross",
    brand: "toyota",
    slug: "yaris-cross",
    bodyType: BodyType.CROSSOVER,
    website: "https://www.toyota.se/bilar/yaris-cross",
    imageUrl:
      "https://scene7.toyota.eu/is/image/toyotaeurope/toyota-yaris-cross-2024-hub-design?qlt=80&wid=1600&fit=fit,1&ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=png-alpha",
  },
  {
    name: "Corolla",
    brand: "toyota",
    slug: "corolla",
    bodyType: BodyType.HATCHBACK,
    website: "https://www.toyota.se/bilar/corolla",
    imageUrl:
      "https://scene7.toyota.eu/is/image/toyotaeurope/COR0001a_23_web:Large-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0",
  },
  {
    name: "Corolla Touring Sports",
    brand: "toyota",
    slug: "corolla-touring-sports",
    bodyType: BodyType.WAGON,
    website: "https://www.toyota.se/bilar/corolla-touring-sports",
    imageUrl:
      "https://scene7.toyota.eu/is/image/toyotaeurope/COR0002b_23_web:Large-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0",
  },
  {
    name: "Corolla Cross",
    brand: "toyota",
    slug: "corolla-cross",
    bodyType: BodyType.CROSSOVER,
    website: "https://www.toyota.se/bilar/corolla-cross",
    imageUrl:
      "https://scene7.toyota.eu/is/image/toyotaeurope/CX0001a_22:Large-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0",
  },
  {
    name: "C-HR",
    brand: "toyota",
    slug: "c-hr",
    bodyType: BodyType.CROSSOVER,
    website: "https://www.toyota.se/bilar/c-hr",
    imageUrl: "",
  },
  {
    name: "bZ4X",
    brand: "toyota",
    slug: "bz4x",
    bodyType: BodyType.SUV,
    website: "https://www.toyota.se/bilar/bz4x",
    imageUrl:
      "https://scene7.toyota.eu/is/image/toyotaeurope/new_TOY_DES_EL_2024_HUB_SOC_IMG_CAR_ONLY_bZ4X:Large-Landscape?ts=1708540288753&resMode=sharp2&op_usm=1.75,0.3,2,0",
  },
  {
    name: "RAV4",
    brand: "toyota",
    slug: "rav4",
    bodyType: BodyType.SUV,
    website: "https://www.toyota.se/bilar/rav4",
    imageUrl:
      "https://scene7.toyota.eu/is/image/toyotaeurope/RAV0005a_22:Large-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0",
  },
  {
    name: "RAV4 Plug-in Hybrid",
    brand: "toyota",
    slug: "rav4-plug-in-hybrid",
    bodyType: BodyType.SUV,
    website: "https://www.toyota.se/bilar/rav4-laddhybrid",
    imageUrl:
      "https://scene7.toyota.eu/is/image/toyotaeurope/REV0004a_21:Large-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0",
  },
  {
    name: "GR Supra",
    brand: "toyota",
    slug: "gr-supra",
    bodyType: BodyType.COUPE,
    website: "https://www.toyota.se/bilar/supra",
    imageUrl:
      "https://scene7.toyota.eu/is/image/toyotaeurope/toyota-supra-2020-gallery-01-full_tcm-10-1893836?wid=1920&fit=fit,1&ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0",
  },
  {
    name: "GR Yaris",
    brand: "toyota",
    slug: "gr-yaris",
    bodyType: BodyType.HATCHBACK,
    website: "https://www.toyota.se/bilar/gr-yaris",
    imageUrl:
      "https://scene7.toyota.eu/is/image/toyotaeurope/GRY0007a_24_WEB:Large-Landscape?ts=1719828542058&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=png-alpha",
  },
  {
    name: "Picanto",
    brand: "kia",
    slug: "picanto",
    bodyType: BodyType.HATCHBACK,
    website: "https://www.kia.com/se/nya-bilar/picanto/upptack/",
    imageUrl:
      "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ja/picanto-my25/discover/kia-picanto-gtl-my25-Static-FrontTop-exterior-with-Talent--w-t-m.jpg",
  },
  {
    name: "Stonic",
    brand: "kia",
    slug: "stonic",
    bodyType: BodyType.CROSSOVER,
    website: "https://www.kia.com/se/nya-bilar/stonic/upptack/",
    imageUrl:
      "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/stonic/discover/kia-stonic-gls-my22-cover-w-v1.jpg",
  },
  {
    name: "Ceed Sportswagon",
    brand: "kia",
    slug: "ceed-sportswagon-plug-in-hybrid",
    bodyType: BodyType.WAGON,
    website: "https://www.kia.com/se/nya-bilar/ceed-sportswagon-phev/upptack/",
    imageUrl:
      "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/kia-ceed-sportswagon-my22/discover/kia-ceed-sportswagon-phev-my22-design-w.jpg",
  },
  {
    name: "XCeed",
    brand: "kia",
    slug: "xceed-plug-in-hybrid",
    bodyType: BodyType.CROSSOVER,
    website: "https://www.kia.com/se/nya-bilar/xceed/upptack/",
    imageUrl:
      "https://www.kia.com/content/dam/kwcms/kme/se/sv/assets/contents/new-car/xceed-cd-cuv-22/xceed_1920x1080px.jpg",
  },
  {
    name: "Niro",
    brand: "kia",
    slug: "niro",
    bodyType: BodyType.SUV,
    website: "https://www.kia.com/se/nya-bilar/elbil-niro-ev/upptack/",
    imageUrl:
      "https://www.kia.com/content/dam/kwcms/kme/se/sv/assets/contents/new-car/niro-ev/niro-ev-gotland-front-page.jpg",
  },
  {
    name: "Sportage",
    brand: "kia",
    slug: "sportage",
    bodyType: BodyType.SUV,
    website: "https://www.kia.com/se/nya-bilar/sportage/upptack/",
    imageUrl:
      "https://www.kia.com/content/dam/kwcms/kme/se/sv/assets/contents/new-car/sportage/sportage-header-2023-1920x1080px.jpg",
  },
  {
    name: "EV6",
    brand: "kia",
    slug: "ev6",
    bodyType: BodyType.SUV,
    website: "https://www.kia.com/se/nya-bilar/ev6/upptack/",
    imageUrl:
      "https://www.kia.com/content/dam/kwcms/kme/se/sv/assets/contents/new-car/ev6/Kia-ev6-special-edition-front-page-version-2.jpg",
  },
  {
    name: "EV6 GT",
    brand: "kia",
    slug: "ev6-gt",
    bodyType: BodyType.SUV,
    website: "https://www.kia.com/se/nya-bilar/ev6-gt/upptack/",
    imageUrl:
      "https://www.kia.com/content/dam/kwcms/kme/se/sv/assets/contents/new-car/ev6-gt/ev6-gt-winner2-1920x1080px.jpg",
  },
  {
    name: "Sorento",
    brand: "kia",
    slug: "sorento",
    bodyType: BodyType.SUV,
    website: "https://www.kia.com/se/nya-bilar/sorento-plug-in-hybrid/upptack/",
    imageUrl:
      "https://www.kia.com/content/dam/kwcms/kme/se/sv/assets/contents/new-car/sorento-phev/Sorento_bjorn_1920x1080.jpg",
  },
  {
    name: "EV9",
    brand: "kia",
    slug: "ev9",
    bodyType: BodyType.SUV,
    website: "https://www.kia.com/se/nya-bilar/ev9/upptack/",
    imageUrl:
      "https://www.kia.com/content/dam/kwcms/kme/se/sv/assets/contents/new-car/ev9/EV9-sommar-v3-1920x1080px.jpg",
  },
];
