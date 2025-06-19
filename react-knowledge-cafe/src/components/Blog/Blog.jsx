import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, reading_time, posted_date, hashtags, id} = blog;
    
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover of ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <div className='w-14'>
                    <img src={author_img} alt="" />
                </div>
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <small>{posted_date}</small>
                </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-red-600 text-2xl'><FaBookmark/></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a>#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time, id)} className='text-bold text-purple-800 underline'>Mark as Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;