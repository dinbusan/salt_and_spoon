import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {useForm} from "react-hook-form"

const Contact = () => {
  const {
    register, 
    handleSubmit, 
    formState: {errors, isSubmitting, reset},
  } = useForm();

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = 
  React.useState(false);

  const postData = ({name}) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${name} saved`);
        resolve({success: true});
      }, 100);
    });
  };

    const onSubmit = async (data) => {
      emailjs
        .send("service_eqp5lv8", "template_54iplxj", data, "zuXt0xHobBClGi0ZB")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      const result = await postData(data);
      setIsSuccessfullySubmitted(result.success);
    };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-5 flex flex-wrap justify-center"
    >
      {isSuccessfullySubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="font-thasadith mt-20 mx-1 text-center text-black tracking-wider"
        >
          <h2 className="text-5xl ">Thank you for your message!</h2>
          <p className="text-2xl  mt-10 ">
            I'll get back to you as soon as possible.
          </p>
        </motion.div>
      ) : (
        <div className="w-2/3 flex font-thasadith justify-center items-center p-2">
          <div
            className="w-5/6 shadow-lg mt-5 rounded-md bg-white p-2 md:p-8 flex flex-col"
            style={{ height: "600px" }}
          >
            <h2 className="text-center font-medium text-2xl mb-4 roddenberry tracking-wider text-3xl">
              CONTACT US
            </h2>``
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-1 flex-col justify-evenly tracking-wider"
              ref={reset}
            >
              <label htmlFor="from_name">Name</label>
              <input
                className="border-2 outline-none p-2 rounded-md"
                placeholder="Name"
                type="text"
                name="from_name"
                disabled={isSubmitting}
                {...register("from_name", { required: "Name is required" })}
              />
              {errors.from_name && (
                <span className="text-sm text-red-700">
                  {errors.from_name.message}
                </span>
              )}
              <label className="xl:mt-5" htmlFor="from_email">
                Email
              </label>
              <input
                className="border-2 outline-none p-2 rounded-md"
                placeholder="abc123@gmail.com"
                type="email"
                name="from_email"
                disabled={isSubmitting}
                {...register("from_email", {
                  required: "Please enter your email",
                })}
              />
              {errors.from_email && (
                <span className="text-sm text-red-700">
                  {errors.from_email.message}
                </span>
              )}
              <label className="xl:mt-5" htmlFor="from_email">
                Phone number
              </label>
              <input
                className="border-2 outline-none p-2 rounded-md"
                placeholder="999-999-9999"
                type="tel"
                name="from_phone"
                disabled={isSubmitting}
                {...register("from_phone", {
                  required: "Please enter your phone number",
                })}
              />
              {errors.from_phone && (
                <span className="text-sm text-red-700">
                  {errors.from_phone.message}
                </span>
              )}
              <label className="xl:mt-5" htmlFor="message">
                Description:
              </label>
              <textarea
                className="border-2 outline-none p-2 rounded-md"
                name="message"
                placeholder="Describe your custom order..."
                disabled={isSubmitting}
                {...register("message", { required: "Please enter a message" })}
              />
              {errors.message && (
                <span className="text-sm text-red-700">
                  {errors.message.message}
                </span>
              )}
              <button
                type="submit"
                className="mt-4 flex justify-center p-2 rounded-md w-1/2 self-center bg-blue-950 font-thasadith text-lg text-blue-50 hover:bg-blue-800"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Contact;
