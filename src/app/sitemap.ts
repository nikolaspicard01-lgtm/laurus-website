import type { MetadataRoute } from "next";
import { summerLocations, springLocations } from "@/data/locations";
import { blogPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://laurus-website.vercel.app";
  const locales = ["en", "fr"];
  const now = new Date().toISOString();

  const entries: MetadataRoute.Sitemap = [];

  // Helper to add entries for both locales
  function add(path: string, priority: number, changeFrequency: "daily" | "weekly" | "monthly" | "yearly") {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
      });
    }
  }

  // Homepage
  add("", 1.0, "weekly");

  // Program pages (high priority)
  const programPages = [
    "summer-camp",
    "spring-break",
    "tutoring",
    "extra-curriculars",
    "languages",
    "inclusive-support",
  ];
  for (const page of programPages) {
    add(`/${page}`, 0.9, "weekly");
  }

  // Program sub-pages (summer-camp/programs/*)
  const programSlugs = ["junior", "youth", "leadership", "cit"];
  for (const slug of programSlugs) {
    add(`/summer-camp/programs/${slug}`, 0.9, "weekly");
  }

  // Other important pages
  const otherPages = [
    "events",
    "school-partnerships",
    "about",
    "contact",
    "faq",
    "partners",
    "blog",
  ];
  for (const page of otherPages) {
    add(`/${page}`, 0.7, "weekly");
  }

  // Summer camp location pages
  for (const location of summerLocations) {
    add(`/summer-camp/locations/${location.slug}`, 0.8, "monthly");
  }

  // Spring break location pages
  for (const location of springLocations) {
    add(`/spring-break/locations/${location.slug}`, 0.8, "monthly");
  }

  // Blog post pages
  for (const post of blogPosts) {
    add(`/blog/${post.slug}`, 0.7, "monthly");
  }

  // Legal pages (low priority)
  const legalPages = ["privacy-policy", "terms-and-conditions"];
  for (const page of legalPages) {
    add(`/${page}`, 0.3, "yearly");
  }

  return entries;
}
