Vue.component("post", {
  props: ["data"],
  template: `
  <div class="card">
    <a :href=data.url>
      <div class="card-content">
        <div class="media">
          <div class="media-left" v-if=data.thumbnail>
            <figure class="image is-48x48">
              <img :src=data.thumbnail alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <div class="title is-5">{{ data.title }}</div>
            <div class="subtitle is-6">{{ data.subreddit }}</div>
          </div>
        </div>
      </div>
      <div v-if=data.preview class="card-image">
        <figure class="image">
          <img :src=data.preview.images[0].source.url alt="Placeholder image">
        </figure>
      </div>
    </a>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">++</a>
      <div href="#" class="card-footer-item">{{ data.ups }}</div>
      <a href="#" class="card-footer-item">--</a>
    </footer>
  </div>`
})
