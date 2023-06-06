import dummyIconOne from "../../../assets/images/dummy-image-collection-banner.png";
import bannerImage from "../../../assets/images/collection-banner-image.png";

export default function BannerCollection() {
  return (
    <section className="collection-banner lg:py-16 py-6">
      <div className="md:container xl:px-12 mx-auto">
        <div className="md:flex md:flex-row flex-col">
          <div className="lg:basis-1/2 basis-auto px-14 py-20 bg-black/50 rounded-l-none lg:rounded-l-3xl">
            <div className="flex gap-5 pb-8 items-center">
              <div className="w-10 h-10">
                <img
                  className="w-full rounded-full"
                  src={dummyIconOne}
                  alt=""
                />
              </div>
              <div>
                <p className="font-medium text-white opacity-70">@loramipsum</p>
              </div>
            </div>
            <h2 className="collection-banner-heading pb-8 text-white md:text-7xl font-bold text-lg">
              PET LIGER
            </h2>
            <p className="font-medium text-white lg:w-2/3 w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptatibus recusandae commodi illum.
            </p>
          </div>
          <div className="md:basis-1/2 hidden lg:block rounded-r-3xl">
            <img className="w-full h-full" src={bannerImage} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}
