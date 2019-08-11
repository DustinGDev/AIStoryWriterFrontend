import './../../assets/css/contentComponents/Welcome.css';
import writer from './../../assets/writer.jpg';
import scientist from './../../assets/scientist.jpg';
import explorer from './../../assets/explorer.jpg';

export default {
    render() {
        return (
            <div class="row m-0">
                <div class="col-sm-7" id="welcome-logo"></div>
                <div class="col-sm-5  px-3 py-5">
                    <blockquote class="blockquote">
                        <p class="mb-0" id="quote">“The first draft of anything is shit.” </p>
                        <footer class="blockquote-footer float-right"><cite title="Source Title">Ernest Hemingway</cite></footer>
                    </blockquote>
                    <section class="pt-5">
                        <h5>Welcome to the AI story writing competition App!</h5>
                        <p>What is this all about you ask? Good question.</p>
                        <p>This is about collaborative writing of stories, either as a person or with a the help of Neural Network.</p>
                        <p>That said, you probably belong to one of the groups below:</p>

                        <div class="card" onClick={() => console.log('card click')}>
                            <div class="card-body">
                                <h5 class="card-title">Writer</h5>
                                <p class="card-text">You are a writer or simply someone who enjoys writing and want to write a story with a community, for fun. Maybe
                                    your focus even is to compete with Neural Networks?
                                </p>
                            </div>
                            <img src={writer} class="card-img-top" alt="writer"/>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">ML Enthusiast</h5>
                                <p class="card-text">You are a data scientist, machine learning professional or simply a machine learning focused geek.
                                    Not surprisingly, you wqant to test your newest text generator on a story writing challenge.
                                </p>
                            </div>
                            <img src={scientist} class="card-img-top" alt="scientist"/>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Explorer</h5>
                                <p class="card-text">You explore the boundaries of human knowledge. You seek new and exciting discoveries. The AI seems fascinationg for you.
                                </p>
                            </div>
                            <img src={explorer} class="card-img-top" alt="explorer"/>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}