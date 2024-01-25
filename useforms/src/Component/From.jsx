import React from "react";
import { useForm } from "react-hook-form";


const Form = () => {
    const [registrationSuccess, setRegistrationSuccess] = React.useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setRegistrationSuccess(true);
    };

    return (
        <div className="app">
           {registrationSuccess && (
  <div className="success-message">
    <p>Registration successful</p>
  </div>
    )}

        
     <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <label>First Name :</label>
                <input type="text" name="firstName" {...register("firstName", { required: "First name required!" })} />
                {errors.firstName && <p className="err">{errors.firstName.message}</p>}

                <label>Last Name :</label>
                <input type="text" name="lastName" {...register("lastName", { required: "Last name required!" })} />
                {errors.lastName && <p className="err">{errors.lastName.message}</p>}

                <label>Email :</label>
                <input type="text" name="email" {...register("email", { required: "Email is required!", pattern: { value: /^\S+@\S+$/i, message: "Invalid Email" } })} />
                {errors.email && <p className="err">{errors.email.message}</p>}

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 5,
                            message: "Password must be at least 5 characters long"
                        },
                        maxLength: {
                            value: 20,
                            message: "Password cannot be more than 20 characters long"
                        }
                    })}
                />
                {errors.password && <p className="err">{errors.password.message}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;