const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-full min-h-screen bg-zinc-100">
      <main className="flex items-center justify-center w-full h-full p-8">
        {children}
      </main>
    </div>
  );
}

export default AuthLayout;