function scheduleItem(props) {
  function statusHandler(stat, nextReminder) {
    if (nextReminder === "") {
      return stat;
    }

    let message = stat;

    switch (stat) {
      case "Took":
        message += ". Next pill at: " + nextReminder;
        break;

      case "Snoozed":
        message += ". Next reminder at: " + nextReminder;
        break;

      case "Skipped":
        message += ". Next pill at: " + nextReminder;
        break;

      default:
    }

    return message;
  }

  return (
    <>
      <td>{props.time}</td>
      <td>{props.name}</td>
      <td>{props.for_what}</td>
      <td>{statusHandler(props.status, props.next_reminder)}</td>
    </>
  );
}

export default scheduleItem;
