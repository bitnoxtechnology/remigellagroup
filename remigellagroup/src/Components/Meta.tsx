import { Helmet } from "react-helmet";
interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Meta = ({ title, description, keywords }: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Remigella Group",
  description: `
   Established in 1993 as Remigella Interlink and Associates Nigeria Limited, we've grown 
   into one of Africa's most progressive business conglomerates.
  `,
  keywords:
    "remigellagroup, ohamadike, foundation, africa, nigeria, interlink, football club, ohamadike football club, ohamdike foundation, remigella international group",
};

export default Meta;
