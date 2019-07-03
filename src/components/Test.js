import Vue from 'vue';

export default {
  props: ['test'],
  render(h) {
    console.log(this.test)
    return (
      <div>Test {this.test}</div>
    )
  }
}
