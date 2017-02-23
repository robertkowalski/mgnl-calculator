<div id="${content.uid!}" class="mgnl-calculator">
  <h2>${content.title!}</h2>

  <label>
    ${content.value1!}
    <input class="mgnl-calculator__value1"/>
  </label>

  <label>
    ${content.value2!}
    <input class="mgnl-calculator__value2"/>
  </label>

  <input
    data-formula="${content.formula!}"
    disabled="true"
    class="mgnl-calculator__result" />
</div>

<script>
(function (window, $) {
  $(document).ready(function () {
    var id = '#${content.uid!}'
    var ${content.uid!} = new window.MgnlCalculator(id)
  })
})(window, jQuery)
</script>
