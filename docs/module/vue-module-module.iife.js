var vueModuleModule = function(vue2) {
  "use strict";
  const name = "vue-module-module";
  const Home_vue_vue_type_style_index_0_scoped_a21986af_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main = {};
  const _withScopeId = (n) => (vue2.pushScopeId("data-v-a21986af"), n = n(), vue2.popScopeId(), n);
  const _hoisted_1 = { class: "home" };
  const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue2.createElementVNode("p", null, "\u8FD9\u91CC\u662F\u6A21\u5757\u5DE5\u7A0B\u9875\u9762", -1));
  const _hoisted_3 = [
    _hoisted_2
  ];
  function _sfc_render(_ctx, _cache) {
    return vue2.openBlock(), vue2.createElementBlock("div", _hoisted_1, _hoisted_3);
  }
  const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a21986af"]]);
  const routes = [
    {
      path: "/module-page",
      name: "modulePage",
      component: Home
    }
  ];
  const module = {
    name,
    install(context) {
      routes.forEach((item) => {
        context.app.config.globalProperties.$router.addRoute(item);
      });
    }
  };
  return module;
}(vue);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLW1vZHVsZS1tb2R1bGUuaWlmZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhZ2VzL0hvbWUudnVlIiwiLi4vLi4vc3JjL3JvdXRlcy5qcyIsIi4uLy4uL3NyYy9tb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaG9tZVwiPlxuICAgIDxwPui/memHjOaYr+aooeWdl+W3peeoi+mhtemdojwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIHNjb3BlZD5cbi5ob21lIGltZyB7XG4gIHdpZHRoOiA1MCU7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZXMvSG9tZS52dWVcIjtcbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHBhdGg6IFwiL21vZHVsZS1wYWdlXCIsXG4gICAgbmFtZTogXCJtb2R1bGVQYWdlXCIsXG4gICAgY29tcG9uZW50OiBIb21lLFxuICB9LFxuXTtcbiIsImltcG9ydCB7IG5hbWUgfSBmcm9tIFwiLi4vcGFja2FnZS5qc29uXCI7XG5pbXBvcnQgcm91dGVzIGZyb20gXCIuL3JvdXRlc1wiO1xuLy8g5a+85Ye65qih5Z2X5a6a5LmJ5a+56LGhXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWUsXG4gIGluc3RhbGwoXG4gICAgLyoqXG4gICAgICogQHR5cGUge2ltcG9ydCgndnVlLW1vZHVsZS1sb2FkZXIvc3JjL2ludGVyZmFjZXMnKS5Db250ZXh0fVxuICAgICAqL1xuICAgIGNvbnRleHRcbiAgKSB7XG4gICAgcm91dGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb250ZXh0LmFwcC5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kcm91dGVyLmFkZFJvdXRlKGl0ZW0pO1xuICAgIH0pO1xuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJfcG9wU2NvcGVJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ08sUUFBQSxlQUFBLGFBQVksWUFBQSxpQkFBQSxHQUFBLElBQUEsRUFBQSxHQUFBQSxnQkFBQSxHQUFBO0FBQ2YsUUFBQSxhQUFBLEVBQUEsT0FBQSxPQUFBOztRQUFnQixhQUFBO0FBQUE7O0FBRGxCLFdBQUEsWUFBQSxNQUFBLFFBQUE7Ozs7QUNBYSxRQUFBLFNBQUE7QUFBQSxJQUNiO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsSUFDWjtBQUFBLEVBQ0g7QUNKZSxRQUFBLFNBQUE7QUFBQSxJQUNiO0FBQUEsSUFDQSxRQUlFLFNBQ0E7QUFDQSxhQUFPLFFBQVEsVUFBUTtBQUNyQixnQkFBUSxJQUFJLE9BQU8saUJBQWlCLFFBQVEsU0FBUyxJQUFJO0FBQUEsTUFDL0QsQ0FBSztBQUFBLElBQ0Y7QUFBQSxFQUNIOzs7In0=
