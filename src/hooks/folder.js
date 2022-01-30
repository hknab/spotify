import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getFolders,
  getFolder,
  createFolder,
  updateFolder,
  deleteFolder,
} from "api";

const useFolders = () => {
  return useQuery("folders", getFolders);
};
const useFolder = (id) => {
  return useQuery(["folder", id], () => getFolder(id));
};
const useCreateFolder = () => {
  const queryClient = useQueryClient()
  return useMutation(createFolder, {
    onSuccess: (folder, _) => {
      queryClient.setQueryData("folders", (old) => {
        return [...old , folder];
      });

    },
  });
};
const useUpdateFolder = () => {
  const queryClient = useQueryClient()
  return useMutation(updateFolder, {
    onSuccess: (_, { id, ...folder }) => {
      queryClient.invalidateQueries('folders')
      queryClient.setQueryData(["folder", id], folder);
    },
  });
};
const useDeleteFolder = () => {
  const queryClient = useQueryClient()
  return useMutation(deleteFolder, {
    onSuccess: (_, id) => {
      queryClient.setQueryData("folders", (old) => {
        return old.filter((item) => item.id !== id);
      });
    },
  });
};

export {
  useFolders,
  useFolder,
  useCreateFolder,
  useUpdateFolder,
  useDeleteFolder,
};
