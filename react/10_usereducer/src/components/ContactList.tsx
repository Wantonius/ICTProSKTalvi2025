import Contact from '../models/Contact';

interface Props {
	list:Contact[];
	removeContact(id:number):void;
}

const ContactList = (props:Props) => {
	
	const contacts = props.list.map((contact) => {
		return(
			<tr key={contact.id}>
				<td>{contact.firstname}</td>
				<td>{contact.lastname}</td>
				<td>{contact.email}</td>
				<td>{contact.phone}</td>
				<td><button className="btn btn-danger" onClick={() => props.removeContact(contact.id)}>Remove</button></td>
			</tr>
		)
	})
	return(
		<table className="table table-striped">
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Remove</th>
				</tr>	
			</thead>
			<tbody>
			{contacts}
			</tbody>
		</table>
	)
	
}

export default ContactList;