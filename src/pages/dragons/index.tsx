import { useGetDragons } from "../../hooks/useGetDragons";

export const Dragons = () => {
  const data = useGetDragons();

  console.log(data.data);

  return <div>index</div>;
};
