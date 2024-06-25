import { useState } from "react";
import { addAppointments, fetchAvailableSlots } from "../../../Api/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery } from "@tanstack/react-query";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({});

  const { data: availableSlots = [], refetch } = useQuery({
    queryKey: ["availableSlots"],
    queryFn: fetchAvailableSlots,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const address = form.address.value;
    const age = form.age.value;
    const date = form.date.value;
    const timeSlot = form.timeSlot.value;

    const createAppointment = {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      age,
      date,
      timeSlot,
    };

    try {
      const response = await addAppointments(createAppointment);
      // console.log("Appointment added:", response);
      toast.success("Appointment added successfully!");
      // form.reset();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        age: "",
        date: "",
        timeSlot: "",
      });
      refetch();
    } catch (error) {
      console.error("Error adding appointment:", error);
      toast.error("Error adding appointment. Please try again.");
    }
  };
  return (
    <div>
      <div className="card bg-base-100 mx-auto max-w-5xl shadow-xl">
        <div className="card-body gap-4">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex gap-4 my-5">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex gap-4 my-5">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="input input-bordered w-full"
                required
              />
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex gap-4 my-5">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Pick A Date"
                className="input input-bordered w-full"
                required
              />
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className="select select-bordered w-full"
                required
              >
                <option value="">Select Time Slot</option>
                {availableSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-success text-white">
              Submit
            </button>
          </form>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
