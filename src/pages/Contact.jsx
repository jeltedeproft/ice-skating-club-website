import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data); // Later: Send to email/API

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" />
      <input {...register('email')} placeholder="Email" />
      <textarea {...register('message')} placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;