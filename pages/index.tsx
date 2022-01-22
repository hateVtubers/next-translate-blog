import type { NextPage, GetStaticProps } from "next";
import type { Data } from "lib/mdx";
import { Card } from "components/Card";
import { DiscussionEmbed } from "disqus-react";

// @ts-ignore
const Home: NextPage = ({ frontMatter }: { frontMatter: Data[] }) => {
  const disqusConfig = {
    url: process.env.NEXT_PUBLIC_URL,
    identifier: "321312",
    title: "a",
  };
  return (
    <>
      <ul className="flex flex-col items-center gap-4">
        {frontMatter.map((data) => (
          <li key={data.code}>
            <Card data={data} />
          </li>
        ))}
      </ul>
      <div className="md:w-[700px] sm:w-[600px] w-80">
        <DiscussionEmbed shortname="translate-4" config={disqusConfig} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { getAllData } = await import("lib/mdx");
  const { datas } = await getAllData();
  return {
    props: {
      frontMatter: datas,
    },
  };
};

export default Home;
