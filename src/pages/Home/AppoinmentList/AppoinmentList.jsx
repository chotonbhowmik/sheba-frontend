
import { useQuery } from "@tanstack/react-query";
import { fetchAppointment } from "../../../Api/Api";

const AppointmentList = () => {
  const {
    data: appointments = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: fetchAppointment,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="overflow-x-auto mx-auto max-w-5xl">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Age</th>
              <th>Date</th>
              <th>Slot</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment.id}>
                <th>{index + 1}</th>
                <td>{appointment.firstName}</td>
                <td>{appointment.lastName}</td>
                <td>{appointment.email}</td>
                <td>{appointment.phoneNumber}</td>
                <td>{appointment.address}</td>
                <td>{appointment.age}</td>
                <td>{appointment.date}</td>
                <td>{appointment.timeSlot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentList;
