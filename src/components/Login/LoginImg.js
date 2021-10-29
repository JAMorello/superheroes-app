import superheroes from "../../images/superheroes.jpg";

const LoginImg = () => {
  return (
    <div
      className="col d-none d-sm-block col-md-5 col-lg-5 col-xl-6 rounded"
      style={{
        backgroundImage: `url(${superheroes})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default LoginImg;
