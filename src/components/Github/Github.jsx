import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  return (
    <>
      <h1 className="text-3xl text-center p-2">
        Total Repository{data["public_repos"]}
      </h1>
      <img className="p-4 " src={data["avatar_url"]} alt="" />
    </>
  );
};

export default Github;
