import Table from 'react-bootstrap/Table'
// import { useContext } from 'react';

// import FavoritesContext from '../store/favorites-context';
// import MeetupList from '../components/meetups/MeetupList';

function MySchedulePage() {
  // const favoritesCtx = useContext(FavoritesContext);

  // let content;

  // if (favoritesCtx.totalFavorites === 0) {
  //   content = <p>You got no favorites yet. Start adding some?</p>;
  // } else {
  //   content = <MeetupList meetups={favoritesCtx.favorites} />;
  // }

  return (
    <div>
    <h1>My Schedule</h1>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Time</th>
          <th>Medicine Name</th>
          <th>For</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>8:00</td>
          <td>Acamol</td>
          <td>Headache</td>
          <td>Took</td>
        </tr>
        <tr>
          <td>9:15</td>
          <td>Optalgin</td>
          <td>Knee Pain</td>
          <td>Snoozed. Next reminder at 12:00</td>
        </tr>
        <tr>
          <td>10:30</td>
          <td>.... </td>
          <td>.....</td>
          <td>Skipped</td>
        </tr>
        <tr>
          <td colSpan="4" className="text-center">
          <span>&lt;&lt; Yesterday</span>
          <span>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span>
      <span>Tomorrow &gt;&gt;</span>

          </td>
        </tr>
      </tbody>

    </Table>

    </div>


  );
}

export default MySchedulePage;
