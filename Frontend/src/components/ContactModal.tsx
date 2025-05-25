import React, { useEffect, useRef } from 'react';

const ContactModal: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    // Handle form submission
  };

  useEffect(() => {
    const form = formRef.current;
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);

  return (
    <div>
      {/* Render your form here */}
    </div>
  );
};

export default ContactModal; 