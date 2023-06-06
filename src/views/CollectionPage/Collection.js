import BannerCollection from "./components/BannerCollection";
import CollectionSlider from "./components/CollectionSlider";
import CollectionTabs from "./components/CollectionsTab";

export default function Collection() {
  return (
    <>
      <BannerCollection />
      <CollectionTabs />
      <CollectionSlider />
    </>
  );
}
