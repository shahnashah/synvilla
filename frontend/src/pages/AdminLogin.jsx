
export function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/api/admin/login", {
          email,
          password,
        });
        if (response.data.success) {
          localStorage.setItem("adminToken", response.data.token);
          navigate("/admin");
        } else {
          alert("Invalid credentials");
        }
      } catch (error) {
        console.error("Login error", error);
      }
    };
  
    return (
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleLogin} className="p-6 border rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    );
  }
  