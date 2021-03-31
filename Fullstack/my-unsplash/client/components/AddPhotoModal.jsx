import Modal from "./Modal";
import { useReducer } from "react";
import Input from "./Input";
import Button from "./Button";
import { addImage } from "../services/ImageServices";

const initialState = {
    label: "",
    url: "",
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
        case "setIsLoading":
            return {
                ...state,
                isLoading: action.payload,
            };
        case "setErrors":
            return {
                ...state,
                errors: { ...state.errors, ...action.payload },
            };
        case "resetAll":
            return initialState;
    }
};
export default function AddPhotoModal({
    isAddModalOpen,
    closeAddModal,
    updateImages,
}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "setErrors", payload: { ...initialState.errors } });
        dispatch({ type: "setIsLoading", payload: true });
        addImage(
            {
                label: state.label,
                url: state.url,
            },
            (err, data) => {
                if (data.image) {
                    dispatch({ type: "resetAll" });
                    updateImages(data.image);
                    closeAddModal();
                } else if (data.errors) {
                    dispatch({
                        type: "setErrors",
                        payload: data.errors,
                    });
                } else if (err) {
                    dispatch({
                        type: "setErrors",
                        payload: {
                            label: "",
                            url: "Oops! unknown error please try again",
                        },
                    });
                }
                dispatch({
                    type: "setIsLoading",
                    payload: false,
                });
            }
        );
    };
    return (
        <Modal
            className="w-11/12 sm:w-[600px]"
            title="Add a new photo"
            hidden={!isAddModalOpen}
        >
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
          }}
          autoComplete="off"
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
                        isLoading={state.isLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        type="submit"
                        isLoading={state.isLoading}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </Modal>
    );
}
