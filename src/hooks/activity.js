import { useQuery } from "react-query";
import {
    getActivities
} from "api";

const useActivities = (config = {}) => {
    return useQuery("activities", getActivities , {...config});
};
export {useActivities}