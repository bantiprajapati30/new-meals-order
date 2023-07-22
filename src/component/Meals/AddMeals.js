import React, { useState } from 'react';
import { Button, Card, CardBody, Modal, ModalBody, ModalHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const AddMeals = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
        // Clear form fields when closing the modal
        if (!modalOpen) {
            setProductName('');
            setDescription('');
            setPrice('');
            setIsVisible(false);
        }
    };

    const handleAddButtonClick = () => {
        setModalOpen(true);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Perform validation and handle form submission as per your requirements
        // You can access the form field values from the state variables (productName, description, price, isVisible)

        // Create an object with the form data
        const newProduct = {
            name: productName,
            description,
            price,
            visible: isVisible,
        };

        // Make a POST request to the API using fetch
        fetch('https://food-meals-db217-default-rtdb.firebaseio.com/meals.json', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Product added successfully:', data);
                // Clear the form fields
                setProductName('');
                setDescription('');
                setPrice('');
                setIsVisible(false);
                // Close the modal
                toggleModal();
            })
            .catch((error) => {
                console.error('Error adding product:', error);
            });
        toggleModal();
    };
    return (
        <div>
            <Button color="primary" onClick={handleAddButtonClick}>Add Product</Button>
            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Add Product</ModalHeader>
                <ModalBody>
                    <Card>
                        <CardBody>
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="productName">Product Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="productName"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="isVisible"
                                            checked={isVisible}
                                            onChange={(e) => setIsVisible(e.target.checked)}
                                        />
                                        <label className="form-check-label" htmlFor="isVisible">Is Visible</label>
                                    </div>
                                </div>
                                <Button type="submit" color="primary">Add</Button>
                            </form>
                        </CardBody>
                    </Card>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default AddMeals;