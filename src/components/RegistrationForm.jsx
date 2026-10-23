import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
  name: yup.string().required("სახელის შეყვანა სავალდებულოა"),

  email: yup
    .string()
    .email("შეიყვანეთ სწორი ელფოსტა")
    .required("ელფოსტის შეყვანა სავალდებულოა"),

  password: yup
    .string()
    .min(6, "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს")
    .required("პაროლის შეყვანა სავალდებულოა"),
});

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("რეგისტრაცია განხორციელდა");
    console.log("სახელი:", data.name);
    console.log("ელფოსტა:", data.email);
  };

  return (
    <div>
      <h2>მკითხველის რეგისტრაცია</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="name">სახელი:</label>
          <input id="name" type="text" {...register("name")} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">ელფოსტა:</label>
          <input id="email" type="email" {...register("email")} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">პაროლი:</label>
          <input id="password" type="password" {...register("password")} />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        <button type="submit">რეგისტრაცია</button>
      </form>
    </div>
  );
}
