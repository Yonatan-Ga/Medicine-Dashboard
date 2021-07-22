// import { useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";

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
          <tr>
            <td>1</td>
            <td>Acamol</td>
            <td>2 Pills every 8 hours x 3 days</td>
            <td>&#9999;&#65039; &#128465;&#65039;</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Optalgin</td>
            <td>1 pill every morning</td>
            <td>&#9999;&#65039; &#128465;&#65039;</td>
          </tr>
          <tr>
            <td>3</td>
            <td>.... </td>
            <td>.....</td>
            <td>&#9999;&#65039; &#128465;&#65039;</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PrescriptionsPage;
