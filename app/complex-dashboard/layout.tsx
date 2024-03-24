export default function DashboardLyout({
  children,
  notifications,
  users,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>

      <div>{users}</div>

      <div>{notifications}</div>
    </>
  );
}
