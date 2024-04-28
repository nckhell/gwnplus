import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostsMetadata = {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

const getSnippet = (text: string): string => {
  const maxLength = 150;
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength).trim() + "...";
  }
};

export const getPosts = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const description = getSnippet(matterResult.data.description);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      description,
    } as PostsMetadata;
  });

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const formatDate = (date: string, includeRelative = false) => {
  let currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y geleden`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}ma geleden`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d geleden`;
  } else {
    formattedDate = "Vandaag";
  }

  let fullDate = targetDate.toLocaleString("nl-BE", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
};

export const getPost = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  const description = getSnippet(matterResult.data.description);

  const meta = {
    id,
    ...matterResult.data,
    description,
  } as PostsMetadata;

  return {
    ...meta,
    contentHtml,
  };
};
