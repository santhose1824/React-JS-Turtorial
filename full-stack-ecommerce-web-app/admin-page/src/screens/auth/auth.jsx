const Auth = () => {
  return (
    <div className="h-screen bg-login-bg flex items-center justify-center">
      <div className="authCard">
        <h3 className="text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
          Create An Account
        </h3>
        <div className="flex items-center justify-center text-xs m-1">
          <p>Have an Account?</p>
          <p className="ml-2 text-blue-600 cursor-pointer">Sigin</p>
        </div>
        <form className="w-80">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text mb-3">Email</span>
            </div>
            <input
              type="text"
              placeholder="Enter Email Address"
              className="input input-bordered w-full max-w-xs rounded-md border p-2 mt-2 border-gray-300 mb-2 ring-blue-900"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text mb-3">Password</span>
            </div>
            <input
              type="text"
              placeholder="Create Password"
              className="input input-bordered w-full max-w-xs rounded-md border p-2 mt-2 border-gray-300 mb-2 focus:border-auth-btn"
            />
          </label>
          <button className="btn btn-wide text-center bg-auth-btn w-80 p-2 mt-2 rounded-md text-white">Create An Account</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
