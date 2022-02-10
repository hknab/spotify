import { editUser, getUser, updateUser, getPlaylist } from "api";
import { useQueryClient, useQuery, useMutation, useQueries } from "react-query";
import React from "react";
const useUser = () => {
  return useQuery("user", getUser);
};
// PATH request
const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(updateUser, {
    onSuccess: (res) => {
      queryClient.setQueryData("user", res);
    },
  });
};
// PUT request
const useEditUser = () => {
  const queryClient = useQueryClient();
  return useMutation(editUser, {
    onSuccess: (res) => {
      queryClient.setQueryData("user", res);
    },
  });
};
const useUserPlaylists = () => {
  const [playlistsEnabled, setPlaylistsEnabled] = React.useState(false);
  const { data } = useQuery("user", getUser, {
    onSuccess: () => {
      setPlaylistsEnabled(true);
    },
    placeholderData: { playlists: [] },
  });
  return useQueries(
    data.playlists.map((id) => {
      return {
        queryKey: ["Playlist", id],
        queryFn: () => getPlaylist(id),
      };
    }),
    {
      enabled: playlistsEnabled,
    }
  );
};
export { useUser, useUpdateUser, useEditUser, useUserPlaylists };
