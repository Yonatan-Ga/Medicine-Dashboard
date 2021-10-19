// import { useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import PrescriptionsTable from "../components/drugs/PrescriptionsTable";

const prescriptionsDummy = [
  {
    medicine_id: '1',
    medicine_name: 'Acamol',
    creation_date: '06/08/2021',
    med_instructions: '2 Pills every 8 hours x 3 days'
  },
  {
    medicine_id: '2',
    medicine_name: 'Optalgin',
    creation_date: '07/08/2021',
    med_instructions: '1 pill every morning'
  },
  {
    medicine_id: '3',
    medicine_name: '...',
    creation_date: '09/08/2021',
    med_instructions: '...'
  },

]

function PrescriptionsPage() {
  // const history = useHistory();

  // function addMeetupHandler(meetupData) {
  //   fetch(
  //     'https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json',
  //     {
  //       method: 'POST',
  //       body: JSON.stringify(meetupData),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   ).then(() => {
  //     history.replace('/');
  //   });
  // }

  return (
    // <section>
    //   <h1>Add New Meetup</h1>
    //   <NewMeetupForm onAddMeetup={addMeetupHandler} />
    // </section>
    <div>
      <h1>My Prescriptions</h1>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Medicine Name</th>
            <th>Instructions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <PrescriptionsTable data={prescriptionsDummy} />    
        </tbody>
      </Table>
    </div>
  );
}

export default PrescriptionsPage;
