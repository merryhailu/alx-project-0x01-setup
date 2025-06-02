import React from 'react';
import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';

interface UsersProps {
  posts: UserProps[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  return (
    <>
    <Header />
    <div className="p-8 flex flex-col items-center gap-4">
      <h1 className="text-3xl mb-4 font-bold">Users Page</h1>
      {posts.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;