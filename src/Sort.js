class BubbleSort {
  constructor(array) {
    this.array = array;
  }

  swap(arr, index1, index2) {
    var memo = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = memo;
    return arr;
  }

  //async function to make BubbleSort work step by step
  delay(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  //additional method to draw each step of sorted array
  drawArray() {
    let pTag = document.createElement("p");
    this.array.forEach((el, i) => {
      let elTag = document.createElement("span");
      elTag.id = i;
      elTag.innerText += el;
      pTag.append(elTag);
    });
    document.getElementById("array-container").append(pTag);
  }

  async sort() {
    if (this.array.length < 2) {
      return this.array;
    }

    this.drawArray();

    let iteration = 0;
    while (true) {
      iteration = 0;
      for (var i = 0; i < this.array.length; i++) {
        if (this.array[i] > this.array[i + 1]) {
          this.swap(this.array, i, i + 1);
          iteration++;
          //this one is necessary to see the coloring AFTER array is drawn
          await this.delay(3000);
          document.getElementById(i).className = "orange";
          document.getElementById(i + 1).className = "red";
          //SUPER IMPORTANT!! get rid of classes,
          //so VS algorithm changes colors on the NEXT array
          for (const node of document.getElementsByTagName("span")) {
            node.id = "";
          }
          //wait till coloring is done
          await this.delay(3000);
          this.drawArray();
        }
      }
      //get out of while loop at some point
      if (iteration === 0) {
        return this.array;
      }
    }
  }
}

module.exports = BubbleSort;
