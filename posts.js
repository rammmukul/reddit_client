Vue.component('posts', {
  props: ['posts'],
  template: `
  <div>
    <div v-for="post in posts">
        <post :key="post.id" :post="post.data"></post>
    </div>
    <div class="box has-text-centered">
        <div class="loader" style="font-size: 5em;"></div>            
    </div>            
  </div>`
})
