// // import "./styles.css";

// export default function Form() {
//   function Submit(e:any) {
//     const formEle:any = document.querySelector("form");
//     const formDatab = new FormData(formEle);
//     console.log(formDatab)
//     fetch(
//       "https://script.google.com/macros/s/AKfycbyfH2baTT3IC7dZyu0S4JNNM2mW8DsM9BkA2dHg_FFmEMc5CQBfsImYwCyBcmd2_hKo1Q/exec",
//       {
//         method: "POST",
//         body: formDatab
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   return (
//     <div className="App">
//       <h1>Contact Me form</h1>
//       <h2>
//         This demonstrates how to send data from a website form to Google sheet
//         in React or Vanilla jS
//       </h2>
//       <div>
//         <form className="form" onSubmit={(e:any) => Submit(e)}>
//           <input placeholder="Your Name" name="name" type="text" />
//           <input placeholder="Your Email" name="email" type="text" />
//           <input placeholder="Your Message" name="message" type="text" />
//           <input name="Name" type="submit" />
//         </form>
//       </div>
//     </div>
//   );
// }












import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);


      console.log(formData)
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyfH2baTT3IC7dZyu0S4JNNM2mW8DsM9BkA2dHg_FFmEMc5CQBfsImYwCyBcmd2_hKo1Q/exec',
        {
          method: 'POST',
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form after successful submission

    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="App">
      <h1>Contact Me Form</h1>
      <h2>This demonstrates how to send data from a website form to Google Sheet in React.</h2>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            placeholder="Your Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            placeholder="Your Email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            placeholder="Your Message"
            name="message"
            type="text"
            value={formData.message}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
