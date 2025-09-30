import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/contacts')
      .then(res => res.json())
      .then(setContacts);
  }, []);

  const fetchContacts = () => {
    fetch('/api/contacts')
      .then(res => res.json())
      .then(setContacts);
  };

  const handleEdit = (contact) => {
    setEditing(contact.id);
    setForm({ name: contact.name, email: contact.email, message: contact.message });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this contact?')) return;
    const res = await fetch(`/api/contacts/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (res.ok) {
      fetchContacts();
      if (editing === id) setEditing(null);
    } else {
      alert(data.message || 'Failed to delete contact.');
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/contacts/${editing}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (res.ok) {
      setContacts(contacts.map(c => c.id === editing ? data.data : c));
      setEditing(null);
    } else if (data.errors) {
      alert(Object.values(data.errors).flat().join('\n'));
    } else {
      alert(data.message || 'Error updating contact');
    }
    setLoading(false);
  };

  return (
    <div className="contact-manager-layout">
      <div className="contact-manager-content">
        <h2 className="contact-manager-title">Contact Manager</h2>
        <div style={{ marginBottom: '1.5rem', fontWeight: '600', color: '#ec4899', fontSize: '1.2rem' }}>
          Total Submissions: {contacts.length}
        </div>
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Message</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              editing === contact.id ? (
                <tr key={contact.id}>
                  <td><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></td>
                  <td><input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></td>
                  <td><input value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /></td>
                  <td className="contact-actions">
                    <button onClick={handleSave} disabled={loading}>Save</button>
                    <button onClick={() => setEditing(null)}>Cancel</button>
                  </td>
                </tr>
              ) : (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td className="contact-actions">
                    <button onClick={() => handleEdit(contact)}>Edit</button>
                    <button onClick={() => handleDelete(contact.id)}>Delete</button>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ContactManager;