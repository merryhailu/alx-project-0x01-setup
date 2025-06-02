import React, { FC } from 'react';
import { UserProps } from '@/interfaces';

const UserCard: FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold">{user.name} (@{user.username})</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="mt-2">📍 {user.address.city}, {user.address.street}</p>
      <p>📞 {user.phone}</p>
      <p>
        🌐{' '}
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {user.website}
        </a>
      </p>
      <p className="mt-2 font-medium">🏢 {user.company.name}</p>
    </div>
  );
};

export default UserCard;