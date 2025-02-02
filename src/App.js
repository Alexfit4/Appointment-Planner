import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
	// state variables for contacts and appointments
	const [contacts, setContacts] = useState([]);
	const [appointments, setAppointments] = useState([]);

	const ROUTES = {
		CONTACTS: "/contacts",
		APPOINTMENTS: "/appointments",
	};

	// functions to add data to contacts and appointments
	const addContact = (name, phone, email) => {
		setContacts((prev) => [...prev, { name, phone, email }]);
	};
	const addAppointment = (title, contact, date, time) => {
		setAppointments((prev) => [...prev, { title, contact, date, time }]);
	};

	return (
		<>
			<nav>
				<NavLink to={ROUTES.CONTACTS} activeClassName="active">
					Contacts
				</NavLink>
				<NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
					Appointments
				</NavLink>
			</nav>
			<main>
				<Switch>
					<Route exact path="/">
						<Redirect to={ROUTES.CONTACTS} />
					</Route>
					<Route path={ROUTES.CONTACTS}>
						{/* Add props to ContactsPage */}
						<ContactsPage addContact={addContact} contacts={contacts} />
					</Route>
					<Route path={ROUTES.APPOINTMENTS}>
						{/* Add props to AppointmentsPage */}
						<AppointmentsPage
							addAppointment={addAppointment}
							appointments={appointments}
							contacts={contacts}
						/>
					</Route>
				</Switch>
			</main>
		</>
	);
}

export default App;
