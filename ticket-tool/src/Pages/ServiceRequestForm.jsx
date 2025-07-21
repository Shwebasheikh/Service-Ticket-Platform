// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Styles/ServiceRequestForm.css';

// const ServiceRequestForm = () => {
//   const [formData, setFormData] = useState({
//     category: '',
//     priority: '',
//     urgency: '',
//     location: '',
//     description: '',
//     files: []
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       files: [...e.target.files]
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Here you would typically send the data to your backend
//     alert('Ticket submitted successfully!');
//   };

//   return (
//     <div className="container mt-5 service-request-container">
//       <div className="card shadow-lg">
//         <div className="card-header bg-primary text-white">
//           <h2 className="mb-1">New Service Request</h2>
//           <p className="mb-0 opacity-75">Submit a new ticket for support or maintenance</p>
//         </div>
        
//         <div className="card-body">
//           {/* <div className="mb-4">
//             <h5 className="section-title">Request Details</h5>
//             <p className="text">Provide detailed information about your request</p> */}
//             <div className="card-body">
//   {/* Editable Request Details Section */}
//   <div className="mb-4">
//     <label htmlFor="requestTitle" className="form-label fw-bold">Request Title</label>
//     <input
//       type="text"
//       className="form-control form-control-lg mb-2"
//       id="requestTitle"
//       placeholder="Enter request title (e.g., Request Details)"
//       value={formData.requestTitle || "Request Details"}
//       onChange={(e) => setFormData({...formData, requestTitle: e.target.value})}
//     />
    
// </div>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="category" className="form-label fw-bold">Category</label>
//               <select 
//                 className="form-select form-select-lg" 
//                 id="category" 
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select category</option>
//                 <option value="Technical">Technical Support</option>
//                 <option value="Maintenance">Facility Maintenance</option>
//                 <option value="Equipment">Equipment Request</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             <div className="row mb-4">
//               <div className="col-md-6">
//                 <label className="form-label fw-bold">Priority Level</label>
//                 <div className="priority-options">
//                   <div className="form-check">
//                     <input 
//                       className="form-check-input priority-high" 
//                       type="radio" 
//                       name="priority" 
//                       id="priorityHigh" 
//                       value="High"
//                       checked={formData.priority === 'High'}
//                       onChange={handleChange}
//                       required
//                     />
//                     <label className="form-check-label" htmlFor="priorityHigh">
//                       <span className="priority-indicator high"></span>
//                       High (Business Critical)
//                     </label>
//                   </div>
//                   <div className="form-check">
//                     <input 
//                       className="form-check-input priority-medium" 
//                       type="radio" 
//                       name="priority" 
//                       id="priorityMedium" 
//                       value="Medium"
//                       checked={formData.priority === 'Medium'}
//                       onChange={handleChange}
//                     />
//                     <label className="form-check-label" htmlFor="priorityMedium">
//                       <span className="priority-indicator medium"></span>
//                       Medium (Home Policy)
//                     </label>
//                   </div>
//                   <div className="form-check">
//                     <input 
//                       className="form-check-input priority-low" 
//                       type="radio" 
//                       name="priority" 
//                       id="priorityLow" 
//                       value="Low"
//                       checked={formData.priority === 'Low'}
//                       onChange={handleChange}
//                     />
//                     <label className="form-check-label" htmlFor="priorityLow">
//                       <span className="priority-indicator low"></span>
//                       Low (General Inquiry)
//                     </label>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="col-md-6">
//                 <label htmlFor="urgency" className="form-label fw-bold">Urgency</label>
//                 <select 
//                   className="form-select form-select-lg" 
//                   id="urgency" 
//                   name="urgency"
//                   value={formData.urgency}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select urgency level</option>
//                   <option value="Critical">Critical (Immediate attention)</option>
//                   <option value="High">High (Within 24 hours)</option>
//                   <option value="Medium">Medium (Within 3 days)</option>
//                   <option value="Low">Low (When available)</option>
//                 </select>
//               </div>
//             </div>

//             <div className="mb-4">
//               <label htmlFor="location" className="form-label fw-bold">Location Details</label>
//               <input 
//                 type="text" 
//                 className="form-control form-control-lg" 
//                 id="location" 
//                 name="location"
//                 placeholder="Building, floor, room number"
//                 value={formData.location}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="description" className="form-label fw-bold">Description</label>
//               <textarea 
//                 className="form-control form-control-lg" 
//                 id="description" 
//                 name="description"
//                 rows="5"
//                 placeholder="Provide a detailed description of your issue or request..."
//                 value={formData.description}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//               <div className="form-text">Be as specific as possible to help us resolve your issue quickly</div>
//             </div>

//             <div className="mb-4">
//               <h5 className="section-title">Attachments</h5>
//               <p className="text-muted">Add supporting documents if available</p>
//               <div className="file-upload-area">
//                 <input 
//                   type="file" 
//                   className="d-none" 
//                   id="fileUpload" 
//                   onChange={handleFileChange}
//                   multiple
//                 />
//                 <label htmlFor="fileUpload" className="file-upload-label">
//                   <div className="file-upload-content">
//                     <i className="bi bi-cloud-arrow-up fs-1 text-primary"></i>
//                     <p className="mt-2 mb-1 fw-bold">Drag and drop files here</p>
//                     <p className="text-muted small">or click to browse (Supports PDFs, images, documents)</p>
//                     <p className="text-muted small">Maximum file size: 10MB</p>
//                   </div>
//                 </label>
//                 {formData.files.length > 0 && (
//                   <div className="file-preview mt-3">
//                     <h6 className="fw-bold">Selected files:</h6>
//                     <ul className="list-group">
//                       {Array.from(formData.files).map((file, index) => (
//                         <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//                           <span>{file.name}</span>
//                           <span className="badge bg-light text-dark">{Math.round(file.size / 1024)} KB</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="d-grid gap-2 mt-4">
//               <button type="submit" className="btn btn-primary btn-lg py-3 fw-bold">
//                 <i className="bi bi-send-fill me-2"></i> Submit Ticket
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceRequestForm;




import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ServiceRequestForm.css'; // Your custom styling if needed

const ServiceRequestForm = () => {
  // Initializing all fields in state
  const [formData, setFormData] = useState({
    requestTitle: '',
    category: '',
    priority: '',
    urgency: '',
    location: '',
    description: '',
    files: []
  });

  // For text/select inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // For file input
  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      files: [...e.target.files]
    }));
  };

  // On form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Ticket submitted successfully!');
  };

  return (
    <div className="container mt-5 service-request-container">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-1">New Service Request</h2>
          <p className="mb-0 opacity-75">Submit a new ticket for support or maintenance</p>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Request Title */}
            <div className="mb-4">
              <label htmlFor="requestTitle" className="form-label fw-bold">Request Title</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="requestTitle"
                name="requestTitle"
                placeholder="Enter request title"
                value={formData.requestTitle}
                onChange={handleChange}
                required
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label htmlFor="category" className="form-label fw-bold">Category</label>
              <select 
                className="form-select form-select-lg"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                <option value="Technical">Technical Support</option>
                <option value="Maintenance">Facility Maintenance</option>
                <option value="Equipment">Equipment Request</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Priority and Urgency */}
            <div className="row mb-4">
              <div className="col-md-6">
                <label className="form-label fw-bold">Priority Level</label>
                <div className="form-check">
                  <input
                    type="radio"
                    name="priority"
                    id="priorityHigh"
                    value="High"
                    className="form-check-input"
                    checked={formData.priority === 'High'}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="priorityHigh" className="form-check-label">
                    High (Business Critical)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="priority"
                    id="priorityMedium"
                    value="Medium"
                    className="form-check-input"
                    checked={formData.priority === 'Medium'}
                    onChange={handleChange}
                  />
                  <label htmlFor="priorityMedium" className="form-check-label">
                    Medium (Home Policy)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="priority"
                    id="priorityLow"
                    value="Low"
                    className="form-check-input"
                    checked={formData.priority === 'Low'}
                    onChange={handleChange}
                  />
                  <label htmlFor="priorityLow" className="form-check-label">
                    Low (General Inquiry)
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="urgency" className="form-label fw-bold">Urgency</label>
                <select 
                  className="form-select form-select-lg"
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                >
                  <option value="">Select urgency level</option>
                  <option value="Critical">Critical (Immediate)</option>
                  <option value="High">High (24 hours)</option>
                  <option value="Medium">Medium (3 days)</option>
                  <option value="Low">Low (Whenever possible)</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="mb-4">
              <label htmlFor="location" className="form-label fw-bold">Location</label>
              <input 
                type="text"
                className="form-control form-control-lg"
                id="location"
                name="location"
                placeholder="e.g., Building A, 3rd Floor"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="form-label fw-bold">Description</label>
              <textarea 
                className="form-control form-control-lg"
                id="description"
                name="description"
                rows="5"
                placeholder="Describe your issue/request in detail..."
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
              <div className="form-text">Be as detailed as possible for quicker resolution</div>
            </div>

            {/* File Upload */}
            <div className="mb-4">
              <h5 className="fw-bold">Attachments</h5>
              <p className="text-muted">Upload images, documents, or PDFs (Max 10MB)</p>
              <input
                type="file"
                id="fileUpload"
                className="form-control"
                multiple
                onChange={handleFileChange}
              />
              {formData.files.length > 0 && (
                <ul className="list-group mt-3">
                  {Array.from(formData.files).map((file, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                      {file.name}
                      <span className="badge bg-secondary">{Math.round(file.size / 1024)} KB</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit Button */}
            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary btn-lg">
                <i className="bi bi-send-fill me-2"></i> Submit Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequestForm;
