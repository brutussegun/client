import React, { useState } from "react";
import PropTypes from "prop-types";
import { MainNavigation } from "../../../components/Navigation";
import { Breadcrumb } from "../../../components/Breadcrumb";
import Statistics from "../../../components/Stats";
import { NotificationDelete } from "../../../components/Notification/NotificationAlert";
import { statusBullet } from "../../../hooks/customHooks";
import dayjs from "dayjs";
import { pathnames } from "../../../hooks/pathnames";
import Link from "next/link";
import { CustomModal } from "../../../components/CustomModal";
import ReactPaginate from "react-paginate";
import { Spinner } from "../../../components/Spinner";

const Project = (props: any) => {
  return (
    <div>
      <MainNavigation />
      <ProjectTable />
    </div>
  );
};

Project.propTypes = {};
export default Project;

export const ProjectTable = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const clientbreadcrumbs = [
    {
      href: pathnames.client,
      header: "Clients",
    },
    {
      href: pathnames.projects,
      header: "PlaceHolder",
    },
  ];

  //Pagination
  const itemsPerPage = 5;
  const pagesVisited = pageNumber * itemsPerPage;
  const paginatedItems = clientbreadcrumbs
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((project: any) => <Row key={project.id} project={project} />);
  const pageCount = Math.ceil(clientbreadcrumbs.length / itemsPerPage);
  const changePage = ({ selected }: any) => setPageNumber(selected);

  return (
    <>
      <Breadcrumb breadcrumb={clientbreadcrumbs} />
      <div className="container mx-auto px-4 sm:px-8 py-2">
        <div className="p-2">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"></p>
            <div className="mt-4 sm:mt-0">
              <CustomModal
                content={<AddInvoice />}
                buttonChildren="Add Project"
              />
            </div>
          </div>
        </div>
        <div className="py-2">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Projects
                    </th>

                    <th className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody>{paginatedItems}</tbody>
              </table>
              <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <div className="inline-flex mt-2 xs:mt-0">
                  <ReactPaginate
                    pageCount={pageCount}
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    onPageChange={changePage}
                    containerClassName={
                      "relative inline-flex items-center bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    }
                    nextLinkClassName={
                      "relative inline-flex items-center border border-grey-300 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold focus:z-20 px-4 py-2 text-sm font-medium"
                    }
                    previousLinkClassName={
                      "relative inline-flex items-center border border-grey-300 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold focus:z-20 px-4 py-2 text-sm font-medium "
                    }
                    activeLinkClassName={
                      "relative inline-flex items-center border font-bold border-primaryBlue bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    }
                    activeClassName={
                      "relative inline-flex items-center bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    }
                    disabledClassName={
                      "relative inline-flex items-center bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    }
                    pageClassName={
                      "relative inline-flex items-center bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Row = ({ project }: any) => {
  return (
    <tr>
      <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm hover:bg-indigo-100">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-gray-900 font-bold whitespace-no-wrap">
              {project.name}
            </p>
            <Link href={pathnames.invoices}>
              <a className="text-xs hover:underline" href="">
                View Invoices
              </a>
            </Link>
          </div>
        </div>
      </td>
      <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
        <p>
          <span className="">{`tttttt`}</span>
        </p>
        <p className="text-xs">tt</p>
      </td>
      <td className="p-1 border-b border-gray-200 bg-white text-xs">
        {statusBullet("Pending", "Pending")}
      </td>
      <td className=" px-2 py-2 border-b border-gray-200 bg-white text-sm text-right cursor:pointer">
        <NotificationDelete deleteIcon={true} />
        <NotificationDelete editIcon={true} />
      </td>
    </tr>
  );
};

const AddInvoice = () => {
  return (
    <div className="mt-5 md:col-span-2 md:mt-0 p-2">
      <p className="font-bold text-2xl tracking-1px py-2">Add a client</p>
      <form action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street address
                </label>
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP / Postal code
                </label>
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
