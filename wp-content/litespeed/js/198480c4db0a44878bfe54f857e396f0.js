jQuery(document.body).on("updated_checkout",function(e){jQuery(".woocommerce-notices-wrapper .woocommerce-info").each(function(e,o){"yes"===jQuery(o).data("wc_trs")&&jQuery(o).remove()})})
;