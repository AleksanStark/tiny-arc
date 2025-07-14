"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Form.module.css";

type Fields = {
  name: string;
  lastName: string;
  email: string;
  message: string;
};
export default function Form() {
  const { register, handleSubmit, formState: errors } = useForm<Fields>();
  const onSubmit: SubmitHandler<Fields> = (data) => console.log(data);
  return (
    <div className={styles.glamping_form_wrapper}>
      <form className={styles.glamping_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form_name_group}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              className={styles.form_input}
              id="name"
              {...register("name", { required: true })}
            />
            {errors.errors.name && <span>This field is required</span>}
          </div>

          <div>
            <label htmlFor="name">Name</label>
            <input
              className={styles.form_input}
              id="lastName"
              {...register("lastName", { required: true })}
            />
            {errors.errors.lastName && <span>This field is required</span>}
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input
          className={styles.form_input}
          id="email"
          {...register("email", { required: true })}
          type="email"
        />
        {errors.errors.email && <span>This field is required</span>}
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          {...register("message", { required: true })}
        ></textarea>
      </form>
    </div>
  );
}
