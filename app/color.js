import $ from 'jquery'
import { Click } from 'circle.js'

function buttonClick() {
  $(() => {
    $('#pink').on('click', function(e) {
      console.log(e)
      Click.fillStyle = '#FF00FF'
      })
    })
  }
}
