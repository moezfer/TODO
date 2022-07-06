import { Button, Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const AddToDo = ({ addTodo }) => {
    const [name, setName] = useState("");
	const [description, setDescription]=useState("")
    const [status, setStatus] = useState("");
	const [priority, setPriority] = useState(0);

    const handleSubmit = e => {
      
        e.preventDefault();
        if (!name) {
            alert('Please enter text');
            return
        }

        addTodo({ name, status,description,priority});

        setName("");
		setDescription("");
        setStatus(false);
		setPriority(0);
    };
  
    return (
		
	<Form onSubmit={handleSubmit}>
		<br/>
		<Slider step={20} defaultValue={priority}
	onChange={(value)=>setPriority(value)}
		
		 />
    
	<Row className="align-items-center">
		<Col sm={10} className="my-1">

			<Form.Control 
				type="text"
				className="input"
				value={name}
				onChange={e => { setName(e.target.value); setStatus(false) } } 
				placeholder="Add title" />
				<Form.Control 
				as="textarea"
			
				className="input"
				value={description}
				onChange={e => { setDescription(e.target.value); setStatus(false) } } 
				placeholder="Add description" />
		
		</Col>
		<Col xs="auto" className="my-1">
		<Button type="submit">Add Todo</Button>
		</Col>
	</Row>
	<br/>
</Form>
    );
}

export default AddToDo

