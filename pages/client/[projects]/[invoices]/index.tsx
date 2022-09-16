import { useRouter } from "next/router";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Breadcrumb } from "../../../../components/Breadcrumb";
import { CustomModal } from "../../../../components/CustomModal";
import { MainNavigation } from "../../../../components/Navigation";
import {
  currencyHandler,
  statusBullet,
  truncator,
} from "../../../../hooks/customHooks";
import { pathnames } from "../../../../hooks/pathnames";

const Invoices = () => {
  const router = useRouter();
  const { asPath } = router;
  const invoicebreadcrumbs = [
    {
      href: pathnames.client,
      header: "Client",
    },
    {
      href: pathnames.projects,
      header: "Projects",
    },
    {
      href: pathnames.invoices,

      header: "Invoices",
    },
  ];
  return (
    <div>
      <MainNavigation />
      <Breadcrumb breadcrumb={invoicebreadcrumbs} clientName={" Invoices"} />
      <InvoiceBody />
    </div>
  );
};

const InvoiceBody = (props: any) => {
  const [pageNumber, setPageNumber] = useState(0);

  //Pagination
  const itemsPerPage = 8;
  const pagesVisited = pageNumber * itemsPerPage;
  const noInvoicesContent = () => {
    if (fake.length === 0) {
      return (
        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex items-center">
              <p>This project does not have an invoice</p>
            </div>
          </td>
        </tr>
      );
    }
  };

  const fake = [1, 2, 3, 4];

  const row = () => {
    const paginatedItems = fake
      .slice(pagesVisited, pagesVisited + itemsPerPage)
      .map((invoice: any) => <InvoiceRow invoice={invoice} key={invoice.id} />);
    return paginatedItems;
  };
  const pageCount = Math.ceil(fake.length / itemsPerPage);
  const changePage = ({ selected }: any) => setPageNumber(selected);
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-2">
          <div className="p-2">
            <div className="sm:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"></p>
              <div className="mt-4 sm:mt-0">
                <CustomModal
                  content={<CreateInvoice />}
                  buttonChildren={"Add Invoice"}
                />
              </div>
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Project
                    </th>

                    <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Created
                    </th>

                    <th className=" border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody>{fake.length === 0 ? noInvoicesContent() : row()}</tbody>
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

// interface Invoice {
//   id: string;
//   end: string;
//   invoiceAmount: number;
//   invoiceCycle: string;
//   invoicedUnits: number;
//   overage: number;
//   projectId: string;
//   start: string;
//   status: string;
//   unitsOverLimit: number;
// }

const InvoiceRow = ({ invoice }: any) => {
  const {
    id,
    end,
    invoiceAmount,
    invoiceCycle,
    invoicedUnits,
    overage,
    projectId,
    start,
    status,
    unitsOverLimit,
  } = invoice;

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div>
            <p className="text-gray-900 font-bold whitespace-no-wrap">
              33333333333
            </p>
            <span>{statusBullet("pending", "pending")}</span>
          </div>
        </div>
      </td>
      <td className=" p-2  border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {currencyHandler(invoiceAmount, "USD")}
        </p>
        <p>{`${invoicedUnits} Units `}</p>
        <div>{`${invoiceCycle} `}</div>
      </td>

      <td className=" p-2  border-b border-gray-200 bg-white text-sm">
        <CustomModal
          header="Print Invoice"
          content={<InvoiceContent invoice={invoice} />}
          printIcon={true}
          buttonChildren="Print"
        />
      </td>
    </tr>
  );
};

Invoices.propTypes = {};

const InvoiceContent = ({ invoice }: any) => {
  return (
    <>
      TEST
      {/* <div className="py-2 bg-black">
        <div className=" bg-white">
          <article className="overflow-hidden">
            <div className="bg-[white] rounded-b-md">
              <div className="p-4">
                <div className="">
                  <div className="flex justify-between">
                    <div className="text-sm font-light text-slate-500">
                      <p className="text-sm font-normal text-slate-700">
                        Billed To
                      </p>
                      <p>{invoice.projectId.clientId.client}</p>
                      <p>{invoice.projectId.clientId.address}</p>
                      <p>
                        {invoice.projectId.clientId.email
                          ? invoice.projectId.clientId.email
                          : null}
                      </p>
                      <p>
                        {invoice.projectId.clientId.phone
                          ? invoice.projectId.clientId.phone
                          : null}
                      </p>
                    </div>
                    <div className="text-sm font-light text-slate-500">
                      <p className="text-sm font-normal text-slate-700">
                        Invoice Number
                      </p>
                      <p className="uppercase">
                        {truncator("37873278287342783", 6)}
                      </p>

                      <p className="mt-2 text-sm font-normal text-slate-700">
                        Date of Issue
                      </p>
                      <p>fff</p>
                    </div>
                    <div className="text-sm font-light text-slate-500">
                      <p className="text-sm font-normal text-slate-700">
                        Terms
                      </p>
                      <p>fff</p>

                      <p className="mt-2 text-sm font-normal text-slate-700">
                        Due
                      </p>
                      <p>{currencyHandler(500, "USD")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex flex-col mx-0 mt-8">
                  <table className="min-w-full divide-y divide-slate-500">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="text-left text-sm font-normal text-slate-700"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell"
                        >
                          Rate
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0"
                        >
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-200">
                        <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                          <div className="font-medium text-slate-700">
                            Project: {invoice.projectId.name}
                          </div>
                        </td>
                        <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                          {invoice.invoicedUnits}
                        </td>
                        <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                          {currencyHandler(invoice.projectId.rate, "USD")}
                        </td>
                        <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                          {currencyHandler(invoice.invoiceAmount, "USD")}
                        </td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                          <div className="font-medium text-red-800">
                            Overage
                          </div>
                        </td>
                        <td className="hidden px-3 py-4 text-sm text-right text-red-800 sm:table-cell">
                          {invoice.unitsOverLimit}
                        </td>
                        <td className="hidden px-3 py-4 text-sm text-right text-red-800 sm:table-cell">
                          {currencyHandler(invoice.projectId.rate, "USD")}
                        </td>
                        <td className="py-4 pl-3 pr-4 text-sm text-right text-red-800 sm:pr-6 md:pr-0">
                          {currencyHandler(invoice.overage, "USD")}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th
                          scope="row"
                          className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                        >
                          Subtotal
                        </th>
                        <th
                          scope="row"
                          className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                        >
                          Subtotal
                        </th>
                        <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                          {currencyHandler(invoice.invoiceAmount, "USD")}
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-red-800 sm:table-cell md:pl-0"
                        >
                          Overage
                        </th>
                        <th
                          scope="row"
                          className="pt-6 pl-4 pr-3 text-sm font-light text-left text-red-800 sm:hidden"
                        >
                          Overage
                        </th>
                        <td className="pt-6 pl-3 pr-4 text-sm text-right text-red-800 sm:pr-6 md:pr-0">
                          {currencyHandler(invoice.overage, "USD")}
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                        >
                          Tax
                        </th>
                        <th
                          scope="row"
                          className="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                        >
                          Tax
                        </th>
                        <td className="pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                          $0.00
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0"
                        >
                          Total
                        </th>
                        <th
                          scope="row"
                          className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden"
                        >
                          Total
                        </th>
                        <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                          {currencyHandler(500, "USD")}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div className="mt-4 p-4">
                <div className="border-t pt-9 border-slate-200">
                  <div className="flex justify-between text-xs font-light text-slate-700">
                    <p>
                      Please contact us if you have any questions at our email
                    </p>

                    <button onClick={() => window.print()}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div> */}
    </>
  );
};

const CreateInvoice = () => {
  return <p></p>;
};

export default Invoices;
