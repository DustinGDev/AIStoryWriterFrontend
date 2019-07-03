import Test from './components/Test.js'

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
      <p>
      Test
      <Test test={this.test}/>
      </p>
    )
  }
}
