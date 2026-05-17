import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  source: string;
};

export default function Mdx({ source }: Props) {
  return (
    <div className="mdx">
      <MDXRemote source={source} />
    </div>
  );
}