const ViewBudget = (props) => {
  return (
    <>
      <span>Budget:{props.budget}</span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleEditClick}
      >
        EDIT
      </button>
    </>
  );
};

export default ViewBudget;
