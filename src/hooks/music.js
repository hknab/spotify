import { getMusics, getMusic, likeMusic } from "api";
import { useQuery, useMutation, useQueryClient } from "react-query";

const useMusics = (apiConfig) => {
  return useQuery("musics", () => getMusics(apiConfig));
};
const useMusic = (id) => {
  return useQuery(["music", id], () => getMusic(id));
};
const useLikeMusic = () => {
  //mutation callback gives object with id and liked = {id , liked = true | false}
  const queryClient = useQueryClient();
  return useMutation(likeMusic, {
    onSuccess: (res) => {
      queryClient.setQueryData(["music", res.id], () => res);
    },
  });
};
export { useMusics, useMusic, useLikeMusic };
