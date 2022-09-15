import React from "react";
import CustomButton from "../Button";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { pathnames } from "../../hooks/pathnames";

function Breadcrumb(props: any) {
  const { breadcrumb, clientName } = props;
  const { pathname, asPath } = useRouter();
  const checkpath = () => {
    const thispath = pathname;
    if (thispath === pathnames.home) return "Dashboard";
  };
  const renderBreadcrumbs = breadcrumb.map((crumb: any, index: number) => {
    return (
      <>
        <Link key={index} href={crumb.href}>
          {crumb.header}
        </Link>
      </>
    );
  });

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-6 lg:py-8">
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <div className="flex items-center text-primaryBlue text-sm">
            {renderBreadcrumbs}
            <span className="mx-2">&gt;</span>
          </div>
          <h4 className="text-2xl mt-2 font-bold leading-tight text-gray-800 dark:text-gray-100">
            {checkpath() ? checkpath() : clientName}
          </h4>
        </div>
      </div>
    </div>
  );
}

Breadcrumb.propTypes = {
  breadcrumb: PropTypes.array.isRequired,
  clientName: PropTypes.string,
};

Breadcrumb.defaultProps = {
  breadcrumb: [
    {
      href: "/",
      header: "Home",
    },
  ],
};

export default Breadcrumb;
