import type { Data } from "lib/mdx";
import Image from "next/image";
import { Pixiv } from "./Pixiv";
import { Tag } from "./Tag";
import { Twitter } from "./twitter";
import Link from "next/link";

export const Card = ({ data }: { data: Data }) => {
  return (
    <div className="bg-midnight-400 rounded-md flex flex-col sm:flex-row">
      <Image
        src={data.url}
        alt={data.artist.name}
        width={150}
        height={226}
        className="sm:rounded-l-md rounded-t-md"
      />
      <div className="grid sm:grid-rows-4 grid-rows-2 place-items-center p-2">
        <header>
          <Link href={`/${data.type}/${data.code}`}>
            <a className="text-sm text-center">{data.title}</a>
          </Link>
          <p className="text-xs text-center">{data.code}</p>
        </header>
        <ul className="sm:row-span-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-2 sm:w-96 hidden">
          {data.tags.map((tag) => (
            <Tag text={tag} key={tag} />
          ))}
        </ul>
        <footer className="flex items-center justify-center gap-2 text-sm">
          <span>author:</span>
          <Twitter
            width={20}
            height={20}
            id={data.artist.twitter}
            color="text-[#00acee]"
          />
          <Pixiv id={data.artist.pixiv} />
        </footer>
      </div>
    </div>
  );
};
