import React, { useState } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";


const InvoiceForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvoiceState({
      name,
      phoneNumber,
      email,
      address,
      service,
    });
  };

  const [invoiceState, setInvoiceState] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    service: "",
  });

  const pdfExportComponent = React.useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={invoiceState.name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={invoiceState.phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={invoiceState.email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={invoiceState.address}
onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="service">Service:</label>
        <select
          id="service"
          value={invoiceState.service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="service1">Service 1</option>
          <option value="service2">Service 2</option>
          <option value="service3">Service 3</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      <button
        disabled={
          !invoiceState.name ||
          !invoiceState.phoneNumber ||
          !invoiceState.email ||
          !invoiceState.address ||
          !invoiceState.service
        }
        onClick={handleExportWithComponent}
      >
        Export as PDF
      </button>

      <PDFExport
        ref={pdfExportComponent}
        paperSize="A4"
        margin="1cm"
        scale={0.8}
        fileName="invoice.pdf"
        creator="Invoice App"
        landscape={false}
      >
        <div className="invoice-container">
          <h1>Invoice</h1>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Service {invoiceState.service}</td>
                <td>
                  {invoiceState.service === "service1"
                    ? "Service 1 Description"
                    : invoiceState.service === "service2"
                    ? "Service 2 Description"
                    : "Service 3 Description"}
                </td>
                <td>
                  {invoiceState.service === "service1"
                    ? "100"
                    : invoiceState.service === "service2"
                    ? "200"
                    : "300"}
                </td>
                <td>1</td>
                <td className="total">
                  {invoiceState.service === "service1"
                    ? "100"
                    : invoiceState.service === "service2"
                    ? "200"
                    : "300"}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4}>Total:</td>
                <td className="total">
                  {invoiceState.service === "service1"
                    ? "100"
                    : invoiceState.service === "service2"
                    ? "200"
                    : "300"}
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="date">
            Date: {new Date().toLocaleDateString()}
          </div>
        </div>
      </PDFExport>
    </div>
  );
};

export default InvoiceForm;