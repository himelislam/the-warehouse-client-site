import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);

    const handleAddNewProduct = event => {
        event.preventDefault();
        const newProduct = {
            name: event.target.name.value,
            price: event.target.price.value,
            img: event.target.img.value,
            description: event.target.description.value,
            quantity: event.target.quantity.value,
            supplier: event.target.supplier.value,
            email: user.email
        }
        console.log(newProduct);
        fetch('https://young-spire-99179.herokuapp.com/myItems', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('New Product Added Successfully')
                    event.target.reset()
                }
            })
    }

    return (
        <div className='container'>
            <hr />
            <h2 className='text-center my-4'>Add New Product</h2>
            <hr />
            <div className='border border-dark p-4'>
                <Form onSubmit={handleAddNewProduct}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='bg-dark b-none text-white p-3' name="name" type="text" placeholder="Product Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='bg-dark b-none text-white p-3' name="price" type="number" placeholder="Price" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='bg-dark b-none text-white p-3' name="quantity" type="number" placeholder="Quantity" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='bg-dark b-none text-white p-3' name="supplier" type="text" placeholder="Supplier Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='bg-dark b-none text-white p-3' name="description" type="text" placeholder="Short Description" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='bg-dark b-none text-white p-3' name="img" type="text" placeholder="Image URL" required />
                    </Form.Group>

                    <Button className='btn btn-dark w-50 mx-auto p-2 fs-5 d-block fw-light' variant="primary" type="submit">
                        Add Item
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddItems;