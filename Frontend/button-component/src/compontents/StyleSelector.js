function StyleSelector(props) {
  return (
    <form className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-x-10">
      <div className="form-group">
        <label htmlFor="size" className="form-label">
          Size:
        </label>
        <select
          onChange={(e) => {
            props.setSize(e.target.value);
          }}
          name="size"
          value={props.size}
          className="form-select"
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="variant" className="form-label">
          Variant:
        </label>
        <select
          onChange={(e) => {
            props.setVariant(e.target.value);
          }}
          name="variant"
          value={props.variant}
          className="form-select"
        >
          <option value="regular">Regular</option>
          <option value="outline">Outline</option>
          <option value="text">Text</option>
        </select>
      </div>
      <div className=" form-group">
        <label htmlFor="color" className="form-label">
          Color:
        </label>
        <select
          onChange={(e) => {
            props.setColor(e.target.value);
          }}
          name="color"
          value={props.color}
          className="form-select"
        >
          <option value="default">Default</option>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="danger">Danger</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="disabled" className="form-label">
          Disabled:
        </label>
        <select
          onChange={(e) => {
            props.setDisabled(e.target.value);
          }}
          name="disabled"
          value={props.disabled}
          className="form-select"
        >
          <option value={true}>True</option>
          <option value={''}>False</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="shadow" className="form-label">
          shadow:
        </label>
        <select
          onChange={(e) => {
            props.setShadow(e.target.value);
          }}
          name="shadow"
          value={props.shadow}
          className="form-select"
        >
          <option value={true}>True</option>
          <option value={""}>False</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="startIcon" className="form-label">
          startIcon:
        </label>
        <select
          onChange={(e) => {
            props.setStartIcon(e.target.value);
          }}
          name="startIcon"
          value={props.startIcon}
          className="form-select"
        >
          <option value="mail">True</option>
          <option value={""}>False</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="endIcon" className="form-label">
          endIcon:
        </label>
        <select
          onChange={(e) => {
            props.setEndIcon(e.target.value);
          }}
          name="endIcon"
          value={props.endIcon}
          className="form-select"
        >
          <option value="mail">True</option>
          <option value={""}>False</option>
        </select>
      </div>
    </form>
  );
}

export default StyleSelector;
