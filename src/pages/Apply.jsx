// src/pages/Apply.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload, CheckCircle } from 'lucide-react';
import './Apply.css';

const provinces = [
  'Eastern Cape','Free State','Gauteng','KwaZulu-Natal',
  'Limpopo','Mpumalanga','North West','Northern Cape','Western Cape'
];
const statuses = ['Employed','Unemployed','Student','Other'];
const courseOptions = [
  { label: 'DP-3027: Implement a data engineering solution with Azure Databricks', value: 'DP-3027' },
  { label: 'DP-3028: Implement Generative AI engineering with Azure Databricks', value: 'DP-3028' },
  { label: 'DP-3029: Work smarter with Copilot in Microsoft Fabric', value: 'DP-3029' }
];

const initialForm = {
  submissionDate: new Date().toISOString().slice(0,10),
  fullName: '',
  idNumber: '',
  email: '',
  phoneNumber: '',
  gender: '',
  nationality: '',
  province: '',
  city: '',
  highestQualification: '',
  institution: '',
  yearCompleted: '',
  currentStatus: '',
  githubUrl: '',
  linkedinUrl: '',
  howDidYouHearAboutUs: '',
  motivationLetter: '',
  willingToRelocate: '',
  preferredLocation: '',
  cvFile: '',
  applicationStatus: 'Pending',
  relevantSkillsCount: 0,
  courseCode: ''
};

export default function Apply() {
  const [form, setForm] = useState(initialForm);
  const [modules, setModules] = useState([{ moduleName: '', mark: '' }]);
  const [rawFile, setRawFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleFile = e => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.match(/pdf|docx?|word/i)) {
      return alert('Please upload a PDF or DOC/DOCX file.');
    }
    setRawFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      const b64 = reader.result.split(',')[1];
      setForm(f => ({ ...f, cvFile: b64 }));
    };
    reader.readAsDataURL(file);
  };

  const handleModuleChange = (idx, field, value) => {
    const updated = [...modules];
    updated[idx][field] = value;
    setModules(updated);
  };

  const addModule = () => {
    setModules([...modules, { moduleName: '', mark: '' }]);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // basic front-end validation
    for (let key of Object.keys(initialForm)) {
      if (!form[key] && key !== 'relevantSkillsCount' && key !== 'applicationStatus') {
        return alert(`Please fill in: ${key}`);
      }
    }
    // modules validation
    for (let i = 0; i < modules.length; i++) {
      if (!modules[i].moduleName || !modules[i].mark) {
        return alert(`Please complete module #${i+1}`);
      }
    }

    const payload = {
      ...form,
      willingToRelocate: form.willingToRelocate === 'Yes',
      finalYearModules: modules.map(m => ({
        moduleName: m.moduleName,
        mark: parseInt(m.mark, 10)
      }))
    };

    setSubmitting(true);
    try {
      await axios.post(
        'http://13.48.10.3:8080/api/applications',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      );
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Submission failed, please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="apply-confirm">
        <CheckCircle size={64} className="check-icon" />
        <h2>Application Submitted!</h2>
        <p>Thanks—you’ll hear from us within 48 hours.</p>
        <Link to="/">
          <button className="btn-back">
            <ArrowLeft size={16} /> Return Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <form className="apply-form" onSubmit={handleSubmit}>
      <h1>Join the Data Science Academy</h1>

      <label className="field">
        CV Upload *
        <div className={`file-drop ${rawFile ? 'has-file' : ''}`}>
          <Upload size={24} className="icon" />
          <span>{ rawFile ? rawFile.name : 'Click to upload PDF or DOC' }</span>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFile}
            required
          />
        </div>
      </label>

      {/* Personal Info */}
      <fieldset disabled={!form.cvFile || submitting}>
        <legend>Personal Information</legend>
        <input type="date" name="submissionDate" value={form.submissionDate}
               onChange={handleChange} required />
        <input type="text" name="fullName" placeholder="Full Name *"
               value={form.fullName} onChange={handleChange} required />
        <input type="text" name="idNumber" placeholder="ID Number *"
               value={form.idNumber} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email *"
               value={form.email} onChange={handleChange} required />
        <input type="tel" name="phoneNumber" placeholder="Phone Number *"
               value={form.phoneNumber} onChange={handleChange} required />
        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Gender *</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input type="text" name="nationality" placeholder="Nationality *"
               value={form.nationality} onChange={handleChange} required />
        <select name="province" value={form.province} onChange={handleChange} required>
          <option value="">Province *</option>
          {provinces.map(p => <option key={p}>{p}</option>)}
        </select>
        <input type="text" name="city" placeholder="City/Town *"
               value={form.city} onChange={handleChange} required />
      </fieldset>

      {/* Education & Status */}
      <fieldset disabled={!form.cvFile || submitting}>
        <legend>Education & Status</legend>
        <input type="text" name="highestQualification"
               placeholder="Highest Qualification *"
               value={form.highestQualification}
               onChange={handleChange} required />
        <input type="text" name="institution" placeholder="Institution *"
               value={form.institution}
               onChange={handleChange} required />
        <input type="number" name="yearCompleted"
               placeholder="Year Completed *"
               value={form.yearCompleted}
               onChange={handleChange} required />
        <select name="currentStatus" value={form.currentStatus}
                onChange={handleChange} required>
          <option value="">Current Status *</option>
          {statuses.map(s => <option key={s}>{s}</option>)}
        </select>
      </fieldset>

      {/* Online Presence */}
      <fieldset disabled={!form.cvFile || submitting}>
        <legend>Online Presence & Source</legend>
        <input type="url" name="githubUrl" placeholder="GitHub URL *"
               value={form.githubUrl} onChange={handleChange} required />
        <input type="url" name="linkedinUrl" placeholder="LinkedIn URL *"
               value={form.linkedinUrl} onChange={handleChange} required />
        <input type="text" name="howDidYouHearAboutUs"
               placeholder="How did you hear about us? *"
               value={form.howDidYouHearAboutUs}
               onChange={handleChange} required />
      </fieldset>

      {/* Motivation & Relocation */}
      <fieldset disabled={!form.cvFile || submitting}>
        <legend>Motivation & Relocation</legend>
        <textarea name="motivationLetter" placeholder="Your motivation *"
                  rows="4" value={form.motivationLetter}
                  onChange={handleChange} required />
        <select name="willingToRelocate"
                value={form.willingToRelocate}
                onChange={handleChange} required>
          <option value="">Willing to relocate? *</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <input type="text" name="preferredLocation"
               placeholder="Preferred Location *"
               value={form.preferredLocation}
               onChange={handleChange} required />
      </fieldset>

      {/* New: Course Dropdown */}
      <fieldset disabled={!form.cvFile || submitting}>
        <legend>Course Applying For</legend>
        <select name="courseCode"
                value={form.courseCode}
                onChange={handleChange}
                required>
          <option value="">Select Course *</option>
          {courseOptions.map(c => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </fieldset>

      {/* New: Final Year Modules */}
      <fieldset disabled={!form.cvFile || submitting}>
        <legend>Final Year Modules</legend>
        {modules.map((mod, idx) => (
          <div key={idx} className="module-row">
            <input type="text"
                   placeholder={`Module Name ${idx+1}`}
                   value={mod.moduleName}
                   onChange={e => handleModuleChange(idx, 'moduleName', e.target.value)}
                   required />
            <input type="number"
                   placeholder="Mark"
                   value={mod.mark}
                   onChange={e => handleModuleChange(idx, 'mark', e.target.value)}
                   required />
          </div>
        ))}
        <button type="button" onClick={addModule} className="btn-add-module">
          + Add Module
        </button>
      </fieldset>

      <button type="submit" className="btn-submit"
              disabled={!form.cvFile || submitting}>
        {submitting ? 'Submitting…' : 'Submit Application'}
      </button>
    </form>
  );
}
