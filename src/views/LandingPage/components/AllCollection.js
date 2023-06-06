import allCollectionIcon from "../../../assets/images/all-collection-heading-icon.png";
import searchIcon from "../../../assets/images/search-icon-collection.png";
import tableCollectionIcon from "../../../assets/images/table-collection-icon.png";
import tableChartIcon from "../../../assets/images/table-chart-image.png";
import { useState, useEffect } from "react";

export default function AllCollections() {


  return (
    <>
      <section className="all-collections">
        <div className=" pb-10 flex justify-between flex-wrap">
          <div className="flex gap-3 items-center">
            <h2 className="text-white font-bold lg:text-5xl text-3xl">
              All Collection
            </h2>
            <span>
              <img src={allCollectionIcon} alt="" />
            </span>
          </div>
          <div className=" flex space-x-5 justify-center items-center pl-2">
            <div className="relative bg-black collection-search flex items-center gap-3 rounded-3xl border-0">
              <input
                type="text"
                className="lg:w-64 w-48 py-2 pl-12 pr-2 rounded-3xl"
                placeholder="Search Collections"
              />
              <span>
                <img src={searchIcon} alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="table-resposnive">
          <table className="table-fixed w-full text-left text-xl">
            <thead>
              <tr>
                <th className="text-white lg:w-14 w-14 opacity-70 text-sm pb-6">
                  #
                </th>
                <th className="text-white w-56 lg:w-auto opacity-70 text-sm pb-6">
                  Collection
                </th>
                <th className="text-white w-56 lg:w-auto opacity-70 text-sm pb-6">
                  Volume 7d
                </th>
                <th className="text-white w-56 lg:w-auto opacity-70 text-sm pb-6">
                  Sales
                </th>
                <th className="text-white w-56 lg:w-auto opacity-70 text-sm pb-6">
                  AVG Price 7d
                </th>
                <th className="text-white w-56 lg:w-auto opacity-70 text-sm pb-6">
                  Owners
                </th>
                <th className="text-white w-56 lg:w-auto opacity-70 text-sm pb-6">
                  Estimated Market Cap
                </th>
                <th className="text-white w-56 lg:w-auto opacity-70 text-sm pb-6">
                  Velocity
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-white align-middle py-3 text-sm opacity-70">
                  1
                </td>
                <td className="text-white flex items-center align-middle py-3 text-sm">
                  <span>
                    <img
                      className="w-10 mr-1"
                      src={tableCollectionIcon}
                      alt=""
                    />
                  </span>
                  <span>CryptoPunks</span>
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  10,501.14 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">98</td>
                <td className="text-white align-middle py-3 text-sm">
                  107.15 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">3.217</td>
                <td className="text-white align-middle py-3 text-sm">
                  1,071,437.74 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  <img className="w-16" src={tableChartIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-white align-middle py-3 text-sm opacity-70">
                  2
                </td>
                <td className="text-white flex items-center align-middle py-3 text-sm">
                  <span>
                    <img
                      className="w-10 mr-1"
                      src={tableCollectionIcon}
                      alt=""
                    />
                  </span>
                  <span>CryptoPunks</span>
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  10,501.14 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">98</td>
                <td className="text-white align-middle py-3 text-sm">
                  107.15 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">3.217</td>
                <td className="text-white align-middle py-3 text-sm">
                  1,071,437.74 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  <img className="w-16" src={tableChartIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-white align-middle py-3 text-sm opacity-70">
                  3
                </td>
                <td className="text-white flex items-center align-middle py-3 text-sm">
                  <span>
                    <img
                      className="w-10 mr-1"
                      src={tableCollectionIcon}
                      alt=""
                    />
                  </span>
                  <span>CryptoPunks</span>
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  10,501.14 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">98</td>
                <td className="text-white align-middle py-3 text-sm">
                  107.15 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">3.217</td>
                <td className="text-white align-middle py-3 text-sm">
                  1,071,437.74 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  <img className="w-16" src={tableChartIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-white align-middle py-3 text-sm opacity-70">
                  4
                </td>
                <td className="text-white flex items-center align-middle py-3 text-sm">
                  <span>
                    <img
                      className="w-10 mr-1"
                      src={tableCollectionIcon}
                      alt=""
                    />
                  </span>
                  <span>CryptoPunks</span>
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  10,501.14 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">98</td>
                <td className="text-white align-middle py-3 text-sm">
                  107.15 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">3.217</td>
                <td className="text-white align-middle py-3 text-sm">
                  1,071,437.74 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  <img className="w-16" src={tableChartIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-white align-middle py-3 text-sm opacity-70">
                  5
                </td>
                <td className="text-white flex items-center align-middle py-3 text-sm">
                  <span>
                    <img
                      className="w-10 mr-1"
                      src={tableCollectionIcon}
                      alt=""
                    />
                  </span>
                  <span>CryptoPunks</span>
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  10,501.14 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">98</td>
                <td className="text-white align-middle py-3 text-sm">
                  107.15 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">3.217</td>
                <td className="text-white align-middle py-3 text-sm">
                  1,071,437.74 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  <img className="w-16" src={tableChartIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-white align-middle py-3 text-sm opacity-70">
                  6
                </td>
                <td className="text-white flex items-center align-middle py-3 text-sm">
                  <span>
                    <img
                      className="w-10 mr-1"
                      src={tableCollectionIcon}
                      alt=""
                    />
                  </span>
                  <span>CryptoPunks</span>
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  10,501.14 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">98</td>
                <td className="text-white align-middle py-3 text-sm">
                  107.15 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">3.217</td>
                <td className="text-white align-middle py-3 text-sm">
                  1,071,437.74 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  <img className="w-16" src={tableChartIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-white align-middle py-3 text-sm opacity-70">
                  7
                </td>
                <td className="text-white flex items-center align-middle py-3 text-sm">
                  <span>
                    <img
                      className="w-10 mr-1"
                      src={tableCollectionIcon}
                      alt=""
                    />
                  </span>
                  <span>CryptoPunks</span>
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  10,501.14 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">98</td>
                <td className="text-white align-middle py-3 text-sm">
                  107.15 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">3.217</td>
                <td className="text-white align-middle py-3 text-sm">
                  1,071,437.74 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  <img className="w-16" src={tableChartIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-white align-middle py-3 text-sm opacity-70">
                  8
                </td>
                <td className="text-white flex items-center align-middle py-3 text-sm">
                  <span>
                    <img
                      className="w-10 mr-1"
                      src={tableCollectionIcon}
                      alt=""
                    />
                  </span>
                  <span>CryptoPunks</span>
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  10,501.14 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">98</td>
                <td className="text-white align-middle py-3 text-sm">
                  107.15 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">3.217</td>
                <td className="text-white align-middle py-3 text-sm">
                  1,071,437.74 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  <img className="w-16" src={tableChartIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-white align-middle py-3 text-sm opacity-70">
                  9
                </td>
                <td className="text-white flex items-center align-middle py-3 text-sm">
                  <span>
                    <img
                      className="w-10 mr-1"
                      src={tableCollectionIcon}
                      alt=""
                    />
                  </span>
                  <span>CryptoPunks</span>
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  10,501.14 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">98</td>
                <td className="text-white align-middle py-3 text-sm">
                  107.15 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">3.217</td>
                <td className="text-white align-middle py-3 text-sm">
                  1,071,437.74 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  <img className="w-16" src={tableChartIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-white align-middle py-3 text-sm opacity-70">
                  10
                </td>
                <td className="text-white flex items-center align-middle py-3 text-sm">
                  <span>
                    <img
                      className="w-10 mr-1"
                      src={tableCollectionIcon}
                      alt=""
                    />
                  </span>
                  <span>CryptoPunks</span>
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  10,501.14 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">98</td>
                <td className="text-white align-middle py-3 text-sm">
                  107.15 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">3.217</td>
                <td className="text-white align-middle py-3 text-sm">
                  1,071,437.74 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  <img className="w-16" src={tableChartIcon} alt="" />
                </td>
              </tr>
              <tr>
                <td className="text-white align-middle py-3 text-sm opacity-70">
                  11
                </td>
                <td className="text-white flex items-center align-middle py-3 text-sm">
                  <span>
                    <img
                      className="w-10 mr-1"
                      src={tableCollectionIcon}
                      alt=""
                    />
                  </span>
                  <span>CryptoPunks</span>
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  10,501.14 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">98</td>
                <td className="text-white align-middle py-3 text-sm">
                  107.15 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">3.217</td>
                <td className="text-white align-middle py-3 text-sm">
                  1,071,437.74 ETN
                </td>
                <td className="text-white align-middle py-3 text-sm">
                  <img className="w-16" src={tableChartIcon} alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="bg-transparent text-center px-10 py-2 mt-12 rounded-full text-white border-amber-500 border active:border-amber-500 w-full">
          See all
        </button>
      </section>
    </>
  );
}
