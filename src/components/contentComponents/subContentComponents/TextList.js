import TextView from './TextView';
import './../../../assets/css/contentComponents/subContentComponents/TextList.css';

export default {
    data: function() {
        return {
            selectedIndex: 0,
            isListArray: null,
            keysArray: null,
            buttonWidth: 0
        }
    },
    methods: {
      handleClick: function(key, index) {
          this.selectedIndex = this.isListArray ? index : key;
      }
    },
    props: ['listObject'],
    beforeMount: function() {
      this.isListArray = Array.isArray(this.listObject);
      if (!this.isListArray) {
          this.keysArray = Object.keys(this.listObject);
          this.selectedIndex = this.keysArray[0];
      } else {
          this.keysArray = this.listObject;
      }

      this.buttonWidth = 90/this.keysArray.length + '%';
    },
    render(h) {
        return (
            <div class="text-list-default">
                <div class="text-list-header">
                    {this.keysArray.map((menueItem, i) => {
                        const isSelected = this.selectedIndex === menueItem || this.selectedIndex === i;

                        return <button style={{width: this.buttonWidth}} class={'default-button ' + (isSelected ? 'active' : '')} onClick={() => {this.handleClick(menueItem, i)}}>{menueItem}</button>
                    })}
                </div>
                <div class="text-list-content">
                    {this.isListArray ? this.$slots.default && this.$slots.default[this.selectedIndex] : <TextView text={this.listObject[this.selectedIndex]}/>}
                </div>
            </div>
        )
    }
}