import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="border p-4 rounded shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold">{name} (@{username})</h2>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="mt-2">📍 {address.city}, {address.street}</p>
      <p>📞 {phone}</p>
      <p>
        🌐{' '}
        <a
          href={`http://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {website}
        </a>
      </p>
      <p className="mt-2 font-medium">🏢 {company.name}</p>
    </div>
  );
};

export default UserCard;