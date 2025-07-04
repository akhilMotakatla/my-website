import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => (
  <section>
    <h2>Contact</h2>
    <p>Email: akhilreddy7894112@gmail.com</p>
    <p>Phone: +1 (940) 629-6557</p>
    <p>
      GitHub: <a href="https://github.com/akhilmotakatla" target="_blank" rel="noreferrer">
        <FaGithub size={24} style={{ marginRight: '8px' }} />
        github.com/akhilmotakatla
      </a>
    </p>
    <p>
      LinkedIn: <a href="https://linkedin.com/in/akhilmotakatla" target="_blank" rel="noreferrer">
        <FaLinkedin size={24} style={{ marginRight: '8px' }} />
        linkedin.com/in/akhilmotakatla
      </a>
    </p>
  </section>
);

export default Contact;
