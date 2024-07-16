import ScreenWrapper from '../../hoc/ScreenWrapper';

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>name 1</li>
        <li>name 2</li>
      </ul>
    </div>
  );
}

const WrappedUsers = ScreenWrapper(Users, {
  prefix: 'LBL_USERS',
  title: 'LBL_USERS_TITLE',
  description: 'LBL_USERS_DESC',
});

export default WrappedUsers;
