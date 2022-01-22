import fs from "fs/promises";
import matter from "gray-matter";

export type Data = {
  title: string;
  artist: {
    name: string;
    twitter: string;
    pixiv: string;
  };
  pages: number;
  url: string;
  tags: string[];
  originalTranslator: string;
  code: number;
  type: string;
};

export const getAllMdx = async () => {
  const files = await fs.readdir("./posts");
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));
  return mdxFiles;
};

export const getSource = async (fileName: string) => {
  const source = await fs.readFile(`./posts/${fileName}`, "utf8");
  return source;
};

export const getAllData = async () => {
  const mdxFiles = await getAllMdx();
  const datas = (await Promise.all(
    mdxFiles.map(async (file) => matter(await getSource(file)).data)
  )) as Data[];

  return { datas };
};
