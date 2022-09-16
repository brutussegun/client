import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MainNavigation } from "../../components/Navigation";
import { Breadcrumb } from "../../components/Breadcrumb";
import Statistics from "../../components/Stats";
import CustomButton from "../../components/Button";
import { NotificationDelete } from "../../components/Notification/NotificationAlert";
import { pathnames } from "../../hooks/pathnames";
import Link from "next/link";
import { CustomModal } from "../../components/CustomModal";
import { Spinner } from "../../components/Spinner";
import { useRouter } from "next/router";

const Client = (props: any) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  return (
    <div>
      <MainNavigation />
      <Breadcrumb />
      <Statistics />
      <ClientTable />
    </div>
  );
};

export default Client;

const ClientTable = ({ data }: any) => {
  return (
    <div className="w-full mx-auto my-4 container ">
      {/* New table */}
      <div className="container mx-auto px-4 sm:px-8">
        <div className="p-2">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"></p>
            <div className="mt-4 sm:mt-0">
              <CustomModal
                content={<AddClient />}
                buttonChildren={"Add Client"}
                // agreeFunction={true}
                // disagreeFunction={true}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Client Detail
                    </th>

                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  <ClientTableRow />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ClientTableRow {
  client: {
    address: string;
    email: string;
    client: string;
    id: string;
  };
}
const ClientTableRow = (props: any) => {
  return (
    <>
      <tr className="">
        <Link href={pathnames.projects}>
          <td className="px-2 py-2 border-b border-gray-200 text-sm cursor-pointer hover:bg-blue-100 ">
            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10">
                <img
                  className="w-full h-full rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 font-bold whitespace-no-wrap">TT</p>
                <p className="text-gray-600 whitespace-no-wrap">TT </p>
              </div>
            </div>
          </td>
        </Link>
        <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">TT</p>
        </td>

        <td className=" px-2 py-2 border-b border-gray-200 bg-white text-sm text-right cursor:pointer">
          <NotificationDelete
            agreeFunction={console.log("fix")}
            deleteIcon={true}
          />
          <NotificationDelete
            agreeFunction={console.log("fix")}
            editIcon={true}
          />
        </td>
      </tr>
    </>
  );
};
const AddClient = () => {
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitForm = (e: any) => {
    e.preventDefault();

    console.log(name, client, email, phone, address, state, city, zip);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="xl:w-10/12 w-full px-8">
          <div className="xl:px-24">
            <div className="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-center mt-7">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9.99999H20C20.2652 9.99999 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 9.99999 4 9.99999H5V8.99999C5 8.08074 5.18106 7.17049 5.53284 6.32121C5.88463 5.47193 6.40024 4.70026 7.05025 4.05025C7.70026 3.40023 8.47194 2.88462 9.32122 2.53284C10.1705 2.18105 11.0807 1.99999 12 1.99999C12.9193 1.99999 13.8295 2.18105 14.6788 2.53284C15.5281 2.88462 16.2997 3.40023 16.9497 4.05025C17.5998 4.70026 18.1154 5.47193 18.4672 6.32121C18.8189 7.17049 19 8.08074 19 8.99999V9.99999ZM17 9.99999V8.99999C17 7.67391 16.4732 6.40214 15.5355 5.46446C14.5979 4.52678 13.3261 3.99999 12 3.99999C10.6739 3.99999 9.40215 4.52678 8.46447 5.46446C7.52678 6.40214 7 7.67391 7 8.99999V9.99999H17ZM11 14V18H13V14H11Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>

                <div className="text-lg font-bold text-gray-800 pl-3">
                  Enter your client information here
                </div>
              </div>
            </div>
            <form onSubmit={submitForm} autoComplete="on">
              <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                <div>
                  <div className="md:flex items-center lg:mt-0 mt-4">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="firstName"
                      >
                        Client
                      </label>
                      <input
                        type="name"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="firstName"
                        placeholder="Enter your company name here"
                        required
                        onChange={(e) => setClient(e.target.value)}
                        value={client}
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="lastName"
                      >
                        Point of contact name
                      </label>
                      <input
                        type="name"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="lastName"
                        placeholder="Point of contact/administrator"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center mt-8">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="emailAddress"
                      >
                        Client email{" "}
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="emailAddress"
                        placeholder="youremail@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="phone"
                      >
                        Client phone #
                      </label>
                      <input
                        required
                        type="telephone"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="phone"
                        placeholder="123-123-4567"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                <div>
                  <div className="md:flex items-center  lg:mt-0 mt-4">
                    <div className="md:w-full">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="address"
                      >
                        Client address
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="address"
                        placeholder="000 SW # AVE"
                        required
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center  mt-8">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="city"
                      >
                        City
                      </label>
                      <input
                        type="name"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="city"
                        placeholder="City"
                        required
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="state"
                      >
                        State
                      </label>

                      <select
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="state"
                        required
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                      >
                        <option hidden disabled selected>
                          Select a State
                        </option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                  </div>
                  <div className="md:flex items-center  mt-8">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="Zip"
                      >
                        Zip
                      </label>
                      <input
                        type="name"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="Zip"
                        placeholder="Zip"
                        required
                        onChange={(e) => setZip(e.target.value)}
                        value={zip}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <CustomButton>Create Client</CustomButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
