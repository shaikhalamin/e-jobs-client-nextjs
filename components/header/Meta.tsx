import Head from "next/head";

interface MetaProps {
  title?: string;
  keywords?: string;
  descriptions?: string;
}

const Meta: React.FC<MetaProps> = ({ title, keywords, descriptions }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={descriptions} />
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: "Admin app",
};

export default Meta;
