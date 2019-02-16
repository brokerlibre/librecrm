<template>
  <v-container fluid>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  created: function() {
    (function(w, d, s, u) {
      w.RocketChat = function(c) {
        w.RocketChat._.push(c);
      };
      w.RocketChat._ = [];
      w.RocketChat.url = u;
      var h = d.getElementsByTagName(s)[0],
        j = d.createElement(s);
      j.async = true;
      j.src =
        "https://rocketchat.temposerver.ml/packages/rocketchat_livechat/assets/rocketchat-livechat.min.js?_=201702160944";
      h.parentNode.insertBefore(j, h);
    })(
      window,
      document,
      "script",
      "https://rocketchat.temposerver.ml/livechat"
    );
  }
};
</script>

<style>
</style>
