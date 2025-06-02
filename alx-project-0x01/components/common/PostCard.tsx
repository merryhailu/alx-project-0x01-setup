import React from 'react';

const PostCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="border p-4 rounded shadow-md">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p>{description}</p>
  </div>
);

export default PostCard;