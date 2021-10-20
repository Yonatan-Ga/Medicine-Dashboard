import ScheduleItem from "./ScheduleItem";

function scheduleTable(props) {
  return props.data.map((reminder) => (
    <tr key={reminder.reminder_id}>
      <ScheduleItem
        // data={props.reminder}
        id={reminder.reminder_id}
        time={reminder.time}
        name={reminder.medicine_name}
        for_what={reminder.for_what}
        creation={reminder.creation_date}
        status={reminder.status}
        next_reminder={reminder.next_reminder}
        // description={reminder.description}
      />
    </tr>
  ));
}

export default scheduleTable;
