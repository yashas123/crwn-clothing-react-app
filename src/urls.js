import * as Yup from "yup";
import Location from "react-app-location";

const urls = {
  HomeLocation: "/",
  ShopLocation: "/shop",
  SignLocation: "/sign"
};

for (var url in urls) urls[url] = new Location(urls[url]);

export default urls;
