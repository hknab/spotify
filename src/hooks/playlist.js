import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getPlaylists,
  getPlaylist,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
} from "api";

const usePlaylists = () => {
  return useQuery("playlists", getPlaylists, {});
};
const usePlaylist = (id) => {
  return useQuery(["playlist", id], () => getPlaylist(id), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
};
const useCreatePlaylist = () => {
  const queryClient = useQueryClient();
  return useMutation(createPlaylist, {
    onSuccess: (Playlist) => {
      queryClient.setQueryData("playlists", (oldData) => [
        ...oldData,
        Playlist,
      ]);
    },
  });
};
const useUpdatePlaylist = () => {
  const queryClient = useQueryClient();
  return useMutation(updatePlaylist, {
    onSuccess: (res) => {
      queryClient.invalidateQueries("playlists");
      queryClient.setQueryData(["playlist", res.id], () => res);
    },
  });
};
const useDeletePlaylist = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePlaylist, {
    onSuccess: (res, id) => {
      queryClient.setQueryData("playlists", (old) => {
        return old.filter((item) => item !== id);
      });
      queryClient.removeQueries(["playlist", id]);
    },
  });
};

export {
  usePlaylists,
  usePlaylist,
  useCreatePlaylist,
  useUpdatePlaylist,
  useDeletePlaylist,
};
