import React from 'react';
import wilson from '../../../images/wilson.png';
import BlogPost from '../BlogPost/BlogPost';

const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestiae repellat praesentium beatae, itaque facere.',
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '20 April 2021'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestiae repellat praesentium beatae, itaque facere.',
        author: 'Dr. Sinthia',
        authorImg: wilson,
        date: '20 April 2021'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestiae repellat praesentium beatae, itaque facere.',
        author: 'Dr. Watson',
        authorImg: wilson,
        date: '20 April 2021'
    }
]

const Blogs = () => {
    return (
        <section className="blogs my-5 py-5">
            <div className="container">
                <div className="blogs-header text-center mt-1">
                    <h5 className="text-brand">OUR BLOG</h5>
                    <h1>From Our Blog News</h1>
                </div>

                <div className="mt-5 pt-3">
                    <div className="row">
                        {
                            blogData.map(blog => <BlogPost blog={blog} key={blog.author} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;