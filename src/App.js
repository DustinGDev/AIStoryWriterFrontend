import Navigation from './components/Navigation';
import Content from './components/Content';
import './assets/css/App.css';

export default {
  data: function() {
    return {
      test: 'testvals',
      loggedIn: false
    }
  },
  mounted() {
    setInterval(() => {
      this.test = this.test + ' value';
    }, 1000)
  },
  render() {
    return(
      <main>
        <Navigation loggedIn={this.loggedIn}/>
        <Content test={this.test}/>
        <modals-container onFormClicked={(data) => console.log('form', data)}/>
      </main>
    )
  }
}
