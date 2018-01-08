(function () {
  with (this) {
    return _c('section', {
      staticClass: "simple"
    }, [_c('div', {
      staticClass: "title"
    }, [_v(_s(title))]), _v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (title),
        expression: "title"
      }],
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": (title)
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing)
            return;
          title = $event.target.value
        }
      }
    })])
  }
}
)
