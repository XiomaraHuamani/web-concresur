import { Helmet } from "react-helmet";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, title, description, keywords }) => {
  return (
    <>
      <Helmet>
        <title>{title ? title : "Concresur "}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : "En Concresur ofrecemos soluciones integrales y eficientes en concreto premezclado y prefabricados. Nos destacamos por nuestro servicio personalizado y asesoría técnica especializada para garantizar el éxito y la seguridad en cada proyecto."
          }
        />

        <meta
          name="keywords"
          content={
            keywords
              ? keywords.join(", ")
              : "Concreto premezclado ,Prefabricados de concreto,Soluciones en concreto,Servicio personalizado,,Asesoría técnica especializada,Calidad en construcción,Proyectos de concreto,Seguridad en proyectos,Concreto eficiente,Construcción con concreto , concresur peru , concresur "
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
