<template>
     <div class="article-meta">
          <nuxt-link :to="{
            name:'profile',
            query: {
              username: article.author.username
            }
          }">
            <img :src="article.author.username" />
          </nuxt-link>
          <div class="info">
            <a href class="author">{{article.author.username}}</a>
            <span class="date">{{article.createdAt | date('MMM DD, YYYY')}}</span>
          </div>
          <button 
            class="btn btn-sm btn-outline-secondary"
            :class="article.following"
          >
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{article.author.username}}
            <span class="counter">({{article.author.bio || 0}})</span>
          </button>
          &nbsp;&nbsp;
          <button 
            class="btn btn-sm btn-outline-primary"
            :class="article.favorited"
          >
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post
            <span class="counter">({{article.favoritesCount}})</span>
          </button>
        </div>
</template>

<script>
export default {
    name: 'ArticleMate',
    props:{
        article: {
            tupe: Object,
            required: true
        }
    }
}
</script>

<style>

</style>