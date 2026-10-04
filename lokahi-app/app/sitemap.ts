import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lokahieventiqueer.com";

  const pagine = [
    "",
    "/chi-siamo",
    "/Viaggi/Crociera-over-40",
    "/Viaggi/Giappone",
    "/Viaggi/Islanda",
    "/Viaggi/Islanda-2027",
    "/Viaggi/Marocco",
    "/Viaggi/mercatini-natale",
    "/Viaggi/Puglia",
    "/Viaggi/Sardegna-camper",
    "/Viaggi/Sicilia",
    "/Viaggi/Thailandia",
  ];

  return pagine.map((pagina) => ({
    url: `${baseUrl}${pagina}`,
    lastModified: new Date(),
    changeFrequency: pagina === "" ? "weekly" : "monthly",
    priority: pagina === "" ? 1 : 0.8,
  }));
}