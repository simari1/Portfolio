<template>
  <div class="container">
    <div class="items d-flex flex-wrap-reverse justify-content-center"
            v-for="skill in skills" :key="skill.id">
      <div class="item-img col-md-6 col-12 aligh-self-center">
          <img :src="require(`../assets/img/${skill.logo}`)" />
      </div>
      <div class="col-md-5 col-12 p-0 align-self-center">
        <div class="item-title">
            <h2>{{skill.name}}</h2>
            <h3><b-badge variant="primary">{{skill.years}}年</b-badge></h3>
        </div>
        <p>
          {{skill.explanation}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import skillsJson from '../assets/skills.json';

export default {
    data() {
        return {
            skills: [
                {
                    id: 1,
                    name: 'C#, VB.Net',
                    logo: 'C-Sharp.svg',
                    years: '8',
                    explanation: 'Azureと連携するといったらC#！C#の枠の中では、VisualStudio, VSTO, WPF, ASP.Net, .Net Core等もちょこちょこやっています。（VB.Net最近触ってないけど。。。）経験だけ長い。。（汗',
                },
                {
                    id: 2,
                    name: 'Azure',
                    logo: 'azure.svg',
                    years: '3',
                    explanation: 'Azure大好きです。Azureを使ってコードも書けて、インフラもできる両刀使いになりたい。',
                },
                {
                    id: 3,
                    name: 'Powershell',
                    logo: 'Powershell.png',
                    years: '2',
                    explanation: 'スクリプト言語の癖して、殆ど全てのMS製品を操作可能。.Netのクラスを使えて、単体テストも書ける。Core版ならUnixでも使えるよ！Batやvbsは早く駆逐されるべき。',
                },
                {
                    id: 4,
                    name: 'HTML, CSS, JavaScript',
                    logo: 'HTML.png',
                    years: '1',
                    explanation: '只今鋭意勉強中。Visual Studioに甘やかされて育った身としては、開発環境を構築するのが既に大変。。SCSSに惚れる。TypeScriptもやっていきたいな。',
                },
                {
                    id: 5,
                    name: 'Node.js',
                    logo: 'nodejs.png',
                    years: '1',
                    explanation: '只今鋭意勉強中。サーバー側もやりたい、、、でも新しい言語覚えるの面倒くさい、、、そうだNode.jsにしよう！という浅い考えです。とりあえずimportなのかrequireなのかはっきりしてほしい。。。そんなレベル。',
                },
                {
                    id: 6,
                    name: 'Vue.js',
                    logo: 'Vue.png',
                    years: '1',
                    explanation: '只今鋭意勉強中。選定理由はAngularやReactと比べてアイコンがかっこいいから（爆）。初めてのJavaScriptフレームワークということで、ComponentやMVVMとか難しいけど、モダンなWebアプリ開発楽しい。',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.container {
  .items {
    display: flex;
    border: $border;
    padding: 10px;
    min-height: 250px;
    &:nth-child(odd){
      flex-direction: row-reverse;
    }
    .item-title{
      h2, h3{
          vertical-align: top;
          display: inline-block;
          margin-left: 5px;
          margin-right: 5px;
      }
    }

    .item-img{
      margin: auto 0;
    }
    img {
      max-width: 300px;
      height: auto;
      padding: 0 15px;
    }
  }
}
</style>