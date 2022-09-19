import React, {useState} from "react";
import {useRouter} from "next/router";
import {RegistrationForm} from "../../typings";
import {toast} from "react-toastify";
import {MainNavigation} from "../../components/Navigation";
import {Breadcrumb} from "../../components/Breadcrumb";


const Register = () => {
    const router = useRouter();

    return <> <MainNavigation/>
        <Breadcrumb/>
        <ProfileBody/></>;
};

Register.propTypes = {};

export default Register;


const ProfileBody = () => {
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
                            Edit Profile
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
