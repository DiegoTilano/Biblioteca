class Auth {
  async register({ name, email, password }) {
    try {
      const data = {
        name,
        email,
        password,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const req = await fetch("http://localhost:4000/api/auth/register", options);
      const res = await req.json();
      console.log('registro: ', res)
      return res;
    } catch (error) {
      console.log("ERRRR: ", error);
      throw new Error("Se ha producido un error al registrarse");
    }
  }
  async login({ email, password }) {
    try {
      const data = {
        email,
        password,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const req = await fetch("http://localhost:4000/api/auth/login", options);
      const res = await req.json();
      return res;
    } catch (error) {
      console.log("ERRRR: ", error);
      throw new Error("Se ha producido un error al iniciar sesion");
    }
  }
}
export default Auth