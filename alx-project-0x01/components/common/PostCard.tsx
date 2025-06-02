const PostCard = ({ title, content }: { title: string, content: string }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-gray-600">{content}</p>
        </div>
    )
}
            
export default PostCard;    