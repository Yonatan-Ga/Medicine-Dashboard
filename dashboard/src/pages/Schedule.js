import Table from "react-bootstrap/Table";
import ScheduleTable from "../components/drugs/ScheduleTable";
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

  const scheduleDummy = [
    {
      reminder_id: "1",
      time: "8:00",
      medicine_name: "Acamol",
      creation_date: "06/08/2021",
      for_what: "Headache",
      status: "Took",
      next_reminder: "20/10/2021, 12:00",
    },
    {
      reminder_id: "2",
      time: "9:15",
      medicine_name: "Optalgin",
      creation_date: "07/08/2021",
      for_what: "Knee pain",
      status: "Skipped",
      next_reminder: "",
    },
    {
      reminder_id: "3",
      time: "10:30",
      medicine_name: "...",
      creation_date: "09/08/2021",
      for_what: "...",
      status: "Snoozed",
      next_reminder: "19/10/2021, 10:35",
    },
  ];

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
          <ScheduleTable data={scheduleDummy} />{/* pass all reminders of user from DB */}
          <tr>
            <td colSpan="4" className="text-center">
              <span>&lt;&lt; Yesterday</span>
              <span>
                &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
              </span>
              <span>Tomorrow &gt;&gt;</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MySchedulePage;
