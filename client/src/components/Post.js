import React from 'react';

function Post() {
  const teste = {
    userName: 'arua',
    postlink:
      'https://www.clubeparacachorros.com.br/wp-content/uploads/2018/07/cachorros-mais-fofos-do-mundo-lulu-da-pomerania-filhote.jpg',
    description: 'Cachorrinho fofinho',
    id: 1
  };

  return (
    <div>
      <section className="d-flex justify-content-between p-2">
        <i className="far fa-user text-dark"></i>
        <p className="align-self-start">{teste.userName}</p>
        <span>...</span>
      </section>
      <div className="card">
        <img
          className="card-img-top"
          src={teste.postlink}
          alt="Card image cap"
        />
        <div className="d-flex card-body bg-primary justify-content-between">
          <div className="d-flex">
            <i className="far fa-heart  pl-2"></i>
            <i className="far fa-comment  pl-2"></i>
            <i className="far fa-paper-plane  pl-2"></i>
          </div>
          <div>
            <i className="far fa-bookmark"></i>
          </div>
        </div>
        <div className="card-body bg-secondary">contador like</div>
        <div className="card-body bg-danger">
          {teste.userName} {teste.description}
        </div>
        <div className="card-body">Comments</div>
        <div className="card-body bg-info">
          <form>
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Comment"
                />
              </div>
              <div>
                <button type="submit" className="btn btn-link">
                  {' '}
                  Publish
                </button>
              </div>
            </div>
          </form>
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
