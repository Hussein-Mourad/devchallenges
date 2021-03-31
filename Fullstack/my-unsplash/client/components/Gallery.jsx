import ImageGroup from "./ImageGroup";

export default function Gallery({
  openModal,
  setId,
  images,
}) {
  

  return (
    <main className="masonry ">
      {images.map((img) => (
        <ImageGroup
          key={img._id}
          className="shadow-sm rounded-lg mb-6 w-full "
          src={img.url}
          alt={img.label}
          label={img.label}
          onClick={() => {
            openModal();
            setId(img._id);
          }}
        />
      ))}
    </main>
  );
}
