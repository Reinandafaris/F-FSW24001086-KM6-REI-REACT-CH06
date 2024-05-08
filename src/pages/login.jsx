import { useEffect, useState } from "react";

const data = {
  username: "admin",
  password: "admin123",
};

const Login = () => {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    localStorage.setItem("loginData", JSON.stringify(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.username === data.username &&
      formData.password === data.password
    ) {
      localStorage.setItem("token", true);
      window.location.href = "/home";
    } else {
      setMessage("Invalid username or password");
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="d-flex justify-content-center min-vh-100 align-items-center text-center">
      <div className="text-start w-25 p-4 border border-light-subtle shadow p-3 mb-5 rounded">
        <h1 className="text-primary fs-2">Login</h1>
        <p style={{ fontSize: "15px", color: "gray" }}>
          Welcome, Please enter your details
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control mb-3"
            type="text"
            placeholder="Jhon Doe"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            type="password"
            placeholder="*******"
          />
          <button
            type="submit"
            className="btn btn-primary mt-3 w-100"
          >
            Login
          </button>
        </form>

        {message && (
          <p
            style={{
              fontSize: "15px",
              marginBottom: "5px",
              marginTop: "5px",
            }}
            className="text-danger text-center"
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
