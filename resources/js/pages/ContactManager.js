import React, { useEffect, useState } from 'react';

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const fetchContacts = () => {
    fetch('/api/contacts')
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(setContacts)
      .catch(() => setStatus('Failed to load contacts.'));
  };

  useEffect(() => { fetchContacts(); }, []);

  const handleEdit = (c) => {
    setEditing(c.id);
    setForm({ name: c.name, email: c.email, message: c.message });
    setStatus('');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this contact?')) return;
    const res = await fetch(`/api/contacts/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setStatus('Deleted.');
      fetchContacts();
      if (editing === id) setEditing(null);
    } else {
      const data = await res.json().catch(() => ({}));
      setStatus(data.message || 'Delete failed.');
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/contacts/${editing}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      setStatus('Saved.');
      setEditing(null);
      fetchContacts();
    } else if (data.errors) {
      setStatus(Object.values(data.errors).flat().join(' '));
    } else {
      setStatus(data.message || 'Save failed.');
    }
  };

  return (
    <div className="contact-manager-content">
      <div className="contact-manager-title">Contact Manager</div>
      <div className="total-submissions">Total Submissions: {contacts.length}</div>
      {status && <div style={{ marginBottom: 10 }}>{status}</div>}
      <table className="contact-table">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Message</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {contacts.map(c => (
            editing === c.id ? (
              <tr key={c.id}>
                <td><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></td>
                <td><input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></td>
                <td><input value={form.message} onChange={e=>setForm({...form,message:e.target.value})} /></td>
                <td className="contact-actions">
                  <button type="button" onClick={handleSave}>Save</button>
                  <button type="button" onClick={()=>{ setEditing(null); setStatus(''); }}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.message}</td>
                <td className="contact-actions">
                  <button type="button" onClick={()=>handleEdit(c)}>Edit</button>
                  <button type="button" onClick={()=>handleDelete(c.id)}>Delete</button>
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactManager;