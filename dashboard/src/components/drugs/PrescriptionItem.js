function PrescriptionItem(props) {
  return (
    <>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.instructions}</td>
      <td>&#9999;&#65039; &#128465;&#65039;</td>
    </>
  );
}

export default PrescriptionItem;
