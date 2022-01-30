import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

/* -----------------------USER----------------------- */

const getUser = async () => {
  const { data } = await client.get("/user");
  return data;
};
const editUser = async (user) => {
    const { data } = await client.put('/user',user)
    return data
}
const updateUser = async (user) => {
  const { data } = await client.patch(`/user`, user);
  return data;
};
/* -----------------------PLAY LIST----------------------- */
const getPlayLists = async () => {
  const { data } = await client.get("/playLists");
  return data;
};
const getPlayList = async (id) => {
  const { data } = await client.get(`/playLists/${id}`);
  return data;
};
const createPlayList = async (playList) => {
  const { data } = await client.post("/playLists", playList);
  return data;
};
const updatePlayList = async ({id , ...playList}) => {
  const { data } = await client.put(`/playLists/${id}`, playList);
  return data;
};
const deletePlayList = async (id) => {
  const { data } = await client.delete(`/playlists/${id}`);
  return data;
};

/* -----------------------FOLDERS----------------------- */

const getFolders = async () => {
  const { data } = await client.get("/folders");
  return data;
};
const getFolder = async (id) => {

  const { data } = await client.get(`/folders/${id}`);
  return data;
};
const createFolder = async (folder) => {
  const { data } = await client.post("/folders", folder);
  return data;
};
const updateFolder = async ({ id, ...folder }) => {
  const { data } = await client.put(`/folders/${id}`, folder);
  return data;
};
const deleteFolder = async (id) => {
  const { data } = await client.delete(`/folders/${id}`);
  return data;
};

/* -----------------------MUSICS----------------------- */

const getMusics = async () => {
  const { data } = await client.get("/musics");
  return data;
};
const getMusic = async (id) => {
  const { data } = await client.get(`/musics/${id}`);
  return data;
};

export {
  getUser,
  updateUser,
  editUser,
  getPlayLists,
  getPlayList,
  createPlayList,
  updatePlayList,
  deletePlayList,
  getFolders,
  getFolder,
  createFolder,
  updateFolder,
  deleteFolder,
  getMusics,
  getMusic,

};
