import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "http://localhost:5015",
  baseURL: "https://server-job-nu.vercel.app",
  withCredentials: true,
});
const useAxiousPublic = () => {
  return axiosPublic;
};

export default useAxiousPublic;
