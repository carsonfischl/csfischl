type Props = {
    title: string
    coverImage: string
    date: string
    author: string
}

function PostHeader({ title, coverImage, date, author }: Props) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={coverImage} alt={title} />
            <p>{date}</p>
            <p>{author}</p>
        </div>
    )
}

export default PostHeader