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
const getPlaylists = async () => {
  const { data } = await client.get("/Playlists");
  return data;
};
const getPlaylist = async (id) => {
  const { data } = await client.get(`/Playlists/${id}`);
  return data;
};
const createPlaylist = async (Playlist) => {
  const { data } = await client.post("/Playlists", Playlist);
  return data;
};
const updatePlaylist = async ({id , ...Playlist}) => {
  const { data } = await client.put(`/Playlists/${id}`, Playlist);
  return data;
};
const deletePlaylist = async (id) => {
  const { data } = await client.delete(`/Playlists/${id}`);
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

/* -----------------------ACTIVITY----------------------- */
const getActivities = async () => {
  const {data} = await client.get('/activities')
  return data
}

export {
  getUser,
  updateUser,
  editUser,
  getPlaylists,
  getPlaylist,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
  getFolders,
  getFolder,
  createFolder,
  updateFolder,
  deleteFolder,
  getMusics,
  getMusic,
  getActivities,
};
