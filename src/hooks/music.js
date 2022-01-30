import { getMusics, getMusic } from "api";
import { useQuery} from "react-query";

const useMusics = () => {
    return useQuery("musics", getMusics);
};
const useMusic = (id) => {
    return useQuery(['music', id], ()=> getMusic(id))
};
export { useMusics, useMusic };
