import {useQuery, useMutation , useQueryClient} from "react-query";
import {
  getPlaylists,
  getPlaylist,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
} from "api";

const usePlaylists = () => {
  return useQuery('Playlists', getPlaylists)
};
const usePlaylist = (id) => {
  return useQuery(['Playlist', id] , ()=> getPlaylist(id) )
};
const useCreatePlaylist = () => {
  const queryClient = useQueryClient()
  return useMutation(createPlaylist , {
    onSuccess: (Playlist) => {
        queryClient.setQueryData('Playlists',  oldData => [...oldData , Playlist]);

    }
  })
};
const useUpdatePlaylist = () => {
  const queryClient = useQueryClient()
  return useMutation(updatePlaylist , {
    onSuccess:  (res) => {
       queryClient.invalidateQueries('Playlists')
      queryClient.setQueryData(['Playlist' ,res.id] ,  () => res)

   },
  })
};
const useDeletePlaylist = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePlaylist , {
    onSuccess: (res, id) => {
      queryClient.setQueryData('Playlists' , old => {
        return old.filter(item => item !== id)
      })
      queryClient.removeQueries(['Playlist' ,id])
    }
  })
};

export {
  usePlaylists,
  usePlaylist,
  useCreatePlaylist,
  useUpdatePlaylist,
  useDeletePlaylist,
};
