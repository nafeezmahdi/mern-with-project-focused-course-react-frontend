import UserList from "../components/UserList";

export default function User() {
  const USERS = [
    {
      id: "u1",
      name: "Mahdi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03LbL4d7BaUB0hHmKYnpEFydmt84i8xUpefMRTduFqvBr8GZJxcnFVwc0&s=10",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
}
