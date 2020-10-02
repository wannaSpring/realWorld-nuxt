<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <article-mate :article="article"></article-mate>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body" />
      </div>

      <hr />

      <div class="article-actions">
        <article-mate :article="article"></article-mate>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <article-comments :article="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入api
import { getArticleDetails } from "@/api/article";
// 解析md
import markdownIt from "markdown-it";
// 拆分重复组件
import ArticleMate from "./components/article-mate";
import ArticleComments from "./components/article-comments";
const md = new markdownIt();
export default {
  // 中间件
  middleware: "authenticated",
  name: "article",
  async asyncData({ params }) {
    const { data } = await getArticleDetails(params.slug);
    const article = data.article;
    article.body = md.render(article.body);
    return {
      article,
    };
  },
  // 注册组件
  components: {
    ArticleMate,
    ArticleComments
  },
  head() {
    return {
      title: `${this.article.title} - realworld`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        }
      ]
    }
  }
};
</script>

<style>
</style>