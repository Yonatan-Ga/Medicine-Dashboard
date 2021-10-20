import PrescriptionItem from "./PrescriptionItem";

function prescriptionsTable(props) {
  return props.data.map((prescription) => (
    <tr key={prescription.medicine_id}>
      <PrescriptionItem
        // data={props.prescription}
        id={prescription.medicine_id}
        name={prescription.medicine_name}
        instructions={prescription.med_instructions}
        creation={prescription.creation_date}
        // description={prescription.description}
      />
    </tr>
  ));
}

export default prescriptionsTable;
