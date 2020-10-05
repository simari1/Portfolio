<template>
  <div class="container">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">期間</th>
          <th scope="col">どんな会社</th>
          <th scope="col">どんな仕事</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">1</td>
          <td>5年</td>
          <td>保険会社</td>
          <td>
            システム部門で社内SEとして働いていました。
            システム構築を自分でしたい、プログラムをもっと書きたい！という希望があり転職しました。
          </td>
        </tr>
        <tr>
          <td scope="row">2</td>
          <td>5年</td>
          <td>外資系SIer</td>
          <td>
            C#とAzureメインで開発者として働いています。<br />
            <br />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info"
            >下積み期間</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              最初の1年間は主に問い合わせ対応がメインでした。ヘルプデスクの真似事の様な事もしていました。
              その時にバグが起きたプログラムのソースを読んだりして、プログラムを読む技術が身についたと思います。
              使用していた言語は主にvb6やvbs。</b-card-text
            >
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info"
            >プログラミングを楽しむ期間</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              2年目以降は主にWinOS系の端末制御でインフラ紛いのことやvb6からvb.netへのリプレース等自分でプログラムを書く仕事が増えました。
              年次が上がるとプログラムを書かなくなる会社も多いと思いますが、本人の意向を尊重してコーディング作業を回してくれました。
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info"
            >Unixに翻弄される日々</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text
              >4年目以降はいきなりUnix系のサーバメンテ担当に回されました。CUIに翻弄され毎日が格闘でした。
              お前のシステムを通ると1バイトデータが抜けるって(´・ω・`)<br>
              知らんがなと言いたい気持ちをぐっと抑えて1990年代に書かれた数千行のC言語のコードを見るのはツラかった。。。
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-4 variant="info"
            >井戸から出る</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text
              >ずっとvb一筋でやってきてSOLIDも知らなかった自分には全てがカルチャ―ショックでした。
              自分ではプログラムはそこそこ書けるつもりでしたが、
              転職直後のプロジェクトで上司に「君の技術は20年遅れている」と言われ衝撃を受ける。（まあ読んでいたのは1990年代のソースだから当たっているｗ）
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-5 variant="info"
            >技術を楽しむ期間</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              残業の多さやプレッシャーに潰されそうになりつつsurviveする。
              ただ学んだことをすぐ生かせる環境があり、知的好奇心を満たせるプロジェクトが多かったです。
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-6 variant="info"
            >Webを勉強し始める</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
                ずっと薄々気づいていたけど、Web技術を全くやっていなかったので、このままじゃいけない！と遅まきながら一念発起しWebの勉強を始める。
                とりあえずHTML,CSS,Bootstrap,JavaScript,TypeScript,Vue.js, Node.js等手当たり次第に手を出すが、
                WebPackやBabel等の設定が意味不明すぎて死亡。
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
table {
  border: $border;
  th {
    &:nth-of-type(3) {
      text-align: left;
    }
    &:nth-of-type(4) {
      text-align: left;
    }
  }
  td {
    word-break: break-all;
    &:nth-of-type(1) {
      width: 10%;
    }
    &:nth-of-type(2) {
      width: 15%;
    }
    &:nth-of-type(3) {
      width: 15%;
      text-align: left;
    }
    &:nth-of-type(4) {
      width: 60%;
      text-align: left;
    }
  }
}

.accordion {
  margin-top: 60px;
  .btn-info {
    background-color: $imageColor;
  }
}
</style>