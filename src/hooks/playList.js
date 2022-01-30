import {useQuery, useMutation , useQueryClient} from "react-query";
import {
  getPlayLists,
  getPlayList,
  createPlayList,
  updatePlayList,
  deletePlayList,
} from "api";

const usePlayLists = () => {
  return useQuery('playLists', getPlayLists)
};
const usePlayList = (id) => {
  return useQuery(['playList', id] , ()=> getPlayList(id) )
};
const useCreatePlayList = () => {
  const queryClient = useQueryClient()
  return useMutation(createPlayList , {
    onSuccess: (playList) => {
        queryClient.setQueryData('playLists',  oldData => [...oldData , playList]);

    }
  })
};
const useUpdatePlayList = () => {
  const queryClient = useQueryClient()
  return useMutation(updatePlayList , {
    onSuccess:  (res) => {
       queryClient.invalidateQueries('playLists')
      queryClient.setQueryData(['playList' ,res.id] ,  () => res)

   },
  })
};
const useDeletePlayList = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePlayList , {
    onSuccess: (res, id) => {
      queryClient.setQueryData('playLists' , old => {
        return old.filter(item => item !== id)
      })
      queryClient.removeQueries(['playList' ,id])
    }
  })
};

export {
  usePlayLists,
  usePlayList,
  useCreatePlayList,
  useUpdatePlayList,
  useDeletePlayList,
};
