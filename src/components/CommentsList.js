const CommentsList = ({ comments }) => 

{
    let processedComments = comments || [];
    return (
        <>
        <h3>Comments:</h3>
        {processedComments.map(comment => (
            <div className="comment" key={comment.postedBy + ': ' + comment.text}>
                <h4>{comment.postedBy}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
        </>
    );
}



export default CommentsList;