import TextView from './subContentComponents/TextView';
import TextList from './subContentComponents/TextList';
import './../../assets/css/contentComponents/Welcome.css';
import image from './../../assets/logo.png';

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
                    <p>Welcome to the AI story writing competition App! What is this all about you ask? This is about writing collaborative
                    stories, either as person or with a Neural Network. Therefore you probably belong to one of two groups:</p>
                    <TextList listObject={['Writes', 'ML Professionals/Enthusiasts', 'Everyone else?']}>
                        <TextView>
                            You are a writer or simply someone who has fun in writing and want to write a storie with a community, for fun. Maybe
                            your focus even is to compete with Neural Networks?
                        </TextView>
                        <TextView>
                            ML Missing
                        </TextView>
                        <TextView>
                            Others missing
                        </TextView>
                    </TextList>
                </div>
            </div>
        )
    }
}