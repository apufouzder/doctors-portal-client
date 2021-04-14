import React from 'react';

const BlogPost = (props) => {
    const { title, description, author, authorImg, date } = props.blog;
    return (
        <div className="col-md-4">
            <div className="card shadow-sm pt-4">
                <div className="car-header d-flex algin-items-center">
                    <img src={authorImg} width="60" className="mx-3" alt="" />
                    <div>
                        <h6 className="text-brand">{author}</h6>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;