import React from "react";

function Post() {
  return (
    <div>
      <section className="d-flex justify-content-between p-2">
        <i className="far fa-user text-dark"></i>
        <p className="align-self-start">User_name</p>
        <span>...</span>
      </section>
      <div className="card" style={{ width: "18rem;" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body bg-primary">icones</div>
        <div className="card-body bg-secondary">contador like</div>
        <div className="card-body bg-danger">description</div>

        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Post;

/* 
Like
vazio = <i class="far fa-heart"></i>
cheio = <i class="fas fa-heart"></i>
comment = <i class="far fa-comment"></i>
send
vazio = <i class="far fa-paper-plane"></i>
cheio = <i class="fas fa-paper-plane"></i>
Bookmark
vazio = <i class="far fa-bookmark"></i>
cheio = <i class="fas fa-bookmark"></i> */
