Vue.component('post', {
  props: ['post'],
  template: `
  <div class="box">
    <a :href=post.url>
      <div class="card-content">
        <div class="media">
          <div class="media-left" v-if=post.thumbnail>
            <figure class="image is-48x48">
              <img :src=post.thumbnail alt="image">
            </figure>
          </div>
          <div class="media-content">
            <div class="title is-5">{{ post.title }}</div>
            <div class="subtitle is-6">{{ post.subreddit }}</div>
          </div>
        </div>
      </div>
      <div v-if=post.preview class="card-image">
        <figure class="image">
          <img :src=post.preview.images[0].source.url alt="image">
        </figure>
      </div>
    </a>
    <footer class="card-footer">
      <div href="#" class="card-footer-item">{{ post.ups }} Ups</div>
      <comments :postId=post.id></comments>
    </footer>
  </div>`
})
