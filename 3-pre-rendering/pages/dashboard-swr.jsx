import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();

  return data;
};

const DashboardSWR = () => {
  const { data: dashboardData, error } = useSWR("dashboard", fetcher);

  if (error) return <h1>Failed to load</h1>;
  if (!dashboardData) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Posts: {dashboardData.posts}</h2>
      <h2>Likes: {dashboardData.likes}</h2>
      <h2>Followers: {dashboardData.followers}</h2>
      <h2>Following: {dashboardData.following}</h2>
    </div>
  );
};

export default DashboardSWR;
