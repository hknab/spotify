import {editUser, getUser, updateUser , getPlayList} from "api";
import {useQueryClient, useQuery, useMutation, useQueries} from "react-query";
import React from 'react'
const useUser = () => {
    return useQuery('user', getUser)
};
// PATH request
const useUpdateUser = () => {
    const queryClient = useQueryClient()
    return useMutation(updateUser, {
        onSuccess: (res) => {
            queryClient.setQueryData('user', res)
        }
    });
};
// PUT request
const useEditUser = () => {
    const queryClient = useQueryClient()
    return useMutation(editUser , {
        onSuccess: (res) => {
            queryClient.setQueryData('user', res)
        }
    })
}
const useUserPlayLists =  ()=> {
    const [playListsEnabled  ,setPlayListsEnabled] = React.useState(false)
    const {data} = useQuery('user', getUser , {
        onSuccess: () => {
            setPlayListsEnabled(true)
        },
        placeholderData: {playLists:[]}
    })
    return useQueries(data.playLists.map((id)=> {
            return {
                queryKey:['playList', id],
                queryFn: () => getPlayList(id),

            }
        }),{
        enabled: playListsEnabled,
    } )


}
export { useUser, useUpdateUser , useEditUser , useUserPlayLists};
