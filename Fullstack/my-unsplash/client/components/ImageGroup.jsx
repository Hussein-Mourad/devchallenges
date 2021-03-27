import Button from "./Button";
export default function ImageGroup({ src, alt, label, ...props }) {
    return (
        <div className="relative group">
            <div className="hidden group-hover:block bg-black bg-opacity-50 absolute inset-0 z-10 rounded-lg p-5">
                <div className="relative w-full h-full">
                    <Button className="absolute top-0 right-0" color="danger">
                        Delete
                    </Button>
                    <p className="text-gray-100 absolute bottom-0 left-0 truncate overflow-hidden w-full">
                        {label}
                    </p>
                </div>
            </div>
            <img src={src} alt={alt} lazy="true" {...props} />
        </div>
    );
}
