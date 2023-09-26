import React from 'react';

const commentsData = [
      {
        id: 1,
        author: {
          username: "User1",
          avatar: "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dolor vel odio fermentum viverra. Sed vitae laoreet massa. Maecenas eu vestibulum arcu. Suspendisse consectetur placerat urna, eu sollicitudin nunc consequat in. In sed velit ac libero bibendum tincidunt. Fusce suscipit, elit a posuere volutpat, odio ipsum placerat purus, non efficitur est elit eu quam. ",
        timestamp: "2023-09-25T08:00:00Z",
        replies: [
          {
            id: 2,
            author: {
              username: "User2",
              avatar: "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
            },
            text: "Reply to the first comment.",
            timestamp: "2023-09-25T08:05:00Z",
            replies: [
              {
                id: 4,
                author: {
                  username: "User1",
                  avatar: "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
                },
                text: "Nested reply to User2.",
                timestamp: "2023-09-25T08:15:00Z",
                replies: []
              },
              {
                id: 5,
                author: {
                  username: "User3",
                  avatar: "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
                },
                text: "Another nested reply to User2.",
                timestamp: "2023-09-25T08:20:00Z",
                replies: []
              },
            ],
          },
          {
            id: 3,
            author: {
              username: "User3",
              avatar: "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
            },
            text: "Another reply to the first comment.",
            timestamp: "2023-09-25T08:10:00Z",
            replies: [
              {
                id: 6,
                author: {
                  username: "User1",
                  avatar: "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
                },
                text: "Reply to the reply by User3.",
                timestamp: "2023-09-25T08:25:00Z",
                replies: [
                  {
                    id: 7,
                    author: {
                      username: "User2",
                      avatar: "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
                    },
                    text: "Nested reply to User1 in User3's reply.",
                    timestamp: "2023-09-25T08:30:00Z",
                    replies: []
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 8,
        author: {
          username: "User4",
          avatar: "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
        },
        text: "In hac habitasse platea dictumst. Vivamus a turpis in mi dignissim iaculis ut nec dui. Sed a ipsum at urna malesuada interdum. Nunc sit amet elit nec eros interdum blandit. Nulla eget ipsum quis nunc bibendum gravida. ",
        timestamp: "2023-09-25T08:40:00Z",
        replies: []
      },
      {
        id: 9,
        author: {
          username: "User5",
          avatar: "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
        },
        text: "Duis sollicitudin libero nec purus sodales, nec dictum odio rhoncus. Suspendisse potenti. Proin vel semper velit. Nam suscipit, augue eu interdum tempus, urna nunc efficitur felis, at tincidunt orci nisi eu nisl. Vivamus condimentum tristique ex, eu tincidunt libero varius sed.",
        timestamp: "2023-09-25T08:45:00Z",
        replies: [
          {
            id: 10,
            author: {
              username: "User6",
              avatar: "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
            },
            text: "Reply to the comment by User5.",
            timestamp: "2023-09-25T08:50:00Z",
            replies: [
              {
                id: 11,
                author: {
                  username: "User7",
                  avatar: "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
                },
                text: "Nested reply to User6.",
                timestamp: "2023-09-25T08:55:00Z",
                replies: []
              },
            ],
          },
        ],
      },
]
  
const Comment = ({ data }) => {
    const { author, text } = data;
    return (
        <div className='flex mt-4'>
            <img src={author.avatar} alt='user' className='w-9 h-9'/>
            <div className='ml-3'>
                <p className=' font-medium font-sans text-sm'>@{author.username}</p>
                <p className='font-sans text-sm mt-2'>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({ comments }) => {
    return comments.map((comment) => (
        <div key={comment.id}>
            <Comment data={comment}/>
            <div className='pl-8'>
                {/* 
                    so, series of this comment is what? replies... 
                    and at the end of the day, what are replies? they are again comment list
                    so, instead of this comment, can I call comment list? Yes
                 */}
                {/* <Comment key={comment.id} data={comment}/> */}
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ));
};

const CommentsContainer = () => {
  return (
    <div className=' w-[675px] pr-6 py-4'>
        <p>Comments: </p>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer;