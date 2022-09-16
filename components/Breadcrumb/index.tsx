import React from "react";
import CustomButton from "../Button";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { pathnames } from "../../hooks/pathnames";
import { Children } from "react";

function Breadcrumb(props: any) {
  const { breadcrumb, clientName } = props;
  const { pathname, asPath } = useRouter();
  const checkpath = () => {
    if (pathname === pathnames.client) return "Clients";
    if (pathname === pathnames.projects)
      Breadcrumb.defaultProps.breadcrumb.push({
        href: pathname,
        header: "Projects",
      });
  };

  const renderBreadcrumbs = breadcrumb.map((crumb: any) => {
    return (
      <>
        <Link key={crumb.href} href={crumb.href}>
          <a>
            {crumb.header}
            <span className="mx-2">&gt;</span>
          </a>
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
          </div>
          <h4 className="text-2xl mt-2 font-bold leading-tight text-gray-800 dark:text-gray-100">
            {checkpath() ? checkpath() : "FIX THIS"}
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
      href: pathnames.client,
      header: "Client",
    },
  ],
};

export { Breadcrumb };
