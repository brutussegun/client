import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import CustomButton from "../Button";
import PropTypes from "prop-types";

export const CustomModal = (props: any) => {
  const {
    header,
    content,
    agreeFunction,
    disagreeFunction,
    agreeButtonColor,
    disagreeButtonColor,
    buttonChildren,
    linktag,
  } = props;
  const [show, setshow_modal_XV] = useState(false);
  const openCustomModal = () => setshow_modal_XV(true);
  const closeCustomModal = () => setshow_modal_XV(false);
  return (
    <>
      {linktag ? (
        <button
          onClick={openCustomModal}
          className="underline font-bold hover:bg-light"
        >
          {buttonChildren}
        </button>
      ) : (
        <CustomButton clickFunction={openCustomModal}>
          {buttonChildren}
        </CustomButton>
      )}

      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeCustomModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-2 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-5xl mt-24 transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex justify-between">
                      {" "}
                      {header ? header : "Please enter a valid header"}
                      <button onClick={closeCustomModal}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </Dialog.Title>

                  {/* //Content Section */}

                  <div className="mt-2">
                    <div className="text-sm text-gray-500">{content}</div>
                  </div>

                  <div className="m-4 flex">
                    {agreeFunction && (
                      <CustomButton
                        version={agreeButtonColor}
                        clickFunction={agreeFunction}
                      >
                        Yes, Delete
                      </CustomButton>
                    )}
                  </div>
                  <div className="m-4">
                    {disagreeFunction && (
                      <CustomButton
                        version={disagreeButtonColor}
                        clickFunction={
                          disagreeFunction ? disagreeFunction : closeCustomModal
                        }
                      >
                        Cancel
                      </CustomButton>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

CustomModal.protoTypes = {
  header: PropTypes.any,
  content: PropTypes.any,
  agreeFunction: PropTypes.func,
  agreeButtonColor: PropTypes.string,
  disagreeButtonColor: PropTypes.string,
  buttonChildren: PropTypes.string,
};

CustomModal.defaultProps = {
  content: "Add your Modal Content Here",
  agreeFunction: console.log("Yes Works"),
  agreeButtonColor: "bg-primaryBlue",
  disagreeButtonColor: "bg-red-800",
  buttonChildren: "Add Text",
};
