Vue.component('comments', {
  props: ['postId'],
  template: `
    <div class="card-footer-item" @click="showComment">
      <div>comments</div>
      <div class="modal" :id=this.postId>
        <div class="modal-background" @click="hideComment"></div>
        <div class="modal-content">
          <div :id="this.postId+'comments'" class="box comments">
            <div class="loader" style="font-size: 5em;"></div>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="hideComment"></button>
      </div>
    </div>`,
  methods: {
    showComment () {
      document.getElementById(this.postId).classList.add('is-active')
      fetch('https://www.reddit.com/comments/' + this.postId + '/.json?')
        .then(res => res.json())
        .then(res => {
          console.log(res)
          document.getElementById(this.postId + 'comments').innerHTML = ''
          let indent = (depth) => {
            let str = ''
            for (;depth--;) str += '<span class="indent"></span> '
            return str
          }
          let decent = (replies, depth = 0) => {
            replies.data.children.forEach(data => {
              document.getElementById(this.postId + 'comments').innerHTML +=
                '<div class="card card-content comment">' +
                indent(depth) + '<div class="content">' +
                (data.data.body || '...') +
                '</div></div><br>'
              data.data.replies && decent(data.data.replies, depth + 1)
            })
          }
          let traverseComment = (element) => {
            document.getElementById(this.postId + 'comments').innerHTML +=
              '<div class="card card-content comment"><div class="content">' +
              (element.data.body || '...') +
              '</div></div><br>'
            element.data.replies && decent(element.data.replies, 1)
          }
          res.forEach(element => element.data.children.forEach(traverseComment))
        })
    },
    hideComment (event) {
      document.getElementById(this.postId).classList.remove('is-active')
      event.stopPropagation()
    }
  }
})
