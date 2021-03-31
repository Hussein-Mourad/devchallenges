import Modal from "./Modal";
import { useReducer } from "react";
import Input from "./Input";
import Button from "./Button";
import Loader from "react-loader-spinner";

const initialState = {
    label: "",
    url: "",
    width: "",
    height: "",
    isLoading: false,
    errors: { label: "", url: "" },
};

const reducer = (state, action) => {
    switch (action.type) {
        case "setLabel":
            return {
                ...state,
                label: action.payload,
            };
        case "setURL":
            return {
                ...state,
                url: action.payload,
            };
        case "setDimenstions": // TODO Width and height doesn't reach the server 
            return {
                ...state,
                width: action.payload.width,
                height: action.payload.height,
            };
        case "setIsLoading":
            return {
                ...state,
                isLoading: action.payload,
            };
        case "setLabelError":
            return {
                ...state,
                errors: { ...state.errors, label: action.payload },
            };
        case "setURLError":
            return {
                ...state,
                errors: { ...state.errors, url: action.payload },
            };
        case "setErrors":
            return {
                ...state,
                errors: { ...state.errors, ...action.payload },
            };
        case "resetErrors":
            return { ...state, errors: { ...initialState.errors } };
        case "resetAll":
            return initialState;

        default:
            break;
    }
};
export default function AddPhotoModal({ isAddModalOpen, closeAddModal }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const addImage = async (image) => {
        const res = await fetch("/api/image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(image),
        });
        const data = await res.json();

        return data;
    };

    const getMeta = (url) => {
        return new Promise((resolve, reject) => {
            var img = new Image();
            img.src = url;
            img.onerror = img.onabort = function () {
                reject("Please enter a valid url");
            };
            img.onload = function () {
                resolve({
                    width: this.naturalWidth,
                    height: this.naturalHeight,
                });
            };
        });
    };

    return (
        <Modal
            className="w-11/12 sm:w-[600px]"
            title="Add a new photo"
            hidden={!isAddModalOpen}
        >
            <form
                onSubmit={ (e) => {
                    e.preventDefault();
                    dispatch({ type: "resetErrors" });
                    dispatch({ type: "setIsLoading", payload: true });
                    getMeta(state.url)
                        .then((res) => {
                            console.log('res: ', res);
                            dispatch({
                                type: "setDimenstions",
                                payload: res,
                            });
                        })
                        .catch((err) => {
                            console.log("err", err);
                            
                            dispatch({ type: "setURLError", payload: err });
                        });
                            console.log("before",{
                        label: state.label,
                        url: state.url,
                        width: state.width,
                        height: state.height,
                    })
                    addImage({
                        label: state.label,
                        url: state.url,
                        width: state.width,
                        height: state.height,
                    })
                        .then((res) => {
                            if (res.image) {
                                dispatch({ type: "resetAll" });
                                dispatch({
                                    type: "setIsLoading",
                                    payload: false,
                                });

                                closeAddModal();
                            } else if (res.errors) {
                                dispatch({
                                    type: "setErrors",
                                    payload: res.errors,
                                });
                                dispatch({
                                    type: "setIsLoading",
                                    payload: false,
                                });
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }}
            >
                <div className="flex flex-col mb-5">
                    <label className="text-sm text-gray-800 mb-1">Label</label>
                    <Input
                        type="text"
                        name="label"
                        className="border border-gray-400 w-full"
                        placeholder="Enter a label for your photo"
                        value={state.label}
                        onChange={(e) => {
                            dispatch({
                                type: "setLabel",
                                payload: e.target.value,
                            });
                        }}
                    />
                    <small className="mt-1 text-red-600">
                        {state.errors.label}
                    </small>
                </div>
                <div className="flex flex-col mb-5">
                    <label className="text-sm text-gray-800 mb-1">
                        Photo URL
                    </label>
                    <Input
                        type="text"
                        name="url"
                        className="border border-gray-400 w-full"
                        placeholder="Enter the url of the photo"
                        value={state.url}
                        onChange={(e) => {
                            dispatch({
                                type: "setURL",
                                payload: e.target.value,
                            });
                        }}
                    />
                    <small className="mt-1 text-red-600">
                        {state.errors.url}
                    </small>
                </div>
                <div className="flex justify-end">
                    <Button
                        type="button"
                        className="mr-2"
                        onClick={() => {
                            dispatch({ type: "resetAll" });
                            closeAddModal();
                        }}
                        disabled={state.isLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="inline-flex items-center "
                        color="primary"
                        type="submit"
                        disabled={state.isLoading}
                    >
                        <div
                            className={`mr-2 ${
                                !state.isLoading ? "hidden" : ""
                            }`}
                        >
                            <Loader
                                type="Oval"
                                color="#fff"
                                height={15}
                                width={15}
                            />
                        </div>
                        Submit
                    </Button>
                </div>
            </form>
        </Modal>
    );
}
