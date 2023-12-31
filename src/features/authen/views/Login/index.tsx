import { useEffect, useState } from "react";
import { useLoginMutation } from "features/authen/services";
import { Navigate, useNavigate, useRoutes } from "react-router-dom";
import { RoutePath } from "shared/constants/RouteConst";

const Login = () => {
  const [doLogin, { isSuccess }] = useLoginMutation();
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const navigate = useNavigate();
  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const onLogin = () => {
    doLogin({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("isSuccess: ", isSuccess);
      navigate(`/${RoutePath.Products}`);
    }
  }, [isSuccess]);
  return (
    <div className="w-screen flex h-screen justify-center items-center">
      <form
        name="loginForm"
        autoComplete="off"
        className="flex w-full min-w-fit max-w-md flex-col border border-solid rounded border-blue-400 p-6 gap-6">
        <h1 className="text-center font-semibold text-xl">Welcome to Login</h1>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={onChangeEmail}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            value={password}
            onChange={onChangePassword}
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <button
          type="button"
          onClick={onLogin}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
        <div className="flex justify-center">
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Do not have account? Register&nbsp;
            <a
              className="text-blue-600 hover:underline dark:text-blue-500"
              href={RoutePath.Register}>
              here
            </a>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Login;
