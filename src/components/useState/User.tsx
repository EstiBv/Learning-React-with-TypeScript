const User = (props: UserProps) => {
  // console.log(props);
  const loginUser = () => {
    props.handleUser();
  };

  return (
    <>
      <div className="mt-2">
        <h4>User</h4>
        <button
          className="btn btn-primary btn-lg m-t2"
          onClick={() => loginUser()}
        >
          Login
        </button>
        <pre>{JSON.stringify(props.user)}</pre>
      </div>
    </>
  );
};

type UserProps = {
  user?: object;
  handleUser: Function;
};

export default User;
