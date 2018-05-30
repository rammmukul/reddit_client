Vue.component('posts', {
  props: ['posts'],
  template: `
  <div>
    <div class="section">
      <div v-for="post in posts"  class="section">
          <post :key="post.id" :post="post.data"></post>
      </div>
      <div class="box has-text-centered">
          <div class="loader" style="font-size: 5em;"></div>            
      </div>
    </div>
  </div>`
})
