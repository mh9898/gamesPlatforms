import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4a2680546d634acfa672ff8dc93a98f1",
  },
});
