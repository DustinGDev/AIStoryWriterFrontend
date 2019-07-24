import Navigation from './components/Navigation';
import Content from './components/Content';
import Header from './components/Header';
import './assets/css/App.css';

export default {
  data: function() {
    return {
      test: 'testvals',
      activeNav: false
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
        <Navigation activeNav={this.activeNav}/>
        <Header activeNav={this.activeNav} onNavigationStateChange={() => {this.activeNav = !this.activeNav}}/>
        <Content test={this.test}/>
      </main>
    )
  }
}
