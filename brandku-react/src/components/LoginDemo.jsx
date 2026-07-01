import { useLogin } from "../hooks/useLogin";

const LoginDemo = ({ isOpen, onClose }) => {
  const { user, loading, error, login } = useLogin();

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const credentials = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      await login(credentials);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h2 className="text-lg font-bold text-slate-800">
            Masuk ke BrandKu
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-slate-400 hover:text-slate-600"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="mb-6 text-center text-xl font-bold text-slate-800">
              Demo Login
            </h3>

            {!user ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="contoh@brandku.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full rounded-lg px-4 py-2.5 font-semibold text-white transition ${
                    loading
                      ? "cursor-not-allowed bg-blue-400"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Memproses..." : "Masuk"}
                </button>
              </form>
            ) : (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                  <span className="text-lg font-bold text-white">
                    {user.name?.charAt(0) || "U"}
                  </span>
                </div>

                <h3 className="mb-1 text-lg font-bold text-slate-800">
                  Halo, {user.name}!
                </h3>

                <p className="mb-4 text-sm text-slate-600">
                  {user.email}
                </p>

                <p className="text-xs text-slate-500">
                  ✅ Login berhasil, ini contoh response dari{" "}
                  <code className="rounded bg-slate-100 px-1">
                    /login
                  </code>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDemo;