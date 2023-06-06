import dummyIconOne from "../../../assets/images/dummy-image-collection-banner.png";
export default function BannerAnalytics() {
  return (
    <>
      <section className="lg:px-20 px-3 pt-12 lg:py-16 py-6">
        <div className="md:container xl:px-12 mx-auto analytic-banner ">
          <div className="md:flex md:flex-row flex-col">
            <div className="lg:basis-2/5 basis-auto px-14 py-10 lg:my-32 bg-black/70 lg:rounded-3xl">
              <div className="flex gap-5 pb-4 items-center">
                <div className="w-10 h-10">
                  <img
                    className="w-full rounded-full"
                    src={dummyIconOne}
                    alt=""
                  />
                </div>
                <div>
                  <p className="font-medium text-white opacity-70">
                    @loramipsum
                  </p>
                </div>
              </div>
              <h2 className="collection-banner-heading pb-4 text-white md:text-7xl font-bold text-lg">
                PET LIGER
              </h2>
              <p className="font-medium text-white  w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci voluptatibus recusandae commodi illum.
              </p>
            </div>
            <div className="md:basis-1/2 hidden lg:block rounded-r-3xl"></div>
          </div>
        </div>
      </section>
    </>
  );
}
