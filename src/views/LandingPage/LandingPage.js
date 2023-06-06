import CollectionSlider from "./components/collectionSlider";
import LandingHeroSlider from "./components/LandingHeroSlider";
import Fire from "../../assets/images/fire.png";
import CollectionBar from "./components/collectionBar";
import AllCollections from "./components/AllCollection";
import TopCollections from "./components/TopCollection";

export default function LandingPage() {
  return (
    <>
      <div className="lg:px-20 px-3 pt-12 landing-bg">
        <LandingHeroSlider />
      </div>
      <div className="bg-orange-500 mt-8 collection-bar-slider">
        <CollectionBar />
      </div>
      <div className="lg:px-20 px-3 pt-12">
        <div className="new-collection pb-12">
          <div className="flex lg:justify-between lg:items-center flex-wrap py-16">
            <div className="flex items-center">
              <h2 className="text-white font-bold lg:text-5xl text-3xl pl-5 lg:pl-0">
                Top Collection
              </h2>
              <span>
                <img src={Fire} />
              </span>
            </div>

            <button className="bg-transparent text-center px-10 py-2 rounded-full text-white border-amber-500 border active:border-amber-500">
              See all
            </button>
          </div>
          <div className="mb-8">
            <CollectionSlider />
          </div>
          <TopCollections />
          <AllCollections />
        </div>
      </div>
    </>
  );
}
