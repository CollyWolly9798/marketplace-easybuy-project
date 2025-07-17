'use client';

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import EditIcon from '../../icons/mobile/EditIcon.jsx';

export default function BuyerForm({ title, initialData }) {
  const [userData, setUserData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);

  const handleSave = (values) => {
    setUserData(values);
    setEditMode(false);
  };

  const handleCancel = (resetForm) => {
    resetForm();
    setEditMode(false);
  };

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold text-blue-900">{title}</h2>
        {!editMode && (
          <button
            onClick={() => setEditMode(true)}
            className="border p-1.5 border-amber-700 rounded-lg"
          >
            <EditIcon />
          </button>
        )}
      </div>

      <div className="max-w-[343px] mb-6 mx-auto p-5 border rounded-2xl shadow bg-white">
        <Formik initialValues={userData} enableReinitialize onSubmit={handleSave}>
          {({ values, resetForm }) => (
            <Form className="space-y-4">
              {Object.keys(userData).map((key) => (
                <div key={key}>
                  <label className="block text-[20px] font-bold text-blue-900 capitalize mb-2">
                    {key === 'birthDate' ? 'Date of birth:' : key}
                  </label>
                  {editMode ? (
                    <Field
                      name={key}
                      type={key === 'birthDate' ? 'date' : 'text'}
                      className="w-full border border-purple-900 input-shadow p-3 rounded-md focus:outline-none text-blue-900"
                    />
                  ) : (
                    <p className="text-[20px] text-blue-900">{values[key]}</p>
                  )}
                </div>
              ))}

              {editMode && (
                <div className="flex flex-col gap-3">
                  <button type="submit" className=" gradient-button px-4 py-3 rounded-[8px]">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCancel(resetForm)}
                    className="bg-white text-blue-900 py-2 rounded-[8px] border"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
