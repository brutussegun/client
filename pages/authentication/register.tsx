import React, {useState} from "react";
import {useRouter} from "next/router";
import {RegistrationForm} from "../../typings";
import {toast} from "react-toastify";
import {MainNavigation} from "../../components/Navigation";
import {pathnames} from "../../hooks/pathnames";
import Link from "next/link";


const Register = () => {
    const router = useRouter();

    return <> <MainNavigation/>
        <RegistrationContent/></>;
};

Register.propTypes = {};

export default Register;


const RegistrationContent = () => {
    const [showpass, setShowPass] = useState(false);
    const [errors, setErrors] = useState<readonly any[]>([]);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");


    const register = async (e: any) => {
        e.preventDefault();

        const validatedPass = (pass: string, pass2: string) => {
            if (pass === pass2) {
                return pass;
            } else {
                toast.error("Passwords do not match");
            }
        };


        const inputResponse: RegistrationForm = {
            name: name,
            password: validatedPass(password, password2),
            email: email,
            businessName: businessName,
            address: address,
            city: city,
            state: state,
            zip: zip,
        };

        console.log(inputResponse);
    };


    return (
        <>
            <div className="bg-grey-200">
                <div
                    className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
                    <div
                        className="bg-white shadow-lg rounded xl:w-1/2 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                        <p
                            tabIndex={0}
                            className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
                        >
                            Register
                        </p>
                        <p
                            tabIndex={0}
                            className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
                        >
                            Already have account?{" "}
                            <Link href={pathnames.login}>
                                <a
                                    className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"
                                >

                                    Sign In here
                                </a></Link>
                        </p>

                        <div className="mt-6 w-full">
                            <label className="text-sm font-medium leading-none text-gray-800">
                                Name
                            </label>
                            <input
                                aria-label="enter your name"
                                role="input"
                                type="name"
                                name="name"
                                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="mt-6 w-full">
                            <label className="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input
                                aria-label="enter email adress"
                                role="input"
                                type="email"
                                name="email"
                                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mt-6 w-full">
                            <label
                                htmlFor="PassInput"
                                className="text-sm font-medium leading-none text-gray-800"
                            >
                                {" "}
                                Password{" "}
                            </label>
                            <div className="relative flex items-center justify-center">
                                <input
                                    id="PassInput"
                                    name="password"
                                    type={showpass ? "text" : "password"}
                                    className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div
                                    onClick={() => setShowPass(!showpass)}
                                    className="absolute right-0 mt-2 mr-3 cursor-pointer"
                                >
                                    <div id="show">
                                        <svg
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                fill="#71717A"
                                            />
                                        </svg>
                                    </div>
                                    <div id="hide" className="hidden">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-eye-off"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="#27272A"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <line x1={3} y1={3} x2={21} y2={21}/>
                                            <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"/>
                                            <path
                                                d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 w-full">
                            <label
                                htmlFor="confirmPassInput"
                                className="text-sm font-medium leading-none text-gray-800"
                            >
                                Confirm Password
                            </label>
                            <div className="relative flex items-center justify-center">
                                <input
                                    id="confirmPassInput"
                                    name="confirmPassword"
                                    type={showpass ? "text" : "password"}
                                    className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                    onChange={(e) => setPassword2(e.target.value)}
                                />
                                <div
                                    onClick={() => setShowPass(!showpass)}
                                    className="absolute right-0 mt-2 mr-3 cursor-pointer"
                                >
                                    <div id="show">
                                        <svg
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                fill="#71717A"
                                            />
                                        </svg>
                                    </div>
                                    <div id="hide" className="hidden">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-eye-off"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="#27272A"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <line x1={3} y1={3} x2={21} y2={21}/>
                                            <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"/>
                                            <path
                                                d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 w-full">
                            <label className="text-sm font-medium leading-none text-gray-800">
                                Business Name
                            </label>
                            <input
                                aria-label="enter business name"
                                role="input"
                                name="businessName"
                                type="business name"
                                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                onChange={(e) => setBusinessName(e.target.value)}
                            />
                        </div>
                        <div className="mt-6 w-full">
                            <label className="text-sm font-medium leading-none text-gray-800">
                                Business Address
                            </label>
                            <input
                                aria-label="enter business address"
                                role="input"
                                name="address"
                                type="address"
                                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="mt-6 w-full">
                            <label className="text-sm font-medium leading-none text-gray-800">
                                City
                            </label>
                            <input
                                aria-label="enter city"
                                role="input"
                                type="city"
                                name="city"
                                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <div className="mt-6 w-full">
                            <label className="text-sm font-medium leading-none text-gray-800">
                                State{" "}
                            </label>
                            <input
                                aria-label="enter state"
                                role="input"
                                type="state"
                                name="state"
                                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                onChange={(e) => setState(e.target.value)}
                            />
                        </div>
                        <div className="mt-6 w-full">
                            <label className="text-sm font-medium leading-none text-gray-800">
                                Zip
                            </label>
                            <input
                                aria-label="enter zip"
                                role="input"
                                type="zip"
                                name="zip"
                                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                onChange={(e) => setZip(e.target.value)}
                            />
                        </div>

                        <div className="mt-8">
                            <button
                                role="button"
                                aria-label="create my account"
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                                onClick={register}
                            >
                                Create my account
                            </button>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 lg:ml-16 ml-8 md:mt-0 mt-6">
                        <div className="pl-8 md:block hidden">ADD SVG HERE</div>
                    </div>
                </div>
            </div>
        </>
    );
};
