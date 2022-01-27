import React from "react";
import {
  getPlayLists,
  getPlayList,
  createPlayList,
  updatePlayList,
  deletePlayList,
} from "api";

const useAllPlayLists = () => {};
const usePlayList = (id) => {};
const useCreatePlayList = (PlayList) => {};
const useUpdatePlayList = (id, PlayList) => {};
const useDeletePlayList = (id) => {};

export {
  useAllPlayLists,
  usePlayList,
  useCreatePlayList,
  useUpdatePlayList,
  useDeletePlayList,
};
