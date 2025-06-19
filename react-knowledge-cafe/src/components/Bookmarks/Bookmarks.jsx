import Bookmark from "../Bookmark/Bookmark"

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 text-center bg-gray-300 ml-4 mt-2 p-4">
            <div>
                <h3>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;