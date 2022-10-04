import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name").min(3, "Your first name must be at least 3 characters"),
    lastName: yup.string().required("Please enter your last name").min(4, "Your last name must be at least 4 characters"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters")
});

function App() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name</label>
            <input {...register("firstName")} />
            {errors.firstName && <span>{errors.firstName.message}</span>}

            <label htmlFor="lastName">Last Name</label>
            <input {...register("lastName")} />
            {errors.lastName && <span>{errors.lastName.message}</span>}

            <label htmlFor="email">Your e-mail</label>
            <input {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}

            <label htmlFor="message">Please choose your Subject</label>
            <select {...register("gender")}>
                <option value="female">Question</option>
                <option value="male">Customer Service</option>
                <option value="other">Suggestions</option>
            </select>

            <label htmlFor="message">Your Message</label>
            <textarea {...register("message")} />
            {errors.message && <span>{errors.message.message}</span>}




            <button>Send</button>
        </form>
    );
}

export default App;