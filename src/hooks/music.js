import { getMusics, getMusic } from "api";
import { useQuery, useQueries } from "react-query";

const useMusics = () => {
  return useQuery("musics", getMusics);
};
const useMusic = (id) => {
  return useQuery(["music", id], () => getMusic(id));
};
const useMusicQueries = (ids) =>
  useQueries(
    ids.map((id) => {
      return {
        queryKey: ["music", id],
        queryFn: () => getMusic(id),
      };
    })
  );
export { useMusics, useMusic, useMusicQueries };
