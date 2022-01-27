import React from "react";
import {
  getFolders,
  getFolder,
  createFolder,
  updateFolder,
  deleteFolder,
} from "api";

const useAllFolders = () => {};
const useFolder = (id) => {};
const useCreateFolder = (Folder) => {};
const useUpdateFolder = (id, Folder) => {};
const useDeleteFolder = (id) => {};

export {
  useAllFolders,
  useFolder,
  useCreateFolder,
  useUpdateFolder,
  useDeleteFolder,
};
