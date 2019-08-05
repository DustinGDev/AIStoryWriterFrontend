import TextView from './subContentComponents/TextView';
import TextList from './subContentComponents/TextList';
import './../../assets/css/contentComponents/Welcome.css'

export default {
    render() {
        return (
            <div class="welcome">
                <h1>Welcome</h1>
                <p>To the AI story writing competition App! What is this all about you ask? This is about writing collaborative
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
        )
    }
}