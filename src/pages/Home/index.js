import Header from "../../components/Header";
import Coments from "../../components/Coments";
import { FeedContainer, GistIcon, Main, Post } from "./styles";

function Home() {

    const posts = [
        {
            titulo: "Este é o titulo", descricao: "Esta é a descrição"
        },
        {
            titulo: "Este é o titulo 2", descricao: "Esta é a descrição 2"
        },
    ];

    return (
        <>
            <Header />
            <Main>
                <nav>
                    Profile
                </nav>
                <FeedContainer>
                    {posts.map(post => <PostCard post={post} />)}
                </FeedContainer>
                <aside>
                    Actions
                </aside>
            </Main>
        </>
    );
}

function PostCard(props) {

    return (
        <Post>
            <header>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <div>
                    <strong>
                        por {props.post.titulo}
                    </strong>
                    <p>
                        {props.post.descricao}
                    </p>
                </div>
                <GistIcon />
            </header>
            <main>
                <div>
                    <h1>Título</h1>
                    <p>Descrição da postagem bla bla bla</p>
                </div>
                <img src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp" />
                <section>
                    <p>Front-end</p>
                    <p>CSS</p>
                    <p>JS</p>
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                <Coments />
            </footer>
        </Post>
    );
}

export default Home;