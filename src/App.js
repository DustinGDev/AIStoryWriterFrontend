import Navigation from './components/Navigation';
import Content from './components/Content';

export default {
  data: function() {
    return {
      test: 'testvals'
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
        <Navigation/>
        <Content test={this.test}/>
      </main>
    )
  }
}
