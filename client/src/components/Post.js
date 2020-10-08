import React from "react";

function Post() {
  return (
    <div>
      <section className="d-flex justify-content-between p-2">
        <i className="far fa-user text-dark"></i>
        <p className="">User_name</p>
        <span>...</span>
      </section>
      <div className="card"style={{width: '18rem;'}}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
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
